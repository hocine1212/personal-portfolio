import Image from "next/image";
import Link from "next/link";
import image from "../../../public/portfolio.jpg";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../Animation/variants";
import { Link as ScrollLink } from "react-scroll";

const Banner = () => {
  return (
    <div className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-8  ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[45px] font-bold leading-[0.8] lg:text-[80px]"
            >
              HOCINE <span>BENOUDDANE</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="mr-2 text-white">I am </span>
              <TypeAnimation
                sequence={["a Developer", 2000, "an Engineer", 2000]}
                speed={50}
                className="text-[#29f0f0]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I'm a Front-End Developer proficient in Next.js, React.js and
              Tailwind CSS with a background in Mechanical Engineering.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 mb-6 mx-auto lg:mx-0 items-center"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                spy={true}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-3 font-bold py-2 rounded-full transition-all duration-300 cursor-pointer "
              >
                Contact me
              </ScrollLink>
              <ScrollLink
                to="home"
                smooth={true}
                spy={true}
                offset={-200}
                className="text-gradient cursor-pointer"
              >
                My Portfolio
              </ScrollLink>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 "
            >
              <Link
                target="_blank"
                href="https://github.com/hocine1212"
                className="hover:text-[#000] "
              >
                <FaGithub />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/hocine12/"
                className="hover:text-[#39b9f5] "
              >
                <FaLinkedin />
              </Link>
              <Link
                target="_blank"
                href="https://discordapp.com/users/455200550934413312"
                className="hover:text-[#7289DA]"
              >
                <FaDiscord />
              </Link>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden lg:flex flex-1  max-w-[320px] rounded-full "
          >
            <Image
              className="object-cover rounded-full w-[300px] h-[300px]"
              src={image}
              alt="profile picture"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
