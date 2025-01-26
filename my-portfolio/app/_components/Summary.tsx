/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/components/ui/card";
import React from "react";
import { Section } from "./Misc/Section";
import {
  ArrowUpRight,
  Atom,
  Binary,
  Cpu,
  LucideIcon,
  Mail,
  Radiation,
  ScanEye,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

// =======================================================================

export const Summary = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      <div className="max-w-3xl px-4 m-auto flex flex-col items-start gap-4">
        <Badge variant={"outline"} className="mb-4">
          Summary
        </Badge>
      </div>
      
      <Section className="flex max-md:flex-col items-start gap-4">
        <Card className="font-sans font-medium flex-[3] w-full flex flex-col h-full gap-2 p-4">
          {/*<Badge variant={"outline"}>Summary</Badge> */}
          <p className="text-lg text-muted-foreground">
            Professional Experience
          </p>
          <div className="flex flex-col gap-3">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={work.role}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>

        <div className="flex-[2] w-full flex flex-col h-full gap-4">
          <Card className="font-sans font-medium flex-1 p-4">
            <p className="text-lg text-muted-foreground">Featured Projects</p>
            <div className="flex flex-col gap-2 pt-2">
              {SIDE_PROJECTS.map((project, index) => (
                <SideProject
                  key={index}
                  Logo={project.Logo}
                  title={project.title}
                  description={project.description}
                  url={project.url}
                />
              ))}
            </div>
          </Card>
          <Card className="font-sans font-medium flex-1 p-4 text-muted-foreground">
            <p className="text-lg text-muted-foreground">Contact</p>
            <div className="flex flex-col gap-2 pt-2">
              {CONTACT.map((contact, index) => (
                <Contact
                  key={index}
                  Logo={contact.Logo}
                  title={contact.title}
                  description={contact.description}
                  url={contact.url}
                />
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </motion.div>
  );
};

// =======================================================================

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Binary,
    title: "Medical Imaging",
    description: "ML & Computer Vision",
    url: "/",
  },
  {
    Logo: Atom,
    title: "2D Bin Packing",
    description: "Algorithm Engineering",
    url: "/",
  },
  {
    Logo: ScanEye,
    title: "CNT Biosensors",
    description: "Athletic Medical Device",
    url: "/",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/25 transition-colors py-0.5 px-2 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>

      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

// =======================================================================

const WORKS: WorkProps[] = [
  {
    image:
      "https://media.licdn.com/dms/image/D560BAQEVg2G3NGXgmw/company-logo_100_100/0/1692466480465/dukeinnovate_logo?e=1724284800&v=beta&t=mSxP_TqfLsPOm_ZXriZ4-dpIVb6POA7U5pbH-4flel0",
    title: "Duke Inst. for Health Innovation",
    role: "Research Analyst",
    date: "2024 - Present",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQE1nqQztnbgIA/company-logo_100_100/0/1704127476142/duke_university_logo?e=1726704000&v=beta&t=d_1-r1Yyp_64aceoDWbHQ2_mXrCkwZqhsE0pwmh0NQA",
    title: "Duke University",
    role: "Research Assistant",
    date: "2023 - Present",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/D4E0BAQGoQWtvjZAWbg/company-logo_100_100/0/1701588957384?e=1724284800&v=beta&t=0YW-cC6AuH32pc4lHtJvcCdZA_ttcutmd8CGqR74uSY",
    title: "Project Sapien",
    role: "Software Engineer",
    date: "2023 - 2024",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C560BAQFjHNUub2MPHA/company-logo_100_100/0/1631328654457?e=1724284800&v=beta&t=62U-7YNMjaN_qj-yndQwQhBgdV18UHVpPofcqWi74h0",
    title: "Saudi Aramco",
    role: "Research Assistant",
    date: "2022 - 2023",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C560BAQH8FNoYbuVixQ/company-logo_100_100/0/1631305310418?e=1724284800&v=beta&t=tn3vB1O_jYRSuwaW4iepd-oFhp5OouGPuUnG9J88j2M",
    title: "King Abdulaziz University",
    role: "Research Assistant",
    date: "2021 - 2022",
    url: "/",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/25 transition-colors py-0.5 px-2 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-9 h-9 object-contain rounded-sm border"
      />

      <div>
        <div className="text-lg font-semibold">{props.role}</div>
        <p className="text-sm text-muted-foreground">{props.title}</p>
      </div>

      <div className="ml-auto text-right">
        <p className="text-xs text-muted-foreground font-mono w-min	max-md:text-wrap">{props.date}</p>
      </div>
    </Link>
  );
};

// =======================================================================

const CONTACT: ContactProps[] = [
  {
    Logo: Mail,
    title: "Email",
    description: "islam.tayeb@duke.edu",
    url: "mailto:islam.tayeb@duke.edu",
  },
];

type ContactProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const Contact = (props: ContactProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/25 transition-colors py-0.5 px-2 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={16} />
      </span>

      <div>
        <div className="text-lg font-semibold">{props.title}</div>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>

      <div className="ml-auto">
        <ArrowUpRight
          size={16}
          className="text-muted-foreground group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform"
        />
      </div>
    </Link>
  );
};
