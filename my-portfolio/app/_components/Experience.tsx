"use client";
import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Section } from "./Misc/Section";
import { ArrowUpRight, Link as Link2 } from "lucide-react";
import { Icon } from "@iconify/react";
import { Code, DefaultIcon } from "./sharedComponents";
import { Duke } from "./Icons/Duke";
import { DIHI } from "./Icons/DIHI";
import { HAIP } from "./Icons/HAIP";
import { DukeHealth } from "./Icons/Duke Health";
import { Aramco } from "./Icons/Aramco";

interface Experience {
  name: string;
  shortname: string;
  present: boolean;
  incoming: boolean;
  role: string;
  url: string;
  start: string;
  end: string;
  shortDescription: React.ReactNode[];
}

export const Experience: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const [contentHeight, setContentHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    const transformSelected = () => {
      const underlineSpecial =
        document.querySelector<HTMLElement>(".underlineSpecial");
      if (underlineSpecial) {
        underlineSpecial.style.top = `${selected * 2.25}rem`;
      }
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: "Naderi Labs",
      shortname: "Duke",
      // logo: <Duke size={16} className="mr-2 mt-0.5" />,
      present: true,
      incoming: false,
      role: "Research Assistant",
      url: "https://sites.duke.edu/navid/",
      start: "Sep 2024",
      end: "Present",
      shortDescription: [
        <>
          I had <Code>experience</Code> working on a large codebase utilizing
          Kibana and Elasticsearc jfads fajfd dsjf jdah.
        </>,
      ],
    },
    {
      name: "Duke Impact Investing Group",
      shortname: "DIIG",
      // logo: <Duke size={16} className="mr-2 mt-0.5" />,
      present: true,
      incoming: false,
      role: "Data Analyst",
      url: "https://www.dukeimpact.org/",
      start: "Sep 2024",
      end: "Present",
      shortDescription: [
        <>
          I had <Code>experience</Code> working on a large codebase utilizing
          Kibana and Elasticsearc jfads fajfd dsjf jdah.
        </>,
      ],
    },
    {
      name: "Duke Institute for Health Innovation",
      shortname: "DIHI",
      // logo: <DIHI size={16} className="mr-2" />,
      present: false,
      incoming: false,
      role: "Research Analyst",
      url: "https://dihi.org/",
      start: "Jun. 2024",
      end: "Aug. 2024",
      shortDescription: [
        <>
          Developed LLM agents using{" "}
          <Code>
            <DefaultIcon icon={"mdi:microsoft"} className="" /> AutoGen
          </Code>{" "}
          and{" "}
          <Code>
            <DefaultIcon icon={"mingcute:meta-fill"} className="" /> Llamma
          </Code>{" "}
          to create literature reviews and research databases for{" "}
          <Code className="leading-relaxed text-wrap">
            <HAIP className="-mt-0.5 inline p-[0.5px]" height={16} width={14} />{" "}
            Health AI Partnership
          </Code>{" "}
          users
        </>,
        <>
          Building a multimodal deep learning predictive model for
          hospital-acquired thrombosis to be utilized by{" "}
          <Code>
            <DukeHealth size={16} className="-mt-0.5" /> Duke Health
          </Code>
        </>,
      ],
    },
    {
      name: "Project: Sapien",
      shortname: "Sapien",
      // logo: (
      //   <img
      //     src="https://media.licdn.com/dms/image/D4E0BAQGoQWtvjZAWbg/company-logo_200_200/0/1701588957383?e=1728518400&v=beta&t=RJkeTdJo5AqWgIq24YdWLlHGEOzidniz-qc-zRdlBwM"
      //     className="h-4 w-4 mr-2 rounded-sm"
      //   />
      // ),
      present: false,
      incoming: false,
      role: "Software Engineering Intern",
      url: "https://www.linkedin.com/company/project-sapien/?trk=ppro_cprof",
      start: "Dec. 2023",
      end: "Jan. 2024",
      shortDescription: [
        <>
          Created full-stack semantic analysis tools using{" "}
          <Code>
            <DefaultIcon icon={"ri:google-fill"} className="rounded-[1.5px]" />{" "}
            BERT
          </Code>
          -based models to help population health scientists extract structured
          data from unstructured surveys
        </>,
        <>
          Led data collection for pilot tests, coordinating with faculty and
          surveying 4,000+ students to create a diverse dataset
        </>,
      ],
    },
    {
      name: "King Fahd University of Petroleum & Minerals",
      shortname: "KFUPM",
      // logo: (
      //   <div className="relative inline-block">
      //     <img src="/aramco.png" className="h-4 w-4 mr-2 rounded-sm" />
      //     <div
      //       className="absolute"
      //       style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
      //     ></div>
      //   </div>
      // ),
      present: false,
      incoming: false,
      role: "Research Assistant",
      url: "https://kfupm.edu.sa/",
      start: "Jul. 2022",
      end: "Sep. 2023",
      shortDescription: [
        <>
          Created a{" "}
          <Code className="text-wrap leading-relaxed">
            <DefaultIcon icon={"mdi:chart-bell-curve"} /> GC Monte Carlo
            simulation
          </Code>{" "}
          statistical model, predicting 6 properties of 3 novel CO
          <span
            style={{
              verticalAlign: "sub",
              fontSize: "x-small",
              lineHeight: "1",
            }}
          >
            2
          </span>
          -capturing materials
        </>,
        <>
          Developed phloroglucinol polymers and MOF analogues for direct CO
          <span
            style={{
              verticalAlign: "sub",
              fontSize: "x-small",
              lineHeight: "1",
            }}
          >
            2
          </span>{" "}
          and H
          <span
            style={{
              verticalAlign: "sub",
              fontSize: "x-small",
              lineHeight: "1",
            }}
          >
            2
          </span>
          O capture for 2{" "}
          <Code>
            <Aramco
              className="-mt-1 inline rounded-[3px] p-[0.05em]"
              size={16}
            />{" "}
            Saudi Aramco
          </Code>{" "}
          projects
        </>,
      ],
    },
    {
      name: "King Abdulaziz University",
      shortname: "KAU",
      // logo: <Duke size={16} className="mr-2" />,
      present: false,
      incoming: false,
      role: "Research Assistant",
      url: "https://www.kau.edu.sa/home_english.aspx",
      start: "Aug. 2021",
      end: "Jun. 2022",
      shortDescription: [
        <>
          Utilized{" "}
          <Code>
            <DefaultIcon
              icon={"streamline:ai-generate-variation-spark-solid"}
            />{" "}
            ANOVA
          </Code>{" "}
          algorithms and{" "}
          <Code className="text-wrap">
            <DefaultIcon icon={"file-icons:nextflow"} /> Nextflow
          </Code>{" "}
          to measure genetic variation and phylogeny of 5 Capparis species
        </>,
        <>
          Analyzed needle biopsies, CT scans, and genetic/immunostaining results
          to detect early-stage cancer in patients
        </>,
      ],
    },
  ];

  return (
    <Section className="flex flex-col items-start gap-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
      >
        <Badge variant="outline" className="mb-4" id="experience">
          Experience
        </Badge>

        <h2 className="text-3xl font-semibold font-sans first:mt-0 text-primary">
          I&apos;ve worked at...
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
        className="w-full"
      >
        <div className="container px-1 gap-y-0">
          <ul className="exp-slider max-md:mb-4 relative">
            <motion.div
              className="underlineSpecial"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            {experiences.map((experience, index) => (
              <motion.li
                className={`exp-slider-item hover:bg-accent transition-colors max-md:justify-center ${
                  index === selected &&
                  "exp-slider-item-selected max-md:justify-center max-md:bg-accent transition"
                }`}
                onClick={() => setSelected(index)}
                key={experience.shortname}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <span
                  className={`font-semibold ${
                    experience.present || experience.incoming ? "mr-2" : ""
                  }`}
                >
                  {experience.shortname}
                </span>
                {experience.present && (
                  <Badge
                    variant="default"
                    className="p-1 my-3 text-[0.6em] leading-none rounded-full text-center font-semibold font-sans"
                  >
                    Present
                  </Badge>
                )}
                {experience.incoming && (
                  <Badge
                    variant="secondary"
                    className="p-1 my-3 text-[0.6em] leading-none rounded-full text-center font-semibold font-sans"
                  >
                    Incoming
                  </Badge>
                )}
              </motion.li>
            ))}
          </ul>
          <motion.div
            animate={{ height: contentHeight }}
            transition={{ duration: 0.2, ease: "linear" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  duration: 0.25,
                  opacity: { duration: 0.25 },
                }}
                className="text-xl font-medium font-sans text-pretty"
                onAnimationComplete={() => {
                  const element = document.getElementById(
                    `content-${selected}`
                  );
                  if (element) {
                    setContentHeight(element.offsetHeight);
                  }
                }}
              >
                <motion.div
                  id={`content-${selected}`}
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 425,
                    damping: 30,
                    mass: 0.9,
                  }}
                >
                  <h3>
                    <span className="text-accent-foreground font-semibold">
                      {experiences[selected].role}
                    </span>
                    <span className="text-xl font-medium font-sans">
                      &nbsp;@&nbsp;
                      <Link href={experiences[selected].url} target="_blank" rel="noopener noreferrer">
                        <div className="inline">
                          {experiences[selected].name}{" "}
                        </div>
                        <ArrowUpRight
                          className="inline-block w-5 mb-0.5"
                          size={16}
                        />
                      </Link>
                    </span>
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground font-mono pb-2 tracking-tight brightness-110">
                    {experiences[selected].start} - {experiences[selected].end}
                  </p>
                  <ul className="text-sm text-muted-foreground font-sans">
                    {experiences[selected].shortDescription.map(
                      (description, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.07 }}
                          className={`text-sm text-muted-foreground font-sans list-outside list-disc ml-4 ${
                            index !==
                            experiences[selected].shortDescription.length - 1
                              ? "pb-2"
                              : ""
                          }`}
                        >
                          {description}
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
