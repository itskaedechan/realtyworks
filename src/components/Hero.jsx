export default function Hero() {
  return (
    <div
      id="home"
      className="relative w-full max-h-[500px] h-screen flex items-center justify-center bg-gray-900 text-white  bg-fixed bg-center bg-cover bg-no-repeat bg-[url(/assets/bg-hero.webp)]"
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 text-center space-y-4 animate-fadeIn">
        <p className="text-xl">MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <h1 className="font-cinzel text-6xl ">PAHRUMP REALTOR</h1>
        <a
          href="tel:206-919-6886"
          className="inline-block bg-white text-dark font-bold font-sanspro 
             py-5 px-8 rounded-full mt-5 shadow-md transition transform 
             duration-300 hover:scale-105 hover:shadow-lg"
        >
          CALL NOW
        </a>
      </div>
    </div>
  );
}
