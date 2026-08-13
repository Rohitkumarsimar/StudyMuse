export default function Overview() {
  return (
    <div className=" bg-white rounded-lg mx-2 h-55 flex justify-center items-center">
      <div className=" rounded-lg h-[95%] w-[97%] bg-gray-100 border border-gray-300">
       
        <h1 className="ml-5 mt-5 italic  bg-linear-to-r from-indigo-700 to-violet-700 w-[40%] bg-clip-text text-xl font-black text-transparent">
          Muse says...
        </h1>
        <p className="text-sm text-gray-800 font-semibold mt-2 mx-5">
            Don't just reread your notes. Close them and explain the topic in your own words. Then revisit only the gaps you couldn't explain. Active recall beats passive reading—especially when you're short on study time.
        </p>
      </div>
    </div>
  );
}
