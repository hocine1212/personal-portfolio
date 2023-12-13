import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../Animation/variants";

import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-cover  bg-no-repeat  h-[480px]  mix-blend-lighten bg-center"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[#42c0fa] font-semibold">About me</h2>
            <h3 className="h3">
              I'm a Front-end developer with more than a year of experience
            </h3>
            <p>
              I'm a passionate front-end developer based in Algeria. My name is
              Hocine Benouddane, and I specialize in creating captivating user
              experiences. With a background in Mechanical Engineering, I made a
              successful transition to web development, graduating from the
              Re:Coded bootcamp.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-6">
              <div>
                <div className="text-[40px] text-gradient font-tertiary mb-2">
                  <p>1+</p>
                </div>
                <div className="font-primary text-sm tracking-[2px] font-semibold ">
                  Year of <br /> Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient font-tertiary mb-2">
                  <p>6+</p>
                </div>
                <div className="font-primary text-sm tracking-[2px] font-semibold ">
                  Projects <br /> Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] text-gradient font-tertiary mb-2">
                  <p>10+</p>
                </div>
                <div className="font-primary text-sm tracking-[2px] font-semibold ">
                  Web <br /> Technologies
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <Link
                to="contact"
                smooth={true}
                spy={true}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-5 font-bold py-2 cursor-pointer rounded-full transition-all duration-300"
              >
                Contact me
              </Link>
              <Link
                to="home"
                smooth={true}
                spy={true}
                offset={-200}
                className="text-gradient cursor-pointer"
              >
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
