export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-2">
      <span
        className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"
        style={{ animationDelay: "0ms" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"
        style={{ animationDelay: "200ms" }}
      />
      <span
        className="h-2 w-2 rounded-full bg-gray-400 animate-pulse"
        style={{ animationDelay: "400ms" }}
      />
    </div>
  );
}