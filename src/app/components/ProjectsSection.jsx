"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Website showcasing African models",
    description: "This is a static website built with HTML, CSS, Tailwind CSS, and JavaScript to promote African haute couture.",
    image: "/images/projects/integration.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SamiraMVOGO/integration-html-css",
    previewUrl: "https://guileless-halva-8a3abb.netlify.app/",
  },
  {
    id: 2,
    title: "Yowl Community",
    description: "Share your ideas, start discussions and discover what others are saying about a product online with VueJS, Laravel",
    image: "/images/projects/yowl.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SamiraMVOGO/yowl",
    previewUrl: "https://yowl-frontend-v1.vercel.app/",
  },
  {
    id: 3,
    title: "Roten Movies",
    description: "Online film presentation platform with Next Js 16",
    image: "/images/projects/roten-moovie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SamiraMVOGO/roten-tomatoes",
    previewUrl: "https://test-gap-j4ks.vercel.app/",
  },
   {
    id: 3,
    title: "Post It",
    description: "Design of a task management and organization platform with Vue.js - API WordPress",
    image: "/images/projects/postit.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SamiraMVOGO/postit",
    previewUrl: "https://msamira-postits.netlify.app/",
  },
  {
    id: 4,
    title: "Kidney Doc",
    description: "Development of a patient data management platform for the nephrology department of a hospital center with Nextjs 14",
    image: "/images/projects/kidney-doc.png",
    tag: ["All", "Web"],
    gitUrl: "https://kidney-doc-final.vercel.app/",
    previewUrl: "https://github.com/samiramvo/KidneyDoc",
  },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
