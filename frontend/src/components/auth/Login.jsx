import LoginForm from "./LoginForm.jsx";
import RegisterForm from "./RegisterForm.jsx";
import { AnimatePresence} from "framer-motion";

export default function Login({ isReg, setIsReg }) {
  return (
    <div
      className="lg:h-dvh lg:border-l-2 lg:border-indigo-500/20 lg:flex lg:items-center lg:justify-center lg:bg-linear-to-t from-indigo-800 to-50% lg:shadow-sm lg:p-8 lg:w-[45%]"
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isReg ? (
          <RegisterForm key="register" setIsReg={setIsReg} />
        ) : (
          <LoginForm key="login" setIsReg={setIsReg} />
        )}
      </AnimatePresence>
    </div>
  );
}
