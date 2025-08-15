export default function FloatingInput({ label, name, type = "text" }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="peer w-full border-b border-gray-300 rounded-lg px-4 pt-6 pb-2 text-gray-900 bg-white shadow-sm
                   focus:outline-none focus:border-[#5B3E40] focus:ring-1 focus:ring-[#5B3E40] transition-all duration-300"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-gray-400 text-base transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#5B3E40] font-semibold"
      >
        {label}
      </label>
    </div>
  );
}
