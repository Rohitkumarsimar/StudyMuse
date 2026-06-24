
export default function Input({label, error, ...props}){
    return (<div>
        <label className="text-sm font-medium text-gray-900">{label}</label>
        <input  type="text" {...props} className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
        {error && <span className="text-sm text-red-500">{error}</span>}
    </div>)
}