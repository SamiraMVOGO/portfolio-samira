"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaLaravel, FaPython, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiFlask, SiNestjs, SiDocker, SiGitlab, SiTailwindcss } from "react-icons/si";

const SkillsContent = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
    <div className="flex items-center space-x-2">
      <FaHtml5 className="text-orange-600 text-3xl" />
      <span>HTML5</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaCss3Alt className="text-blue-600 text-3xl" />
      <span>CSS3</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaJsSquare className="text-yellow-400 text-3xl" />
      <span>JavaScript</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaPython className="text-blue-400 text-3xl" />
      <span>Python</span>
    </div>
    
    <div className="flex items-center space-x-2">
      <FaPhp className="text-indigo-600 text-3xl" />
      <span>PHP</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaReact className="text-cyan-500 text-3xl" />
      <span>React JS</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaVuejs className="text-green-500 text-3xl" />
      <span>Vue JS</span>
    </div>
    <div className="flex items-center space-x-2">
      <SiNextdotjs className="text-black text-3xl" />
      <span>Next JS</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaLaravel className="text-red-600 text-3xl" />
      <span>Laravel</span>
    </div>
    <div className="flex items-center space-x-2">
      <SiFlask className="text-gray-600 text-3xl" />
      <span>Flask</span>
    </div>
    <div className="flex items-center space-x-2">
      <SiNestjs className="text-red-400 text-3xl" />
      <span>Nest JS</span>
    </div>
    <div className="flex items-center space-x-2">
      <FaGitAlt className="text-orange-500 text-3xl" />
      <span>Git</span>
    </div>
    <div className="flex items-center space-x-2">
      <SiGitlab className="text-orange-600 text-3xl" />
      <span>GitLab</span>
    </div>
    <div className="flex items-center space-x-2">
      <SiDocker className="text-blue-500 text-3xl" />
      <span>Docker</span>
    </div>
     <div className="flex items-center space-x-2">
      <SiTailwindcss className="text-teal-400 text-3xl" />
      <span>Tailwind CSS</span>
    </div>
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsContent />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none p-0">
        <li className="flex items-center space-x-4 mb-4">
          <Image
            src="/images/epitech-logo.png"
            alt="Epitech Logo"
            className="w-12 h-12 object-contain"
            width={1000}
            height={1000}
          />
          <span>Epitech: The School of Excellence in Computer Science | Coding Academy</span>
        </li>
        <li className="flex items-center space-x-4">
          <Image
            src="/images/ifri-logo.png"
            alt="IFRI Logo"
            className="w-12 h-12 object-contain"
            width={1000}
            height={1000}
          />
          <span>
            Institute for Training and Research in Computer Science (IFRI) - University of Abomey-Calavi
          </span>
        </li>
      </ul>
    ),
  },
 
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16  mt-[10%]">
        <Image src="/images/programmer.jpg" width={800} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Vue, Node.js, Flask, Next Js, Nest Js, Express, Mongodb,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
           
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;