"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaLaravel, FaPython, FaNodeJs, FaGitAlt, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiFlask, SiNestjs, SiDocker, SiGitlab, SiTailwindcss } from "react-icons/si";

const SkillsContent = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      <div className="flex items-center space-x-2">
        <FaHtml5 className="text-orange-600 text-3xl" />
        <span>{t("skills.html")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaCss3Alt className="text-blue-600 text-3xl" />
        <span>{t("skills.css")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaJsSquare className="text-yellow-400 text-3xl" />
        <span>{t("skills.js")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPython className="text-blue-400 text-3xl" />
        <span>{t("skills.python")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPhp className="text-indigo-600 text-3xl" />
        <span>{t("skills.php")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaReact className="text-cyan-500 text-3xl" />
        <span>{t("skills.react")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaVuejs className="text-green-500 text-3xl" />
        <span>{t("skills.vue")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiNextdotjs className="text-black text-3xl" />
        <span>{t("skills.next")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaLaravel className="text-red-600 text-3xl" />
        <span>{t("skills.laravel")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiFlask className="text-gray-600 text-3xl" />
        <span>{t("skills.flask")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiNestjs className="text-red-400 text-3xl" />
        <span>{t("skills.nest")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaGitAlt className="text-orange-500 text-3xl" />
        <span>{t("skills.git")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiGitlab className="text-orange-600 text-3xl" />
        <span>{t("skills.gitlab")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiDocker className="text-blue-500 text-3xl" />
        <span>{t("skills.docker")}</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiTailwindcss className="text-teal-400 text-3xl" />
        <span>{t("skills.tailwind")}</span>
      </div>
    </div>
  );
};

const TAB_DATA = (t) => [
  {
    title: t("tabs.skills"),
    id: "skills",
    content: <SkillsContent />,
  },
  {
    title: t("tabs.education"),
    id: "education",
    content: (
      <ul className="list-none p-0">
        <li className="flex items-center space-x-4 mb-4">
          <Image
            src="/images/epitech-logo.png"
            alt={t("education.epitechAlt")}
            className="w-12 h-12 object-contain"
            width={1000}
            height={1000}
          />
          <span>{t("education.epitech")}</span>
        </li>
        <li className="flex items-center space-x-4">
          <Image
            src="/images/ifri-logo.png"
            alt={t("education.ifriAlt")}
            className="w-12 h-12 object-contain"
            width={1000}
            height={1000}
          />
          <span>{t("education.ifri")}</span>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const { t } = useTranslation();
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
        <Image src="/images/programmer.jpg" width={800} height={500} alt="Programmer illustration" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("about.title")}</h2>
          <p className="text-base lg:text-lg">{t("about.description")}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {t("tabs.skills")}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {t("tabs.education")}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA(t).find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;