import overview from "../data/overview.json";

export default function RealEstateOverview() {
  return (
    <div className="flex flex-col text-center py-14 mt-5">
      <h1 className="text-black text-3xl font-cinzel">GET IT SOLD</h1>
      <div className="space-y-16 p-5 text-dark mx-5 portrait:mx-5 landscape:mx-16 my-5">
        {overview.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <img
              src={item.img}
              alt={item.title}
              className={`w-full h-auto rounded-lg ${
                index % 2 !== 0 ? "md:order-2" : ""
              } transition-all duration-500 ease-out hover:shadow-lg hover:shadow-black/40`}
            />
            <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
              <h2 className="text-xl mb-4">{item.title}</h2>
              <p className="whitespace-pre-line text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
