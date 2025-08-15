import socials from "../data/socials.json";

export default function SocialLinks({ size = "h-8", gap = "gap-3" }) {
  return (
    <div
      id="contact"
      className="py-6 flex flex-col justify-center items-center space-y-6"
    >
      <div
        className={`flex justify-center gap-2 sm:gap-3 md:gap-6 ${size} ${gap}`}
      >
        {socials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={social.id}
            className="group relative flex"
          >
            <img
              src={social.img}
              alt={social.social}
              className="transition-transform duration-200 ease-in-out hover:scale-110"
            />
            <span className="text-sm absolute left-10 top-9 whitespace-nowrap rounded-md bg-gray-100 px-2 py-1 opacity-0 shadow transition duration-200 group-hover:opacity-100 text-dark">
              {social.social}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
