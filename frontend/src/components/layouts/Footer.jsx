import {
  BookOpen,
  LayoutDashboard,
  BrainCircuit,
  Heart,
  Activity,
} from "lucide-react";
import { Link, useLocation} from "react-router-dom";



const APP_VERSION = "v3.0.0";

export default function Footer() {
  const location = useLocation();

  const isAuthPage = location.pathname === "/auth-page";
  return (
    <footer className="mt-24 border-t bg-gray-400/10 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              StudyMuse
            </h2>

            <p className="mt-2 text-gray-300">
              Learn. Track. Improve.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-300">
              Built to help students stay consistent, organize study plans,
              and learn with AI.
            </p>
          </div>

          {/* Center */}
          <div className={isAuthPage?"hidden":""}>
            <h3 className="font-semibold">
              Quick Links
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">

              <Link
                to="/dashboard"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <LayoutDashboard size={17} />
                Dashboard
              </Link>

              <Link
                to="/studyplan"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <BookOpen size={17} />
                Study Plans
              </Link>

              <Link
                to="/chat"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <BrainCircuit size={17} />
                Muse AI
              </Link>

            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-semibold">
              System
            </h3>

            <div className="mt-4 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Activity
                  size={18}
                  className="text-emerald-500"
                />

                <div>
                  <p className="font-medium">
                    All Systems Operational
                  </p>

                  <p className="text-gray-300">
                    API • Database • AI Online
                  </p>
                </div>
              </div>

              <div>
                <p className="text-gray-300">
                  Version
                </p>

                <p className="font-medium">
                  {APP_VERSION}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="my-8 h-px bg-border" />

        {/* Bottom */}

        <div className="flex flex-col gap-4 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} StudyMuse. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <span className="flex items-center gap-2">
              Made with
              <Heart
                size={19}
                className="fill-red-500 text-red-500"
              />
              for students
            </span>

            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              {/* <Github size={17} /> */}
              GitHub
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}