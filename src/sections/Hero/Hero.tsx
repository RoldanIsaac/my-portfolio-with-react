import { Section } from "@/layout";
import { layout } from "@/styles/styles";
import React from "react";

const Hero = () => {
  return (
    <Section
      id="hero"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      Hero
    </Section>
  );
};

export default Hero;
