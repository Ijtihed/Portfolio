"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";
import { Duke } from "./Icons/Duke";
import { Code, DefaultIcon } from "./sharedComponents";
import Link from "next/link";
import { Section } from "./Misc/Section";

export const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 25 },
      }}
      className="ease-in-out"
    >
      <Section className="">
        <Badge variant="outline" className="mb-4" id="hero">
          Welcome!
        </Badge>
        <div className="flex max-md:flex-col items-start gap-4">
          {/* Avatar section remains unchanged */}
          <div className="flex-[2] p-2 flex my-auto max-md:mx-auto">
            <Avatar className="w-11/12 h-auto max-w-xs mx-auto max-md:w-full max-md:mb-2 relative border border-accent">
              <AvatarImage
                className="object-cover absolute z-20 opacity-0 hover:opacity-100 transition-all scale-105"
                src="/myphoto.webp"
                alt="Original Photo"
              />
              <AvatarImage
                className="object-cover relative contrast-[1.02] scale-105"
                src="/myphotogradient.webp"
                alt="Gradient Photo"
              />
              <AvatarFallback className="h-full">Islam</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-[3] flex flex-col gap-0.5 my-auto">
            <h2 className="font-caption font-semibold text-5xl text-foreground">
              Hello, <span className="text-accent-foreground">Islam</span> here!
            </h2>
            <h3 className="font-caption font-medium text-2xl">
              I&apos;m a{" "}
              <span className="text-primary">
                <Typewriter
                  words={[
                    "Research Assistant",
                    "Software Developer",
                    "Data Engineer",
                    "Graphic Designer",
                  ]}
                  cursor
                  cursorColor="#a8b1c2"
                  cursorStyle="_"
                  typeSpeed={40}
                  loop={0}
                  deleteSpeed={25}
                  delaySpeed={2000}
                />
              </span>
            </h3>
            <p className="font-sans basis-0 text-muted-foreground text-pretty">
              A{" "}
              <Code>
                <DefaultIcon icon="lucide:braces" /> Computer Science
              </Code>
              ,{" "}
              <Code>
                <DefaultIcon icon="lucide:dna" /> Bioinformatics
              </Code>
              , and{" "}
              <Code>
                <DefaultIcon icon="lucide:atom" /> Chemistry
              </Code>{" "}
              student at{" "}
              <Code className="text-wrap">
                <Duke size={14} /> Duke University
              </Code>
              . Currently based in{" "}
              <Code>
                <DefaultIcon icon="flag:us-1x1" className="rounded-[1.5px]" />{" "}
                Durham, NC
              </Code>{" "}
              with an interest in applied research and AI/ML. Feel free to{" "}
              <Link href="#contact" className="underline underline-offset-2">
                reach out
              </Link>
              !
            </p>
            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 1, height: 0 },
                  }}
                  transition={{ duration: 0.15, ease: "linear" }}
                  className="overflow-hidden"
                >
                  <motion.p className="font-sans basis-0 text-muted-foreground pt-1 text-pretty">
                    I grew up between{" "}
                    <Code>
                      <DefaultIcon
                        icon="flag:eg-1x1"
                        className="rounded-[1.5px]"
                      />{" "}
                      Egypt
                    </Code>{" "}
                    and{" "}
                    <Code>
                      <DefaultIcon
                        icon="flag:sa-1x1"
                        className="rounded-[1.5px]"
                      />{" "}
                      Saudi Arabia
                    </Code>
                    . I used to be a semi-professional graphic designer in
                    esports for 4 years, but I still design as a hobby. I&apos;m
                    a big fan of{" "}
                    <Code>
                      <DefaultIcon icon="clarity:cd-dvd-solid" /> Alternative
                      Hip Hop
                    </Code>
                    , and I like to play{" "}
                    <Code>
                      <DefaultIcon icon="fluent:tetris-app-16-filled" /> Tetris
                    </Code>{" "}
                    in my free time between classes and work.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="flex">
              <Button
                variant="outline"
                className="my-2.5 p-3 font-sans mb-0 h-9"
                onClick={handleReadMoreClick}
              >
                {showMore ? "Show Less" : "Read More"}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Hero;
