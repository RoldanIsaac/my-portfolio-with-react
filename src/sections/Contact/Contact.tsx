import { Section } from "@/layout";
import { layout } from "@/styles/styles";
import React from "react";

const Contact = () => {
  return (
    <Section
      id="contact"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      Contact
    </Section>
  );
};

export default Contact;
