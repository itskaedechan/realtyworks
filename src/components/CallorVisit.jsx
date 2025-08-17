import FloatingInput from "../components/forms/FloatingInput";
import FloatingTextArea from "./forms/FloatingTextArea";

export default function CallorVisit() {
  return (
    <div id="callorvisit" className="bg-[#FAF9F6] w-full h-auto my-20">
      <h1 className="font-cinzel text-4xl text-dark text-center mb-10">
        Call or Visit
      </h1>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-12 w-[80%] mx-auto">
        <div className="flex flex-col">
          <h2 className="text-dark font-sanspro text-2xl my-5">Send Message</h2>
          <div className="space-y-6">
            <FloatingInput label="Name" name="name" />
            <FloatingInput label="Email*" type="email" name="email" />
            <FloatingTextArea label="Message" name="message" />
          </div>

          <button
            className="inline-flex bg-[#d3d3d3] text-dark font-bold font-sanspro 
             py-5 px-10 rounded-full mt-5 shadow-md transition-all transform 
             duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#282828] hover:text-[#faf9f6] w-fit mx-auto"
          >
            SEND
          </button>
          <p className="text-xs text-[#808080] mt-8 mx-auto">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>

        <div className="flex flex-col font-sanspro text-dark gap-8">
          <a
            href="https://wa.me/14259412560"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-[#536872] text-[#faf9f6] font-bold font-sanspro 
             py-4 px-8 rounded-full mt-5 shadow-md transition-all transform 
             duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#677987] hover:text-[#faf9f6] gap-3 inline-flex items-center w-fit"
          >
            <span>
              <img src="contacts/whatsapp.svg" alt="whatsapp" />
            </span>{" "}
            Message us on WhatsApp
          </a>
          <div>
            <h2 className="text-3xl mb-1 font-cinzel font-medium">
              Marci Metzger
            </h2>
            <div className="ml-2 space-y-2">
              <p>THE RIDGE REALTY GROUP</p>
              <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <div className="block flex gap-1">
                <a href="tel:206-919-6886" className="text-[#800000]">
                  (206) 919-6886
                </a>
                {"/"}
                <a href="tel:425-941-2560" className="text-[#800000]">
                  (425) 941-2560
                </a>
              </div>
              <a
                href="mailto:marcimetzger@gmail.com"
                className="font-sanspro text-dark block"
              >
                marcimetzger@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-1">Office Hours</h2>
            <div className="ml-2 space-y-2">
              <p>Open daily 8:00 am - 7:00 pm</p>
              <p>
                Appointments outside office hours available upon request. Just
                call!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
