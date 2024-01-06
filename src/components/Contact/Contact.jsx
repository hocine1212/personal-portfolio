import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../Animation/variants";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all"
              type="text"
              placeholder="Your email"
              name="user_email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none placeholder:text-white w-full focus:border-[#29f0f0] transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>
            <input
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-5 font-bold py-2 rounded-full transition-all duration-300"
              type="submit"
              value="Send"
            >
              Send message
            </input>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
