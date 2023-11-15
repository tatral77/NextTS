import FleetCard from "./components/FleetCard";
import PromotionCard from "./components/PromotionCard";

export default function Home() {
  return (
    <div>
      <div className="text-center py-4">
        <h2 className="text-4xl font-serif">Our Fleet</h2>
      </div>
      <div className="text-justify py-2">
        <p className="text-1xl">
          Our chauffeur driven fleets are drawn from the luxury ranges of the
          world’s finest marques, such as Mercedes S-class, Mercedes V-class,
          Mercedes E-class, Rolls Royce phantom, Bentley Mulsanne and Range
          rover LWB. Each vehicle is specified to our demanding standards. The
          perfect balance of spacious comfort and safety.
        </p>
      </div>
      <FleetCard />
      <FleetCard />
      <PromotionCard />
    </div>
  );
}
