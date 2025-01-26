"use client";
import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "../Misc/Section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionv2";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Link as Link2, LucideGithub } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Code, DefaultIcon } from "../sharedComponents";

export const Publications_Scrappedv2 = () => {
  const publicationsData = [
    {
      pubDate: "Dec. 2023",
      pubAuthors: (
        <>
          Mahmoud Abdelnaby, <span className="font-semibold">Islam Tayeb</span>,
          Ahmed Alloush, Hussain Alyosef, Aljazi Alnoaimi, Mostafa Zeama,
          Mohammed Mohammed, Sagheer Onaizi
        </>
      ),
      pubImpact: "Impact Factor: 5.5",
      pubTitle:
        "Post-synthetic Modification of UiO-66 Analogue Metal-Organic Framework as Potential Solid Sorbent for Direct Air Capture",
      pubJournal: "Journal of CO₂ Utilization",
      pubType: "Research Article",
      pubDescription:
        "Tempor laboris velit fugiat cupidatat cupidatat anim. Occaecat aute ex incididunt amet aliqua. Qui cillum adipisicing eiusmod in est consectetur. Ex aliquip ut ipsum dolore do id eu excepteur nostrud nostrud Lorem. Ea velit incididunt non nulla id elit. Qui incididunt elit amet esse anim laborum exercitation cupidatat occaecat eu dolor in qui est. Ea pariatur cillum incididunt ut.",
      pubLink: "https://doi.org/10.1016/j.jcou.2023.102647",
      pubCategory: [
        {
          name: "Metal-Organic Frameworks",
          icon: "lucide:atom",
          color: "text-blue-500",
        },
        {
          name: "Post-synthetic Modification",
          icon: "ion:beaker",
          color: "text-green-500",
        },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
      ],
    },
    {
      pubDate: "Jul. 2022",
      pubAuthors: (
        <>
          Abdullah Alsulaiman, Siraj Alharthi, Ahmed Albariqi, Rasha Mutabaqani,
          Fawzi Bokhari, <span className="font-semibold">Islam Tayeb</span>,
          Dalia Alharthi, Muhammad Tariq, Yasser Babaier
        </>
      ),
      pubImpact: "Impact Factor: 5.5",
      pubTitle:
        "KRAS G12C-Mutant Non-Small-Cell Lung Adenocarcinoma: First Documented Report in the Arabian Gulf",
      pubJournal: "Cureus Journal",
      pubType: "Case Report",
      pubDescription:
        "Tempor laboris velit fugiat cupidatat cupidatat anim. Occaecat aute ex incididunt amet aliqua. Qui cillum adipisicing eiusmod in est consectetur. Ex aliquip ut ipsum dolore do id eu excepteur nostrud nostrud Lorem. Ea velit incididunt non nulla id elit. Qui incididunt elit amet esse anim laborum exercitation cupidatat occaecat eu dolor in qui est. Ea pariatur cillum incididunt ut.",
      pubLink: "http://dx.doi.org/10.7759/cureus.27090",
      pubCategory: [
        {
          name: "Non-Small-Cell Lung Cancer",
          icon: "mdi:lungs",
          color: "text-purple-500",
        },
        {
          name: "Arabian Gulf",
          icon: "mdi:map-marker",
          color: "text-yellow-500",
        },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
      ],
    },
    {
      pubDate: "Jun. 2022",
      pubAuthors: (
        <>
          Siraj Alharthi, <span className="font-semibold">Islam Tayeb</span>,
          Romar Pascual, Salman Aloufi, Rasha Mutabbaqani, Dalia Alharthi, Ahmed
          Al-Bariqi, Basem Almutiri, Abdullah Alsulaiman
        </>
      ),
      pubImpact: "Impact Factor: 5.5",
      pubTitle:
        "RAS Gene Mutations and Their Prevalence in Non-Small Cell Lung Cancer: A Review",
      pubJournal: "Bioscience Research",
      pubType: "Literature Review",
      pubDescription:
        "Tempor laboris velit fugiat cupidatat cupidatat anim. Occaecat aute ex incididunt amet aliqua. Qui cillum adipisicing eiusmod in est consectetur. Ex aliquip ut ipsum dolore do id eu excepteur nostrud nostrud Lorem. Ea velit incididunt non nulla id elit. Qui incididunt elit amet esse anim laborum exercitation cupidatat occaecat eu dolor in qui est. Ea pariatur cillum incididunt ut.",
      pubLink:
        "https://www.researchgate.net/publication/361118570_RAS_gene_mutations_and_their_prevalence_in_non-small_Cell_lung_cancer_A_Review",
      pubCategory: [
        {
          name: "Non-Small-Cell Lung Cancer",
          icon: "mdi:lungs",
          color: "text-purple-500",
        },
        { name: "Genetic Mutations", icon: "mdi:dna", color: "text-pink-500" },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
      ],
    },
    {
      pubDate: "Apr. 2022",
      pubAuthors: (
        <>
          Siraj Alharthi, <span className="font-semibold">Islam Tayeb</span>,
          Romar Pascual, Salman Aloufi, Khalid Alotaibi
        </>
      ),
      pubImpact: "Impact Factor: 5.5",
      pubTitle:
        "Medicinal Effects and Phytochemical Composition of Capparis Cartilaginea Decne: A Review",
      pubJournal: "Bioscience Research",
      pubType: "Literature Review",
      pubDescription:
        "Tempor laboris velit fugiat cupidatat cupidatat anim. Occaecat aute ex incididunt amet aliqua. Qui cillum adipisicing eiusmod in est consectetur. Ex aliquip ut ipsum dolore do id eu excepteur nostrud nostrud Lorem. Ea velit incididunt non nulla id elit. Qui incididunt elit amet esse anim laborum exercitation cupidatat occaecat eu dolor in qui est. Ea pariatur cillum incididunt ut.",
      pubLink:
        "https://www.researchgate.net/publication/359931677_Medicinal_effects_and_Phytochemical_composition_of_Capparis_Cartilaginea_Decne_A_Review",
      pubCategory: [
        {
          name: "Medicinal Effects",
          icon: "mdi:medical-bag",
          color: "text-blue-500",
        },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
        {
          name: "Non-Small-Cell Lung Cancer",
          icon: "mdi:lungs",
          color: "text-purple-500",
        },
        { name: "Genetic Mutations", icon: "mdi:dna", color: "text-pink-500" },
        {
          name: "Phytochemical Composition",
          icon: "mdi:leaf",
          color: "text-green-500",
        },
      ],
    },
  ];

  return (
    <Section className="flex flex-col items-start gap-4">
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
        <Badge variant={"outline"} className="mb-4">
          Publications
        </Badge>
        <h2 className="text-3xl font-semibold font-sans first:mt-0 text-primary">
          Check out my publications...
        </h2>
      </motion.div>

      {publicationsData.map(
        ({
          pubDate,
          pubAuthors,
          pubTitle,
          pubJournal,
          pubDescription,
          pubLink,
          pubImpact,
          pubType,
          pubCategory,
        }) => {
          return (
            <motion.div
              className="project max-md:w-full"
              key={pubTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
              }}
            >
              <div className="flex flex-col">
                <div className="flex flex-row items-center gap-4 mx-2">
                  <div className="text-muted-foreground text-sm pb-2.5 flex flex-row w-min text-left">
                    <div className="flex flex-col my-auto gap-1.5">
                      {/* {pubCategory.slice(0, 2).map((category) => (
                      <TooltipProvider key={category.name} delayDuration={50}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className="mr-1">
                              <Icon
                                icon={category.icon}
                                className={`text-current`}
                                height="14"
                              />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="shadow-md shadow-card transition-all">
                            <p>{category.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))} */}
                    </div>
                    <p className="">{pubDate}</p>
                  </div>
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full font-sans "
                  >
                    <AccordionItem value="item-1" className="text-pretty">
                      <AccordionTrigger className="text-left gap-4 pb-1.5">
                        <div className="text-primary flex flex-col">
                          <div className="text-base font-bold text-foreground">
                            {pubTitle}{" "}
                          </div>
                          <div className="text-muted-foreground text-sm font-normal">
                            <TooltipProvider delayDuration={50}>
                              <Tooltip>
                                <TooltipTrigger className="font-semibold">
                                  {pubJournal}
                                </TooltipTrigger>
                                <TooltipContent className="shadow-md shadow-card transition-all">
                                  <p>{pubImpact}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {" - " + pubType}{" "}
                            {/* <div className="inline ml-1">
                            {pubCategory.map((category) => (
                              <TooltipProvider
                                key={category.name}
                                delayDuration={50}
                              >
                                <Tooltip>
                                  <TooltipTrigger>
                                    <div className="mr-1 h-min">
                                      <Icon
                                        icon={category.icon}
                                        className="h-min bottom-0 align-text-bottom"
                                        height="12"
                                      />
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent className="shadow-md shadow-card transition-all">
                                    <p>{category.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            ))}
                          </div> */}
                          </div>

                          <div className="text-muted-foreground  text-xs font-light mt-0.5">
                            {typeof pubAuthors === "string" ? (
                              `- ${pubAuthors}`
                            ) : (
                              <>{pubAuthors}</>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className="mr-8 pb-2">
                        {pubDescription}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="inline text-xs ml-[56px]">
                  {pubCategory.map((category) => (
                    <Code
                      key={category.name}
                      className="mr-2 text-nowrap leading-loose"
                    >
                      <Icon
                        icon={category.icon}
                        className={`text-current inline mr-1 align-middle`}
                        height="14"
                      />
                      <span className="">{category.name}</span>
                    </Code>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        }
      )}
    </Section>
  );
};
