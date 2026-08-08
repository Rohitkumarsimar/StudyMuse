import Header from "../../layouts/Header";
import { HeroCard } from "./HeroCard";
import Stat from "./Stat";
import { Streak } from "./Streak";
import Footer from "#components/layouts/Footer.jsx";
import Overview from "./Overview";

export default function MobileDashboard({stat}) {
  
const userName = stat.userName
  return (
    <div className="my-2" >
<main className="space-y-4"> 
    <div className="w-full flex justify-center">
<HeroCard userName={userName} />
    </div>
<Stat stat= {stat}/>
<Streak stat = {stat} />
<Overview/>
</main>
<Footer/>
    </div>
  );
}
