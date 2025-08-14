import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <div className="flex flex-col min-h-6 bg-[#010101] text-center p-16">
      <SocialLinks />
      <footer className="text-xs text-[#969696] ">
        COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
