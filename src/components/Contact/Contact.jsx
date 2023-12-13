import React from "react";
import { fadeIn } from "../Animation/variants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-[#29f0f0] font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[40px] lg:text-[80px] leading-none mb-12">
                Let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all"
              type="text"
              placeholder="Your email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-5 font-bold py-2 rounded-full transition-all duration-300">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
