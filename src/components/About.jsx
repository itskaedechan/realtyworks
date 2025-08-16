export default function About() {
  return (
    <div className="flex flex-col md:flex-row bg-[#1A1A1A] py-16 justify-center items-center gap-8 relative w-full h-auto">
      <div className="absolute inset-0 z-0 bg-center bg-no-repeat opacity-15 blur-sm bg-cover bg-[url(/logo/header-logo.webp)]"></div>
      <div className="relative z-10"></div>

      <img
        src="/assets/marci-metzger.webp"
        alt="profile-photo"
        className="h-[328px] w-[328px] rounded-full  object-cover"
      />
      <div className="text-center md:text-left">
        <h1 className="text-6xl mb-5">MARCI METZGER</h1>
        <p className="text-base">REALTOR FOR NEARLY 3 DECADES!</p>
        <p className="text-base">206-919-6886</p>
      </div>
    </div>
  );
}
