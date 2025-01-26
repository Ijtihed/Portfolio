import React from "react";
import { Section } from "./Misc/Section";
import { Copyright, CopyrightIcon, Heart } from "lucide-react";
import { Code, DefaultIcon } from "./sharedComponents";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className="bg-card">
      <Section>
        <p className="py-4 text-muted-foreground text-sm flex gap-x-1">
          <Copyright size={12.5} className="bottom-0 mt-1" />{" "}
          <span className=" ml-0.5">
            {"2024"} {"All rights reserved"}{" "}
          </span>
          <div className="ml-auto text-right max-[375px]:hidden">
            Made with <HeartFilledIcon className="inline -mt-1" width={11.5}/> in{" "}
            <span className="italic font-semibold">Durham, NC</span>
          </div>
        </p>
      </Section>
    </footer>
  );
};
