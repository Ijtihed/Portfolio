"use client";
import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./Misc/Section";
import { Polymer } from "./Icons/Polymer";
import { Medtech } from "./Icons/Medtech";
import { cn } from "@/lib/utils";
import { SWEIcon } from "./Icons/SWEIcon";
import { Badge } from "@/components/ui/badge";
import { initialize } from "next/dist/server/lib/render-server";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Code, DefaultIcon } from "./sharedComponents";
import Link from "next/link";
import { DukeHealth } from "./Icons/Duke Health";
import { HAIP } from "./Icons/HAIP";
import { AMA } from "./Icons/AMA";

export const About = () => {
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
        <Badge variant={"outline"} className="mb-4">
          About
        </Badge>
        <h2 className="text-3xl font-semibold font-sans first:mt-0 text-primary">
          I love working on...
        </h2>
      </motion.div>

      <div className="flex max-md:flex-col gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex-1 "
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
        >
          <div className="flex flex-col gap-2">
            <Polymer size={54} />
            <h3 className="text-2xl font-medium font-sans">Chemistry Research</h3>
            <p className="text-sm text-muted-foreground font-sans">
              2+ years of experience in academic and industrial settings with <Link href={"#publications"} className="underline underline-offset-2">4 papers published</Link> in organic, computational, and applied chemistry. I&apos;m interested in reticular and polymer chemistry, materials discovery, and drug discovery.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex-1"
          viewport={{ once: true }}
          transition={{ duration: 0.2, }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
        >
          <div className="flex flex-col gap-2">
            <Medtech size={54} />
            <h3 className="text-2xl font-medium font-sans">
              Medical Technology
            </h3>
            <p className="text-sm text-muted-foreground font-sans">
            I&apos;ve developed medical technology solutions for <Code className="leading-relaxed"><DukeHealth size={16} className="-mt-0.5"/>{" "}Duke Health</Code>{" "}, <Code className="leading-relaxed"><HAIP className="-mt-0.5 inline p-[0.5px]" height={16} width={14} />{" "}Health AI Partnership</Code>{" "}, and <Code className="leading-relaxed"><AMA height={16} width={14} className="inline -mt-0.5" />{" "}AMA</Code>{" "}, and competed nationally in medical device design competitions.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex-1"
          viewport={{ once: true }}
          transition={{ duration: 0.2, }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 25 },
          }}
        >
          <div className="flex flex-col gap-2">
            <SWEIcon size={54} />
            <h3 className="text-2xl font-medium font-sans">Software Dev</h3>
            <p className="text-sm text-muted-foreground font-sans">
              I&apos;ve worked on projects to increase the accessibility of tools and technologies in healthcare, research, and academic spaces. You can check out my <Link href={"https://github.com/IslamTayeb"} className="underline underline-offset-2">GitHub</Link> for my latest software development projects and contributions.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
