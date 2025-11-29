"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectsData = [
    {
      id: 1,
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: "/images/projects/integration.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SamiraMVOGO/integration-html-css",
      previewUrl: "https://guileless-halva-8a3abb.netlify.app/",
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: "/images/projects/yowl.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SamiraMVOGO/yowl",
      previewUrl: "https://yowl-frontend-v1.vercel.app/",
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: "/images/projects/roten-moovie.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SamiraMVOGO/roten-tomatoes",
      previewUrl: "https://test-gap-j4ks.vercel.app/",
    },
    {
      id: 4,
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      image: "/images/projects/postit.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/SamiraMVOGO/postit",
      previewUrl: "https://msamira-postits.netlify.app/",
    },
    {
      id: 5,
      title: t("projects.project5.title"),
      description: t("projects.project5.description"),
      image: "/images/projects/kidney-doc.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/samiramvo/KidneyDoc",
      previewUrl: "https://kidney-doc-final.vercel.app/",
    },
  ];

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
        {t("projects.title")}
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name={t("projects.all")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name={t("projects.web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Mobile")}
          name={t("projects.mobile")}
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
