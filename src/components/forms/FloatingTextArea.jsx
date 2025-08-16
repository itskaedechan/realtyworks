export default function FloatingTextArea({ label, name, type = "text" }) {
  return (
    <div className="relative w-full">
      <textarea
        type={type}
        name={name}
        id={name}
        placeholder=" "
        className="peer w-full border-t-0 border-x-0 border-b-0.5 border-gray-300 px-4 pt-6 pb-2 text-gray-900 bg-transparent 
                   focus:outline-none focus:border-[#5B3E40] focus:ring-1 focus:ring-[#5B3E40] transition-all duration-300"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-600 peer-placeholder-shown:text-sm 
                   peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#5B3E40] font-medium"
      >
        {label}
      </label>
    </div>
  );
}
