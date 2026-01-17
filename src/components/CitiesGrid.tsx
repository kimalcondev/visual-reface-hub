import CityCard from "./CityCard";
import newYorkImg from "@/assets/new-york.jpg";
import rochesterImg from "@/assets/rochester.jpg";
import seattleImg from "@/assets/seattle.jpg";

const cities = [
  {
    id: 1,
    image: newYorkImg,
    name: "New York",
    places: 12,
    timeAgo: "5 min ago",
  },
  {
    id: 2,
    image: rochesterImg,
    name: "Rochester",
    places: 8,
    timeAgo: "2 hours ago",
  },
  {
    id: 3,
    image: seattleImg,
    name: "Seattle",
    places: 15,
    timeAgo: "1 day ago",
  },
  {
    id: 4,
    image: "/placeholder.svg",
    name: "Nakuru",
    places: 6,
    timeAgo: "3 days ago",
  },
  {
    id: 5,
    image: "/placeholder.svg",
    name: "Eldoret",
    places: 4,
    timeAgo: "1 week ago",
  },
];

const CitiesGrid = () => {
  return (
    <div className="w-full px-0 md:px-4 md:max-w-2xl md:mx-auto">
      <div className="grid grid-cols-2 gap-3 p-3 md:gap-4 md:p-0">
        {cities.map((city) => (
          <CityCard
            key={city.id}
            image={city.image}
            name={city.name}
            places={city.places}
            timeAgo={city.timeAgo}
          />
        ))}
      </div>
    </div>
  );
};

export default CitiesGrid;
