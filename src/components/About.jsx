import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [expandedRead, setExpandedRead] = useState(false);

  return (
    <div
      id="about-section"
      className="flex flex-col md:flex-row bg-[#1A1A1A] py-16 px-6 md:px-20 justify-center items-center gap-8 relative w-full h-auto"
    >
      <div className="absolute inset-0 z-0 bg-center bg-no-repeat opacity-15 blur-sm bg-cover bg-[url(/logo/header-logo.webp)] pointer-events-none"></div>

      <motion.img
        layout
        transition={{ duration: 0.5, ease: "easeInOut" }}
        src="/assets/marci-metzger.webp"
        alt="profile-photo"
        className="h-[328px] w-[328px] rounded-full object-cover relative z-10"
      />

      <motion.div
        layout
        className="relative z-10 text-center md:text-left max-w-screen-md"
      >
        <h1 className="text-6xl mb-5">MARCI METZGER</h1>
        <p className="text-base">REALTOR FOR NEARLY 3 DECADES!</p>
        <p className="text-base">206-919-6886</p>

        <button
          onClick={() => setExpandedRead(!expandedRead)}
          className="mt-2 font-bold underline cursor-pointer hover:no-underline"
        >
          {expandedRead ? "Read Less" : "Read More"}
        </button>

        <AnimatePresence>
          {expandedRead && (
            <motion.div
              key="extra-content"
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="mt-4 overflow-hidden"
            >
              <p>
                Marci was a REALTOR®, then licensed Broker, in Washington State.
                Now, she is enjoying the sunshine and helping clients in
                Southern Nevada. Having helped buyers and sellers in many
                markets since 1995, she is a wealth of knowledge.
              </p>

              <h4 className="mt-4 font-bold">A Note from Marci</h4>
              <p className="italic mt-2">
                "I love that small-town feeling that our community offers.
                Spectacular golf courses, parks, a pool, and easy access to Las
                Vegas make Pahrump a great place to call home. Working or
                retired, fast-paced or looking to relax... there's a place for
                you here! I enjoy living in the Mountain Falls community and
                will strive to find you a home that will suit you just as this
                community does me."
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
