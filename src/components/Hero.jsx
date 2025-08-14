export default function Hero() {
  return (
    <div
      className="relative w-full max-h-[500px] h-screen flex items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: `url(/assets/bg-hero.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 text-center space-y-4">
        <p className="text-xl">MARCI METZGER - THE RIDGE REALTY GROUP</p>
        <h1 className="font-cinzel text-6xl">PAHRUMP REALTOR</h1>
      </div>
    </div>
  );
}
