import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownRenderer({ content }) {
  return (
    <div className="max-w-none text-[15px] leading-7 text-gray-800">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-5 mt-8 border-b border-gray-200 pb-2 text-3xl font-bold text-gray-900 first:mt-0">
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className="mb-4 mt-7 text-2xl font-semibold text-gray-900">
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className="mb-3 mt-6 text-xl font-semibold text-gray-900">
              {children}
            </h3>
          ),

          p: ({ children }) => (
            <p className="mb-4 leading-7 text-gray-700">{children}</p>
          ),

          ul: ({ children }) => (
            <ul className="mb-5 ml-6 list-disc space-y-2">
              {children}
            </ul>
          ),

          ol: ({ children }) => (
            <ol className="mb-5 ml-6 list-decimal space-y-2">
              {children}
            </ol>
          ),

          li: ({ children }) => (
            <li className="leading-7 text-gray-700">{children}</li>
          ),

          blockquote: ({ children }) => (
            <blockquote className="my-5 border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-4 italic text-gray-700">
              {children}
            </blockquote>
          ),

          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
              <table className="min-w-full border-collapse">
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className="bg-gray-100">{children}</thead>
          ),

          th: ({ children }) => (
            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className="border border-gray-200 px-4 py-3 text-gray-700">
              {children}
            </td>
          ),

          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 underline underline-offset-2 hover:text-indigo-700"
            >
              {children}
            </a>
          ),

          code({ inline, children, className, ...props }) {
            if (inline) {
              return (
                <code
                  className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm text-pink-600"
                  {...props}
                >
                  {children}
                </code>
              );
            }

            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },

          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-white shadow-lg">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}