import { api } from "#api/axios.js";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "#components/login-signup/FormInput.jsx";
import { Button } from "#components/ui/button.jsx";
import { Spinner } from "#components/ui/spinner.jsx";
import OtpInput from "#components/login-signup/OtpInput.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft === 0) {
      return;
    }
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const canResend = timeLeft === 0;

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/password-reset-otp", { email });
      if (result) {
        setOtpSent(true);
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSubmitOtp(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/verify-otp", { email, otp });
      if (result) {
        navigate("/reset-password", {
          state: {
            email,
          },
        });
        setOtpSent(false);
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
        {!otpSent ? (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Forgot Password
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Enter your registered email address. We'll send you a verification
              code to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <FormInput
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
              />

              <Button variant="default" size="lg" disabled={isLoading}>
                {isLoading && <Spinner className="mr-2 text-white" />}
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Verify OTP
            </h1>

            <p className="text-sm text-gray-500 mb-6">
              Enter the OTP you received.
            </p>
            <div className="flex justify-around">
              <p className="text-sm text-gray-500 my-6">Email: {email}</p>
              <p className="text-sm text-center text-gray-500 mt-6">
                <a
                  href="/forgot-password"
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Edit email
                </a>
              </p>
            </div>
            <form onSubmit={handleSubmitOtp} className="flex flex-col gap-4">
              <OtpInput
                length={6}
                value={otp}
                onChange={setOtp}
                error={error}
              />

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
        )}
      </div>
    </div>
  );
}
