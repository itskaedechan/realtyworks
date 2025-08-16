import badges from "../data/badges.json";

export default function Badges() {
  return (
    <div className="py-10 flex flex-col justify-center items-center space-y-6 h-auto my-10">
      <div className={`flex justify-center gap-5 sm:gap-6 md:gap-12`}>
        {badges.map((badge) => (
          <img
            src={badge.img}
            alt={badge.badge}
            key={badge.id}
            className="md:h-20 h-16"
          />
        ))}
      </div>
    </div>
  );
}
