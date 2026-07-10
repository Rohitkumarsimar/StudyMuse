import { useState } from "react";
import FormInput from "#components/login-signup/FormInput.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/axios.js";
import { useAuth } from "../../hooks/useAuth.js";
import { Spinner } from "#components/ui/spinner.jsx";
import { GoogleLogin } from "@react-oauth/google";
import { motion } from "framer-motion";

export default function RegisterForm({ setIsReg }) {
      const navigate = useNavigate();
  const { login } = useAuth();

 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

   const [formDataReg, setFormDataReg] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmitReg(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/register", formDataReg);
      if (result.data.data.isVerified === false) {
        navigate("/verify-email", {
          state: {
            email: formDataReg.email,
          },
        });
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }

  return(
     <motion.div
            key="register"
            initial={{
              opacity: 0,
              rotateY: -8,
              scale: 0.96,
              x: -30,
            }}
            animate={{
              opacity: 1,
              rotateY: 0,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              rotateY: 8,
              scale: 0.96,
              x: 30,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-white border border-gray-200 lg:min-h-120 rounded-xl shadow-2xl p-8 w-1vh max-w-md"
          >
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Welcome to StudyMuse
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Create your StudyMuse account
            </p>

            <form onSubmit={handleSubmitReg}>
              <FormInput
                type="text"
                label="Name"
                value={formDataReg.name}
                onChange={(e) =>
                  setFormDataReg({ ...formDataReg, name: e.target.value })
                }
              />

              <FormInput
                type="email"
                label="Email"
                value={formDataReg.email}
                onChange={(e) =>
                  setFormDataReg({ ...formDataReg, email: e.target.value })
                }
              />

              <FormInput
                type="password"
                label="Password"
                value={formDataReg.password}
                onChange={(e) =>
                  setFormDataReg({ ...formDataReg, password: e.target.value })
                }
                error={error}
              />

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full my-4"
                disabled={isLoading}
              >
                {isLoading && <Spinner className="mr-2 text-white" />}
                {isLoading ? "Registering..." : "Register"}
              </Button>
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
              Already have an account?{" "}
              <button
              type="button"
                className="text-indigo-600 font-medium hover:underline cursor-pointer"
                onClick={() => setIsReg(false)}
              >
                Login
              </button>
            </p>
          </motion.div>
  )
}