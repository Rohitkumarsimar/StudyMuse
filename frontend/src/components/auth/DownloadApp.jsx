import { Download, Smartphone } from "lucide-react";
import { AuthLogo } from "./AuthLogo";

export function DownloadApp() {
  return (
    <section className="w-[90%] rounded-2xl border bg-linear-to-r from-[#010930] to-indigo-900 p-4 text-white shadow-lg">
      <AuthLogo />

      <div className="flex mt-2 flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Smartphone className="h-7 w-7 text-blue-400" />
          </div>

          <div>
            <h2 className="text-xl font-bold">Get the StudyMuse App</h2>
          </div>
        </div>
        <a
          href="/download/StudyMuse-v1.0.0.apk"
          download
          className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
        >
          <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
          <span>Download APK</span>
        </a>
      </div>
    </section>
  );
}
