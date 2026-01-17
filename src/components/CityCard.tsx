interface CityCardProps {
  image: string;
  name: string;
  places: number;
  timeAgo: string;
}

const CityCard = ({ image, name, places, timeAgo }: CityCardProps) => {
  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      
      {/* Places badge */}
      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
        <span className="text-sm font-medium text-gray-800">{places} places</span>
      </div>
      
      {/* City info */}
      <div className="absolute bottom-3 left-3 right-3">
        <h3 className="text-white text-lg font-semibold">{name}</h3>
        <p className="text-white/80 text-sm">{timeAgo}</p>
      </div>
    </div>
  );
};

export default CityCard;
