import services from "../data/services.json";

export default function Services() {
  return (
    <div className="my-16">
      <h1 className="font-cinzel text-dark text-4xl text-center my-10 mx-16">
        Our Services
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center text-center mx-10 items-stretch">
        {services.map((service) => (
          <div key={service.id} className="md:w-1/3">
            <div className="flex flex-col h-full text-dark items-center rounded-xl bg-white p-6 shadow-lg border border-gray-200 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3),0_4px_10px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-all duration-300 ease-in-out">
              <div className="flex-grow">
                <img
                  src={service.img}
                  alt={service.alt}
                  className="rounded-full max-h-[250px] h-auto mb-5 mx-auto"
                />
                <h1 className="text-2xl font-sanspro mb-5">{service.title}</h1>
                <p className="mb-3">{service.desc}</p>
                <ul className="mb-5 list-disc list-inside text-left inline-block">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105">
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
