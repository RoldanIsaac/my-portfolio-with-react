import { Section } from "@/layout";
import { layout, text } from "@/styles/styles";
import { title } from "process";
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Peperoni Landing Page",
      about:
        "A memecoun landing page for launching a meme coin under the name of Peperoni. A lot of fun styles, colors, fonts, animations. Check a link down in the link below",
      status: "Completed",
      url: "getpeperoni.com",
      year: "2025",
    },
    {
      title: "SHO Management System",
      about:
        "SHO Management System is a huge system for tracking the whole system of the Bros Garden Circus. A lot of work put into this one. But generelly positive reviews. Developed on Angular and working in a great Team for the integration and deployment of the web site.",
      status: "In progress",
      year: "2023-2025",
    },
    {
      title: "Three store projects",
      about:
        "This is kinda a expresss three in one project. I developd three small e-commerce and one blog website for my clients. In the short term of two weeks. .",
      status: "In progress",
      year: "2023-2025",
    },
  ];

  return (
    <Section
      id="projects"
      className={`${layout.section} ${layout.sectionHeight} overflow-hidden items-start`}
      // bgColor="linear-gradient(to bottom, transparent, #0c0500)"
      // backgroundSvg={transitionUpBg}
    >
      <div className="">
        {projects.map((project, index) => (
          <div
            className="border-b-1 bg-zinc-800 hover:bg-zinc-600 cursor-pointer"
            key={index}
          >
            <div className="flex flex-row">
              <span className="bg-green-600 w-10 max-w-10 shadow-xl">
                {project.year}
              </span>

              <div className="px-8 py-5">
                <h1 className={`${text.title} mb-2`}>{project.title}</h1>
                <p>{project.about}</p>
                <span>{project.status}</span>
              </div>

              <span></span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
