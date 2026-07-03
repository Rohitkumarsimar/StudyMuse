import { useState } from "react";
import FormInput from "#components/login-signup/FormInput.jsx";
import { Button } from "@/components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios.js";
import { Spinner } from "#components/ui/spinner.jsx";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const result = await api.post("/auth/register", formData);
      if (result) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">
          Welcome to StudyMuse
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          Create your StudyMuse account
        </p>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

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

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full mt-4"
            disabled={isLoading}
          >
            {isLoading && <Spinner className="mr-2 text-white" />}
            {isLoading ? "Registering..." : "Register"}
          </Button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
