import TV from "@/components/TV/TV";
import { Section } from "@/layout";
import { layout, text } from "@/styles/styles";
import { button } from "framer-motion/client";
import { useState } from "react";

const Hero = () => {
  return (
    <Section
      id="hero"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      <div className="">
        <div className=""> </div>
        {/* <TV /> */}
      </div>
    </Section>
  );
};

export default Hero;
