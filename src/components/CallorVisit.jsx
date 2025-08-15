import FloatingInput from "../components/forms/FloatingInput";

export default function CallorVisit() {
  return (
    <div className="bg-[#FAF9F6] w-full h-auto my-20">
      <h1 className="font-cinzel text-4xl text-[#1B1B1B] text-center mb-10">
        Call or Visit
      </h1>
      <div className="grid grid-cols-2 gap-5 w-[80%] mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-[#1B1B1B] font-sanspro text-xl mb-10">
            Send Message
          </h2>
          <FloatingInput label="Name" />
          <FloatingInput label="Email" />
          <FloatingInput label="Message" />
          <button
            className="inline-block bg-[#d3d3d3] text-[#1B1B1B] font-bold font-sanspro 
             py-5 px-8 rounded-full mt-5 shadow-md transition-all transform 
             duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#282828] hover:text-[#faf9f6]"
          >
            SEND
          </button>
        </div>
        <div className="flex flex-col items-center justify-center font-sanspro text-[#1B1B1B]">
          <h2 className="text-2xl mb-4">
            Marci Metzger - THE RIDGE REALTY GROUP
          </h2>
          <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
          <a href="tel:206-919-6886">(206) 919-6886</a>

          <h2 className="text-2xl mb-4">Office Hours</h2>
          <p>Open daily 8:00 am - 7:00 pm</p>
          <p>
            Appointments outside office hours available upon request. Just call!
          </p>

          <a href="tel:206-919-6886">(206) 919-6886</a>
        </div>
      </div>
    </div>
  );
}
