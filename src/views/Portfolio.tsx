import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import { Navbar, Footer } from "@/layout";
import { Hero, Projects, About, Contact } from "@/sections";
import React, { useEffect, useState } from "react";

const imageList: string[] = [];

const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = (err) => {
      console.error("Error loading:", src);
      reject(err);
    };
  });
};

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started");
    const preload = Promise.all(imageList.map(preloadImage));
    const delay = new Promise((resolve) => setTimeout(resolve, 5500));

    Promise.all([preload, delay])
      .then(() => {
        console.log("Loading finished");
        setLoading(false);
      })
      .catch((err) => {
        console.error("Some images failed to preload", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="overflow-hidden w-full max-w-[2560px] mx-auto">
      <Navbar />
      <BackToTopButton />

      {/* 1 */}
      <Hero />

      {/* 2 */}
      <Projects />

      {/* 3 */}
      <About />

      {/* 4 */}
      <Contact />

      <Footer />
    </div>
  );
};

export default Portfolio;
