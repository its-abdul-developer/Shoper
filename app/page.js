import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NewCollections from "./Components/NewCollections";
import NewsLetter from "./Components/NewsLetter";
import Offers from "./Components/Offers";
import Popular from "./Components/Popular";


export default function Home() {
  return (
    <div className="w-full">
   <Hero/>
   <Popular/>
   <Offers/>
   <NewCollections/>
   <NewsLetter  />
   <Footer/>
    </div>
  );
}
