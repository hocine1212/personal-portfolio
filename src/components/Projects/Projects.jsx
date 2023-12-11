import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../Animation/variants";
import project1Img from "../../../public/project1.png";
import project2Img from "../../../public/project2.png";
import project3Img from "../../../public/project3.png";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Student store",
      image: project1Img, // Replace with the actual path to the image
    },
    {
      title: "MoviPlaza",
      image: project2Img, // Replace with the actual path to the image
    },
    {
      title: "Jumanji Mad-libs",
      image: project3Img, // Replace with the actual path to the image
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10">
          <div>
            <h2 className="h2 leading-tight text-[#29f0f0] font-semibold">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-16 font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ex
              quae autem repellat aliquam dignissimos incidunt cum debitis
              aperiam placeat atque quia vero ab blanditiis doloremque deserunt.
              Iure, architecto labore!
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 px-5 font-bold py-2 rounded-full transition-all duration-300 ">
              View all projects
            </button>
          </div>
          {projects.map((project, index) => (
            <div
              key={index}
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
                <span className="text-gradient">Web Development</span>
              </div>
              <div className="absolute -bottom-full left-12  group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
