import { useState } from "react";
import FormInput from "#components/login-signup/FormInput.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios.js";
import { useAuth } from "../hooks/useAuth.js";
import { Spinner } from "#components/ui/spinner.jsx";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [needVerification, setIsNeedVerification] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/login", formData);
      console.log(result.data)
      if (result.data.data.isVerified === true) {
        login(result.data.data.token, null);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response.data.message);
      if(err.response.data.code === "EMAIL_NOT_VERIFIED"){
        setIsNeedVerification(true)
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post('/auth/resend-otp',{email: formData.email, type: "VERIFY_EMAIL"})
      navigate("/verify-email", {
        state: {
          email: formData.email,
        },
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h1>
        <p className="text-sm text-gray-500 mb-6">
          Log in to your StudyMuse account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <FormInput
            type="email"
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <FormInput
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            error={error}
          />

          {needVerification? (
            <Button
              onClick={handleVerifyEmail}
              variant="default"
              size="lg"
              disabled={isLoading}
            >
              {isLoading && <Spinner className="mr-2 text-white" />}
              {isLoading ? "Sending OTP..." : "Verify Email"}
            </Button>
          ) : (
            <Button variant="default" size="lg" disabled={isLoading}>
              {isLoading && <Spinner className="mr-2 text-white" />}
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          )}
          <GoogleLogin
            onSuccess={async (credentialResponse) => {
              const result = await api.post("/auth/googleAuth", {
                idToken: credentialResponse.credential,
              });
              login(result.data.data, null);
              navigate("/dashboard");
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            width="380"
          />
        </form>
        <p className="text-sm text-center text-gray-500 mt-6">
          <a
            href="/forgot-password"
            className="text-indigo-600 font-medium hover:underline"
          >
            Forgot password?
          </a>
        </p>

        <p className="text-sm text-center text-gray-500 mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-medium hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
