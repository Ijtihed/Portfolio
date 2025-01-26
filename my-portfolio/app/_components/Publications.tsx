"use client";
import React, { ComponentPropsWithoutRef } from "react";
import { Section } from "./Misc/Section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionv3";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight, Link as Link2, LucideGithub } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Code, DefaultIcon } from "./sharedComponents";

export const Publications = () => {
  const publicationsData = [
    {
      pubDate: "Dec. 2023",
      pubAuthors: (
        <>
          Mahmoud Abdelnaby,{" "}
          <span className="font-semibold text-primary">Islam Tayeb</span>, Ahmed
          Alloush, Hussain Alyosef, Aljazi Alnoaimi, Mostafa Zeama, Mohammed
          Mohammed, Sagheer Onaizi
        </>
      ),
      pubImpact: "Impact Factor: 7.2",
      pubTitle:
        "Post-synthetic Modification of UiO-66 Analogue Metal-Organic Framework as Potential Solid Sorbent for Direct Air Capture",
      pubJournal: (
        <>
          Journal of CO
          <span
            style={{
              verticalAlign: "sub",
              fontSize: 8,
              lineHeight: "1",
            }}
          >
            2
          </span>{" "}
          Utilization
        </>
      ),
      pubJournalLink:
        "https://www.journals.elsevier.com/journal-of-co2-utilization",
      pubType: "Research Article",
      pubDescription: (
        <>
          <p className="mb-1.5">
            This study enhances the UiO-66 metal-organic framework for direct
            air capture by modifying UiO-66-(OH)
            <span
              style={{
                verticalAlign: "sub",
                fontSize: 7.25,
                lineHeight: "1",
                fontWeight: "bold",
              }}
            >
              2
            </span>{" "}
            with APTES, resulting in a 15% increase in CO
            <span
              style={{
                verticalAlign: "sub",
                fontSize: 7.25,
                lineHeight: "1",
                fontWeight: "bold",
              }}
            >
              2
            </span>{" "}
            adsorption capacity and improved selectivity. The modified
            UiO-66-APTES demonstrates high stability and effectiveness in CO
            <span
              style={{
                verticalAlign: "sub",
                fontSize: 7.25,
                lineHeight: "1",
                fontWeight: "bold",
              }}
            >
              2
            </span>{" "}
            separation from air, making it a promising DAC adsorbent.
          </p>
          <p>
            I was involved in scheming and synthesizing all materials and
            performed full material characterization. I was further involved in
            writing the original manuscript and presenting it at 2 local
            symposiums in Saudi Arabia.
          </p>
        </>
      ),
      pubLink: "https://doi.org/10.1016/j.jcou.2023.102647",
      pubCategory: [
        {
          name: "Organic Chemistry",
          icon: "fluent:molecule-16-filled",
        },
        {
          name: "Materials Science",
          icon: "mdi:pipe-disconnected",
        },
        {
          name: "Environmental Tech",
          icon: "mdi:environment",
        },
      ],
    },
    {
      pubDate: "Jul. 2022",
      pubAuthors: (
        <>
          Abdullah Alsulaiman, Siraj Alharthi, Ahmed Albariqi, Rasha Mutabaqani,
          Fawzi Bokhari,{" "}
          <span className="font-semibold text-primary">Islam Tayeb</span>, Dalia
          Alharthi, Muhammad Tariq, Yasser Babaier
        </>
      ),
      pubImpact: "Impact Factor: 1.2",
      pubTitle:
        "KRAS G12C-Mutant Non-Small-Cell Lung Adenocarcinoma: First Documented Report in the Arabian Gulf",
      pubJournal: "Cureus Journal",
      pubJournalLink: "https://www.cureus.com/",
      pubType: "Case Report",
      pubDescription: (
        <>
          <p className="mb-1.5">
            This case report describes the first documented cases of KRAS
            G12C-mutant non-small-cell lung adenocarcinoma in the Arabian Gulf.
            Two Saudi males, aged 64 and 76, were diagnosed using reverse
            transcription-PCR. The 64-year-old, an ex-smoker, had generalized
            lymphadenopathy and a right lung mass. The 76-year-old, a
            non-smoker, had stage III-A left lung adenocarcinoma. The study
            calls for further research on KRAS mutations in the region to
            improve treatment strategies.
          </p>
          <p>
            I was involved in data collection and manuscript writing,
            collaborating with multiple physicians and describing their input
            and analyses.
          </p>
        </>
      ),
      pubLink: "http://dx.doi.org/10.7759/cureus.27090",
      pubCategory: [
        {
          name: "Medical Oncology",
          icon: "fa6-solid:ribbon",
        },
        {
          name: "Clinical Genetics",
          icon: "mdi:dna",
        },
        {
          name: "Regional Studies",
          icon: "fluent:location-16-filled",
        },
      ],
    },
    {
      pubDate: "Jun. 2022",
      pubAuthors: (
        <>
          Siraj Alharthi,{" "}
          <span className="font-semibold text-primary">Islam Tayeb</span>, Romar
          Pascual, Salman Aloufi, Rasha Mutabbaqani, Dalia Alharthi, Ahmed
          Al-Bariqi, Basem Almutiri, Abdullah Alsulaiman
        </>
      ),
      pubImpact: "Impact Factor: 0.8",
      pubTitle:
        "RAS Gene Mutations and Their Prevalence in Non-Small Cell Lung Cancer: A Review",
      pubJournal: "Bioscience Research",
      pubJournalLink: "",
      pubType: "Literature Review",
      pubDescription: (
        <>
          This review discusses RAS gene mutations in NSCLC, focusing on KRAS
          variants G12C, G12V, and G12D. G12C is common in smokers and lung
          adenocarcinoma, with sotorasib and adagrasib as effective inhibitors.
          KRAS mutations impact cell growth and survival, with G12D potentially
          useful as an immunotherapy biomarker. The review highlights the need
          for further research due to NSCLC&apos;s severity and prevalence in
          high altitude areas especially.,
        </>
      ),
      pubLink:
        "https://www.researchgate.net/publication/361118570_RAS_gene_mutations_and_their_prevalence_in_non-small_Cell_lung_cancer_A_Review",
      pubCategory: [
        {
          name: "Medical Oncology",
          icon: "fa6-solid:ribbon",
        },
        { name: "Clinical Genetics", icon: "mdi:dna" },
        {
          name: "Targeted Therapy",
          icon: "bx:target-lock",
        },
      ],
    },
    {
      pubDate: "Apr. 2022",
      pubAuthors: (
        <>
          Siraj Alharthi,{" "}
          <span className="font-semibold text-primary">Islam Tayeb</span>, Romar
          Pascual, Salman Aloufi, Khalid Alotaibi
        </>
      ),
      pubImpact: "Impact Factor: 0.8",
      pubTitle:
        "Medicinal Effects and Phytochemical Composition of Capparis Cartilaginea Decne: A Review",
      pubJournal: "Bioscience Research",
      pubJournalLink: "",
      pubType: "Literature Review",
      pubDescription: (
        <>
          This review highlights Capparis Cartilaginea Decne from the
          Capparaceae family, valued for its medicinal use historically
          throughout many areas of Asia and Africa. Phytochemical screenings
          reveal diverse metabolites supporting its therapeutic claims,
          validating its traditional medicinal applications.
        </>
      ),
      pubLink:
        "https://www.researchgate.net/publication/359931677_Medicinal_effects_and_Phytochemical_composition_of_Capparis_Cartilaginea_Decne_A_Review",
      pubCategory: [
        {
          name: "Phytochemistry",
          icon: "mdi:leaf",
        },
        {
          name: "Folk Medicine",
          icon: "icon-park-solid:traditional-chinese-medicine",
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
        <Badge variant={"outline"} className="mb-4" id="publications">
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
          pubJournalLink,
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
              <div className="flex items-center gap-4 mx-2 ">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full font-sans "
                >
                  <AccordionItem
                    value="item-1"
                    className="pb-4 text-pretty flex flex-row transition gap-4"
                  >
                    <div className="flex items-center text-muted-foreground text-sm w-min text-left font-mono">
                      <p className="">{pubDate}</p>
                    </div>
                    <div>
                      <div className="flex flex-row">
                        <div className="text-primary flex flex-col">
                          <div className="text-base font-bold text-foreground">
                            <Link
                              href={pubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="transition brightness-105">
                                {pubTitle}
                              </span>{" "}
                              <ArrowUpRight
                                className="inline-block w-5 mb-0.5"
                                size={16}
                              />
                            </Link>
                          </div>
                          <div className="text-muted-foreground text-sm font-normal text-[0.925em]">
                            <TooltipProvider delayDuration={50}>
                              <Tooltip>
                                <TooltipTrigger className="font-medium">
                                  <div className="relative after:absolute after:bottom-0 after:left-0 before:h-[0.5px] after:h-[0.5px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-200 after:bg-gray-500 text-foreground">
                                    {pubJournalLink ? (
                                      <Link
                                        href={pubJournalLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {pubJournal}
                                      </Link>
                                    ) : (
                                      pubJournal
                                    )}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent className="shadow-md shadow-card transition-all">
                                  <p>{pubImpact}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            {" - " + pubType}{" "}
                          </div>
                          <div className="text-muted-foreground  text-xs font-light py-1.5">
                            {typeof pubAuthors === "string" ? (
                              `- ${pubAuthors}`
                            ) : (
                              <>{pubAuthors}</>
                            )}
                          </div>
                        </div>
                      </div>
                      <AccordionContent className="mr-8 pb-2.5 pt-0.5">
                        {pubDescription}
                      </AccordionContent>
                      <div className="flex flex-wrap gap-2 text-xs leading-none">
                        {pubCategory.map((category) => (
                          // consider using max-md:text-nowrap
                          <Code
                            key={category.name}
                            className="inline-flex items-center"
                          >
                            <DefaultIcon
                              icon={category.icon}
                              className="text-current -mt-0"
                              height="14"
                            />
                            <span className="ml-2">{category.name}</span>
                          </Code>
                        ))}
                      </div>
                    </div>
                    <AccordionTrigger className="pb-0 p-1" />
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          );
        }
      )}
    </Section>
  );
};
