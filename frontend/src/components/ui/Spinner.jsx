export default function Spinner({ size = "h-5 w-5", className = "" }) {
  return (
    <div className="flex items-center justify-center">
      <div className = {` ${size} animate-spin rounded-full border-2 border-gray-300 border-t-indigo-600 ${className} `}></div>
    </div>
  );
}
