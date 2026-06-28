import Spinner from "./Spinner.jsx";
const variants = {
  primary: " bg-indigo-600 text-white",
  danger: "bg-red-500 text-white",
  ghost: "bg-transparent border text-gray-700",
};
const base = "w-full py-2 px-4 rounded-md font-medium text-sm";

export default function Button({ children, variant, isLoading, ...props }) {
  return (
    <button
      {...props}
      disabled={isLoading}
      className={`${base} ${variants[variant]} cursor-pointer`}
    >
      {isLoading ?<Spinner className="h-5 w-5"/>:(
        children
      )}
    </button>
  );
}
