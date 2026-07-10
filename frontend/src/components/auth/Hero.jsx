import MyLogo from "../../assets/StudyMuseLogo.png";
import bgImg from "../../assets/StudyMuseBgauth.png";
import { Target, Brain, Flame } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hidden h-dvh lg:flex items-end pt-2 pl-5 w-[55%]">
      <div className="h-full ml-10 flex flex-col items-start w-full">
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex gap-4 mt-16 items-center bg-linear-to-r from-[#010930]  rounded-l-full pr-30 hover:scale-105 transition-all duration-300"
        >
          <img src={MyLogo} className="h-25 rounded-full" />
          <h1 className="font-bold text-5xl leading-tight  bg-linear-to-tr from-indigo-300 to-white bg-clip-text text-transparent">
            StudyMuse
          </h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="flex ml-5 gap-2 mt-5 items-center"
        >
          <h1 className="font-bold text-3xl leading-tight text-gray-200">
            Your
          </h1>
          <h1 className="font-bold text-3xl leading-tight bg-linear-to-tr from-pink-500 to-pink-200 bg-clip-text text-transparent">
            AI
          </h1>
          <h1 className="font-bold text-3xl leading-tight text-gray-200">
            Study
          </h1>
          <h1 className="font-bold text-4xl leading-tight text-violet-400">
            Companion
          </h1>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2,
          }}
          className="flex ml-5 flex-col gap-4 items-start mt-4"
        >
          <p className="text-sm text-violet-200">
            Turn your study sessions into consistent progress.
          </p>
          <div>
            <p className="text-sm text-violet-200">
              Plan smarter. Stay focused
            </p>
            <p className="text-sm text-violet-200">
              Track your growth. Learn with AI
            </p>
            <p className="text-sm text-violet-200">
              that understands how students work.
            </p>
          </div>
        </motion.div>

        <div className="flex ml-5  flex-col gap-5 items-start mt-6">
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3,
            }}
            className=" flex  gap-5 items-center"
          >
            <div
              className="bg-indigo-900 shadow-2xl rounded-full p-3 hover:scale-110
hover:bg-violet-900
transition-all
duration-300"
            >
              <Target size={35} className="text-violet-400" />
            </div>
            <div>
              <p className="text-1xl text-violet-200 font-semibold">
                Smart Planning
              </p>
              <p className="text-sm text-gray-200">
                Organize tasks and study schedules
              </p>
              <p className="text-sm text-gray-200">that actuall works.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4,
            }}
            className="flex gap-5 items-center"
          >
            <div
              className="bg-indigo-900 shadow-2xl rounded-full p-3 hover:scale-110
hover:bg-violet-900
transition-all
duration-300"
            >
              <Brain size={35} className="text-violet-400" />
            </div>
            <div>
              <p className="text-1xl text-violet-200 font-semibold">
                AI Companion
              </p>
              <p className="text-sm text-gray-200">
                Get personalized suggestions
              </p>
              <p className="text-sm text-gray-200">
                to improve your focus and productivity.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5,
            }}
            className="flex gap-5 items-center"
          >
            <div
              className="bg-indigo-900 shadow-2xl rounded-full p-3 hover:scale-110
hover:bg-violet-900
transition-all
duration-300"
            >
              <Flame size={35} className="text-amber-200" />
            </div>
            <div>
              <p className="text-1xl text-violet-200 font-semibold">
                Stay Consistent
              </p>
              <p className="text-sm text-gray-200">
                Track your streaks and build
              </p>
              <p className="text-sm text-gray-200">stong habits over time.</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6,
            }}
            className="flex h-12 gap-5 items-start mt-2 py-1  bg-linear-to-r from-violet-700"
          >
            <div className="h-full border-2 border-violet-700 rounded-2xl"></div>
            <div>
              <p className="text-sm text-violet-200">
                Discipline today, success tomorrow.{" "}
              </p>
              <p className="text-sm text-violet-200">
                Let's build the future together.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="mr-15"
        initial={{ opacity: 0, Y: 60, scale: 0.5 }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{
          opacity: { duration: 0.8 },
          x: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <img
          src={bgImg}
          className="w-full hover:scale-95 transition-all duration-300"
        />
      </motion.div>
    </div>
  );
}
