import MyLogo from "../../assets/StudyMuseLogo.png";

export function AuthLogo() {
  return (
      <div className="lg:hidden  flex gap-2 items-center bg-linear-to-r from-[#010930] rounded-l-full pr-1">
        <img src={MyLogo} className="h-15 rounded-full" />
        
        <div className="flex flex-col items-start">
          <h1 className="font-bold text-4xl leading-tight  bg-linear-to-tr from-indigo-300 to-white bg-clip-text text-transparent">
            StudyMuse
          </h1>

          <div className="flex gap-1 pl-1">
            <h1 className="font-bold text-sm  leading-tight text-gray-200">Your</h1>
            <h1 className="font-bold text-sm  leading-tight bg-linear-to-tr from-pink-500 to-pink-200 bg-clip-text text-transparent">
              AI
            </h1>
            <h1 className="font-bold  text-sm leading-tight text-gray-200">Study</h1>
            <h1 className="font-bold text-sm leading-tight text-violet-400">
              Companion
            </h1>
          </div>
        </div>
      </div>
  );
}
