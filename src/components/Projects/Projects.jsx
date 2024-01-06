import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../Animation/variants";
import project1Img from "../../../public/project1.png";
import project2Img from "../../../public/project2.png";
import project3Img from "../../../public/project3.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Student store",
      image: project1Img,
      github: "https://github.com/202306-NEA-DZ-FEW/StudentStore",
      demo: "https://studentsstore.vercel.app",
    },
    {
      title: "MoviPlaza",
      image: project2Img,

      github: "https://github.com/202306-NEA-DZ-FEW/movie-project-team_404",
      demo: "https://movie-project-team-404.vercel.app",
    },
    {
      title: "Jumanji Mad-libs",
      image: project3Img,
      github: "https://github.com/202306-NEA-DZ-FEW/madlibs-miami-team",
      demo: "https://jumanji-mad-libs.netlify.app",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container mx-auto  h-screen lg:max-h-screen ">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-10">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="h2 leading-tight text-[#29f0f0] font-semibold">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-16 font-semibold">
              Explore my recent projects from the Re:Coded Bootcamp, showcasing
              my skills in web development.
            </p>
            <Link
              href="https://github.com/hocine1212?tab=repositories"
              target="_blank"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-5 font-bold py-2 rounded-full transition-all duration-300 "
            >
              View all projects
            </Link>
          </motion.div>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
            >
              {/* overlay */}
              <div className="group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300"></div>
              <Image
                className="group-hover:scale-125 transition-all duration-500"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute -bottom-full left-12  group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="">
                  <Link
                    className="text-gradient"
                    href={project.github}
                    target="_blank"
                  >
                    Github
                  </Link>{" "}
                  |{" "}
                  <Link
                    className="text-gradient"
                    href={project.demo}
                    target="_blank"
                  >
                    Demo
                  </Link>
                </span>
              </div>
              <div className="absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
