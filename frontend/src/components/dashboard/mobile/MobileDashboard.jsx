import Header from "./Header";
import { HeroCard } from "./HeroCard";
import Stat from "./Stat";
import { Streak } from "./Streak";
import Footer from "#components/layouts/Footer.jsx";

export default function MobileDashboard({stat}) {
  
const userName = stat.userName
  return (
    <div className="w-full h-full bg-linear-to-b from-indigo-600 via-violet-400 to-white">
<Header/>
<main > 
    <div className="w-full flex justify-center">
<HeroCard userName={userName} />
    </div>
<Stat stat= {stat}/>
<Streak stat = {stat} />
</main>
    </div>
  );
}
