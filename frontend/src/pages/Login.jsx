import { useState } from "react";
import FormInput from "#components/login-signup/FormInput.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios.js";
import { useAuth } from "../hooks/useAuth.js";
import { Spinner } from "#components/ui/spinner.jsx";
import { GoogleLogin } from "@react-oauth/google";
import MyLogo from "../assets/StudyMuseLogo.png";
import bgImg from "../assets/StudyMuseBgauth.png"
import { Target, Brain, Flame } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [needVerification, setIsNeedVerification] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/login", formData);
      console.log(result.data);
      if (result.data.data.isVerified === true) {
        login(result.data.data.token, null);
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response.data.message);
      if (err.response.data.code === "EMAIL_NOT_VERIFIED") {
        setIsNeedVerification(true);
      }
    } finally {
      setIsLoading(false);
    }
  }

  async function handleVerifyEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/auth/resend-otp", {
        email: formData.email,
        type: "VERIFY_EMAIL",
      });
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
    <div className="min-h-screen bg-linear-to-b lg:bg-linear-to-r from-indigo-950 via-indigo-700 to-violet-600 lg:to-purple-600 flex items-center justify-between">
      <div className="hidden h-dvh lg:flex items-center pt-2 pl-5 w-[60%]">
        <div className="h-full flex flex-col items-start w-full">
          <div className="flex gap-4 mt-16 items-start">
            <img src={MyLogo} className="h-20" />
            <h1 className="font-bold text-5xl leading-tight text-gray-100">
              StudyMuse
            </h1>
          </div>
          <div className="flex ml-5 gap-4 mt-5 items-center">
            <h1 className="font-bold text-4xl leading-tight text-gray-200">
              Your AI Study
            </h1>
            <h1 className="font-bold text-4xl leading-tight text-violet-500">
              Companion
            </h1>
          </div>
          <div className="flex ml-5 flex-col gap-4 items-start mt-4">
            <p className="text-sm text-violet-200">
              Turn your study sessions into consistent progress.
            </p>
            <div>
              <p className="text-sm text-violet-200">
                Plan smarter. Stay focused
              </p>
              <p className="text-sm text-violet-200">
                Track your growth. Learn with AI
              </p>
              <p className="text-sm text-violet-200">
                that understands how students work.
              </p>
            </div>

            <div className="flex ml-5  flex-col gap-5 items-start mt-6">
              <div className=" flex  gap-5 items-center">
                <Target size={50} className="text-violet-400" />
                <div>
                  <p className="text-1xl text-violet-200 font-semibold">
                    Smart Planning
                  </p>
                  <p className="text-sm text-gray-200">
                    Organize tasks and study schedules
                  </p>
                  <p className="text-sm text-gray-200">that actuall works.</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Brain size={50} className="text-violet-400" />
                <div>
                  <p className="text-1xl text-violet-200 font-semibold">
                    AI Companion
                  </p>
                  <p className="text-sm text-gray-200">
                    Get personalized suggestions
                  </p>
                  <p className="text-sm text-gray-200">
                    to improve your focus and productivity.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <Flame size={50} className="text-violet-400" />
                <div>
                  <p className="text-1xl text-violet-200 font-semibold">
                    Stay Consistent
                  </p>
                  <p className="text-sm text-gray-200">
                    Track your streaks and build
                  </p>
                  <p className="text-sm text-gray-200">
                    stong habits over time.
                  </p>
                </div>
              </div>
              <div className="flex h-12 gap-5 items-start mt-2">
                <div className="h-full border-2 border-violet-700 rounded-2xl"></div>
                <div>
                  <p className="text-sm text-violet-200">
                    Discipline today, success tomorrow.{" "}
                  </p>
                  <p className="text-sm text-violet-200">
                    Let's build the future together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div className=" flex w-[70%] mr-2 items-end justify-end h-full">
              <img  src={bgImg} className="w-full"/>
          </div>
      </div>
      <div className="lg:h-dvh lg:flex lg:items-center lg:justify-center lg:bg-indigo-700/30   lg:shadow-sm lg:p-8 lg:w-[50%]">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome back
          </h1>
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

            {needVerification ? (
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
            <div className=" flex justify-center">
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
                width="325"
              />
            </div>
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
    </div>
  );
}
