import { Section } from "@/layout";
import { layout } from "@/styles/styles";
import React from "react";

const Projects = () => {
  return (
    <Section
      id="projects"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      Projects
    </Section>
  );
};

export default Projects;
