export default function OurLocation() {
  return (
    <>
      <h1 className="font-cinzel text-[#1B1B1B] text-center text-4xl mt-20 mb-10">
        Our Location
      </h1>
      <div className="aspect-w-16 md:aspect-h-4 aspect-h-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6440.4389375793935!2d-115.95656211803889!3d36.18554398250451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1755338169558!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Embed"
        ></iframe>
      </div>
    </>
  );
}
