import { text } from "@/styles/styles";
import React, { useState } from "react";

type Props = {
  setActiveSection: any;
};

const Menu: React.FC<Props> = ({ setActiveSection }) => {
  const [currentSection, setCurrentSection] = useState("string");
  const sections = [
    "Home",
    "Projects",
    "Photography",
    "Writing",
    "About",
    "Contact",
  ];

  const handleMenuClick = (section: string) => {
    setCurrentSection(section);
    setActiveSection(section.toLowerCase());
  };

  return (
    <div className="flex flex-col items-center mt-15 h-48 py-6 bg-gray-900 relative border-b-2 border-white/60">
      <div className="flex flex-col mx-5">
        <h1 className={`${text.hero}`}>Orlando Llamos</h1>
        <p className={`${text.secondary} px-1`}>
          Your web dev and front-end designer
        </p>
      </div>
      <div className="w-[90%] my-3 gap-3 flex flex-row justify-around p-1 menu absolute bottom-0">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(section)}
            className={`${currentSection == section ? "active" : ""}`}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
