import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../Animation/variants";
import Link from "next/link";

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
            className="flex-1 bg-about bg-contain bg-no-repeat lg:bg-cover lg:h-[500px]  mix-blend-lighten bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-[#42c0fa]">About me</h2>
            <h3 className="h3">
              I'm a Front-end developer with more than one year experience
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              animi dolor quasi non, ad assumenda commodi? Impedit, aspernatur
              quo laudantium, architecto nam saepe culpa reprehenderit iusto
              sint voluptates est voluptatem.
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
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-3 font-bold py-2 rounded-full transition-all duration-300 ">
                Contact me
              </button>
              <Link className="text-gradient" href="#">
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
