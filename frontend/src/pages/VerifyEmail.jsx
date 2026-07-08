import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "#components/ui/button.jsx";
import { Spinner } from "#components/ui/spinner.jsx";
import OtpInput from "#components/login-signup/OtpInput.jsx";
import { api } from "#api/axios.js";

export default function VerifyEmail() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const canResend = timeLeft === 0;

  const { state } = useLocation();
  const email = state?.email;
  useEffect(() => {
    if (!email) {
      navigate("/register");
    }
  }, [email, navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await api.post("/auth/verify-otp", { email, otp });
      if (result) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleResendOtp(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/resend-otp", {
        email,
        type: "PASSWORD_RESET",
      });
      if (result) {
        setOtpSent(true);
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
      setTimeLeft(60);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Verify Email</h1>

        <p className="text-sm text-gray-500 mb-6">
          Enter the OTP you received on your email address.
        </p>
        <div className="flex items-start">
          <p className="text-sm text-gray-500 my-6">Email: {email}</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <OtpInput length={6} value={otp} onChange={setOtp} error={error} />

          <Button variant="default" size="lg" disabled={isLoading}>
            {isLoading && <Spinner className="mr-2 text-white" />}
            {isLoading ? "Verifying OTP..." : "Verify OTP"}
          </Button>

          <div className="flex justify-center">
            {canResend === false ? (
              <p className="text-sm text-gray-500 my-4">
                Resend OTP in: {timeLeft}
              </p>
            ) : (
              <button
                onClick={handleResendOtp}
                className="text-sm text-indigo-600 my-4 cursor-pointer hover:underline"
              >
                Resend OTP
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
