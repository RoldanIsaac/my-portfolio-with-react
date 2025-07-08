import { Section } from "@/layout";
import { layout } from "@/styles/styles";
import React from "react";

const About = () => {
  return (
    <Section
      id="about"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      About
    </Section>
  );
};

export default About;
