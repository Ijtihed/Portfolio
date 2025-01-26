"use client";
import React from "react";
import { Section } from "./Misc/Section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Code, DefaultIcon } from "./sharedComponents";

export const Skills = () => {

  const skillsData = [
    {
      category: "Programming Languages",
      technologies: [
        { name: "Python", icon: "akar-icons:python-fill" },
        { name: "TypeScript", icon: "akar-icons:typescript-fill" },
        { name: "Java", icon: "fa6-brands:java" },
        { name: "SQL", icon: "fa-solid:database" },
        { name: "R Language", icon: "devicon-plain:r" },
        { name: "C Language", icon: "devicon-plain:c" },
        { name: "MATLAB", icon: "file-icons:matlab" },
        // { name: "LaTeX", icon: "file-icons:latex" },
      ],
    },
    {
      category: "Machine Learning",
      technologies: [
        { name: "TensorFlow", icon: "simple-icons:tensorflow" },
        { name: "PyTorch", icon: "simple-icons:pytorch" },
        { name: "BERT", icon: "bi:google" },
        { name: "Gemini", icon: "simple-icons:googlegemini" },
        { name: "GPT", icon: "simple-icons:openai" },
        { name: "SciKit-Learn", icon: "simple-icons:scikitlearn" },
      ],
    },
    {
      category: "Web/App Development",
      technologies: [
        { name: "React", icon: "akar-icons:react-fill" },
        { name: "Angular", icon: "cib:angular" },
        { name: "SCSS", icon: "simple-icons:sass" },
        { name: "Framer Motion", icon: "teenyicons:framer-solid" },
        { name: "HTML5", icon: "simple-icons:html5" },
        { name: "CSS3", icon: "simple-icons:css3" },
        { name: "PostgreSQL", icon: "akar-icons:postgresql-fill" },
      ],
    },
    {
      category: <>Deployment&nbsp;& Integration</>,
      technologies: [
        { name: "Linux", icon: "devicon-plain:linux" },
        { name: "Git", icon: "simple-icons:git" },
        { name: "Docker", icon: "simple-icons:docker" },
        { name: "Vercel", icon: "ion:logo-vercel" },
      ],
    },
    // {
    //   category: "Research",
    //   technologies: [
    //     { name: "Organic Synthesis (Porous Polymers)", icon: "eos-icons:molecules-outlined" },
    //     { name: "CO2 & H2O Capture/Utilization", icon: "mdi:molecule-co2" },
    //     { name: "Physical Modelling", icon: "mdi:atom" },
    //     { name: "Genetic Variation", icon: "ph:dna-fill" },
    //     { name: "LaTeX", icon: "file-icons:latex" },
    //   ],
    // },
    // {
    //   category: "Design",
    //   technologies: [
    //     { name: "Adobe Suite", icon: "simple-icons:adobecreativecloud" },
    //     { name: "Blender", icon: "file-icons:blender" },
    //     { name: "Cinema4D", icon: "simple-icons:cinema4d" },
    //     { name: "Graphical Abstracts & Figure", icon: "ri:image-add-fill" },
    //   ],
    // },
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
        <Badge variant={"outline"} className="mb-4" id="skills">
          Skills
        </Badge>
        <h2 className="text-3xl font-semibold font-sans first:mt-0 text-primary">
          My technical skills include...
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        className="w-full"
        viewport={{ once: true }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 25 },
        }}
      >
        {/* might want t remve categry and technlgies  */}
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="text-left w-1/6 font-extrabold text-foreground">
                Category
              </TableHead>
              <TableHead className="text-left w-5/6 font-extrabold text-foreground">
                Technologies
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-accent-foreground">
            {skillsData.map((skillCategory) => (
              <TableRow key={skillCategory.category.toString()}>
                <TableCell className="font-medium text-muted-foreground">
                  {skillCategory.category}
                </TableCell>
                <TableCell className="flex gap-3">
                  {skillCategory.technologies.map((tech) => (
                    <TooltipProvider key={tech.name} delayDuration={50}>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="p-1">
                            <Icon
                              className="hover:blur-[6px] absolute transition-all opacity-35"
                              icon={tech.icon}
                              width="2.25em"
                              height="2.25em"
                            />
                            <Icon
                              className=""
                              icon={tech.icon}
                              width="2.25em"
                              height="2.25em"
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-semibold">{tech.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
    </Section>
  );
};
