"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LucideGithub, Link as Link2 } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Misc/Section";
import { Icon } from "@iconify/react";
import { Code, DefaultIcon } from "./sharedComponents";

export const Projects = () => {
  const projectsData = [
    {
      image: "/gpt2.jpg",
      projectName: "GPT-2 Reproduction",
      new: false,
      wip: true,
      projectDescription: (
        <>
          Building a GPT-2 clone using pure Python, NumPy, and math to
          understand how LLMs work under the hood. This project includes
          creating an autograd engine, makemore, transformers, and tokenizers.
          Credit to{" "}
          <Link href={"https://github.com/karpathy/build-nanogpt"}>
            Andrej Karpathy
          </Link>
          .
        </>
      ),
      projectTech: [
        "Python",
        "PyTorch",
        "Lambda",
        "Transformers",
        "Linear Algebra",
      ],
      projectTechLogo: [
        "akar-icons:python-fill",
        "simple-icons:pytorch",
        "mdi:lambda",
        "material-symbols:view-in-ar-outline-rounded",
        "mdi:matrix",
      ],
      projectExternalLinks: {
        github: "https://github.com/IslamTayeb/GPT-2-reproduction",
        externalLink: "",
      },
    },
    {
      image: "/drugdiscovery.jpg",
      projectName: "App for Bioactivity Prediction",
      new: false,
      wip: true,
      projectDescription: (
        <>
          Developing an ML model to analyze bioactivity using molecular
          structures and descriptors. This model will power a web app for
          predicting molecule bioactivity, streamlining biochemical research.
          Credit to{" "}
          <Link
            href={
              "https://github.com/dataprofessor/bioinformatics_freecodecamp/"
            }
          >
            Data Professor
          </Link>
          .
        </>
      ),
      projectTech: [
        "Python",
        "R",
        "React",
        "Molecular Descriptors",
        // "Drug Discovery",
      ],
      projectTechLogo: [
        "akar-icons:python-fill",
        "mdi:language-r",
        "akar-icons:react-fill",
        "tabler:tag-filled",
        // "mdi:drugs",
      ],
      projectExternalLinks: {
        github: "https://github.com/IslamTayeb/bioactivity-prediction",
        externalLink: "",
      },
    },
    {
      image: "/carbonfibres.webp",
      projectName: "Wearable Carbon Fibre Health Sensors",
      new: false,
      wip: false,
      projectDescription: (
        <>
          Enhanced wearable carbon fibre sensors for athlete health monitoring
          (lactate, CO
          <span
            style={{
              verticalAlign: "sub",
              fontSize: "x-small",
              lineHeight: "1",
            }}
          >
            2
          </span>
          , pressure), improving accuracy by 23%, securing a $5,000 grant.
          Developed a live performance scoring interface with Angular.
        </>
      ),
      projectTech: [
        "Python",
        "Angular",
        "TypeScript",
        // "SCSS",
        "Medical Devices",
      ],
      projectTechLogo: [
        "akar-icons:python-fill",
        "cib:angular",
        "akar-icons:typescript-fill",
        // "akar-icons:sass-fill",
        "mdi:robot-industrial",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];

  return (
    <Section className="font-sans flex-col gap-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        className="gap-4"
        viewport={{ once: true }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
      >
        <Badge variant={"outline"} className="mb-4" id="projects">
          Projects
        </Badge>
        <h2 className="text-3xl font-semibold font-sans text-primary mb-3.5">
          I&apos;ve been making...
        </h2>
      </motion.div>

      <div className="projects-container">
        {projectsData.map(
          (
            {
              image,
              projectDescription,
              projectExternalLinks,
              projectName,
              projectTech,
              projectTechLogo,
              new: isNew,
              wip: isWip,
            },
            index
          ) => {
            const isOdd = index % 2 !== 0;
            return (
              <motion.div
                className="project max-md:w-full"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 25 },
                }}
              >
                <div className="project-info gap-3">
                  <h3
                    className={`project-info-title shadow-black antialiased max-md:w-full leading-tight flex flex-row items-center gap-2 ${
                      isOdd ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="leading-tight h-min invisible absolute max-md:visible max-md:relative text-left w-auto">
                      {projectName}
                    </div>
                    {!isOdd && (isNew || isWip) && (
                      <>
                        {isNew && (
                          <Badge
                            variant="default"
                            className="rounded-full font-semibold font-sans text-[0.4em] px-1 h-fit text-nowrap"
                          >
                            New
                          </Badge>
                        )}
                        {isWip && (
                          <Badge
                            variant="default"
                            className="rounded-full text-center font-semibold font-sans text-[0.4em] px-1 h-fit text-nowrap"
                          >
                            In Progress
                          </Badge>
                        )}
                      </>
                    )}
                    <div className="leading-tight h-min visible relative max-md:invisible max-md:absolute ">
                      {projectName}
                    </div>
                    {isOdd && (isNew || isWip) && (
                      <>
                        {isNew && (
                          <Badge
                            variant="default"
                            className="rounded-full font-semibold font-sans text-[0.4em] px-1 h-fit text-nowrap"
                          >
                            New
                          </Badge>
                        )}
                        {isWip && (
                          <Badge
                            variant="default"
                            className="rounded-full text-center font-semibold font-sans text-[0.4em] px-1 h-fit text-nowrap"
                          >
                            In Progress
                          </Badge>
                        )}
                      </>
                    )}
                  </h3>
                  <div className="project-info-description border max-md:border-0">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech, index) => (
                      <li key={tech}>
                        <Code>
                          <DefaultIcon
                            icon={`${projectTechLogo[index]}`} // Assuming projectTechLogo[index] gives the correct logo name
                            className="inline text-current" // Merged className properties
                            height="14px"
                          />{" "}
                          {tech}
                        </Code>
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links max-md:w-full max-md:justify-end">
                    {projectExternalLinks.github && (
                      <li className="project-info-links-item ">
                        <Link
                          href={projectExternalLinks.github}
                          className="project-info-links-item-link"
                        >
                          <LucideGithub size={16} />
                        </Link>
                      </li>
                    )}
                    {projectExternalLinks.externalLink && (
                      <li className="project-info-links-item ">
                        <Link
                          href={projectExternalLinks.externalLink}
                          className="project-info-links-item-link"
                        >
                          <Link2 size={16} />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="project-image overflow-hidden scale-95 rounded-sm border-accent border max-md:rounded-xl">
                  <div className="project-image-container blur-sm brightness-[0.35] hover:blur-0 hover:brightness-100 transition-all max-md:blur-0 scale-105">
                    <Image
                      src={image}
                      fill
                      alt={projectName}
                      quality={100}
                      className=""
                    />
                  </div>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </Section>
  );
};
