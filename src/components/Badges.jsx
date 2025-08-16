import badges from "../data/badges.json";

export default function Badges() {
  return (
    <div className="py-10 flex flex-col justify-center items-center space-y-6 h-auto my-10">
      <div
        className={`flex justify-center gap-5 sm:gap-6 md:gap-12 md:h-20 h-16 flex-wrap`}
      >
        {badges.map((badge) => (
          <img src={badge.img} alt={badge.badge} key={badge.id} />
        ))}
      </div>
    </div>
  );
}
