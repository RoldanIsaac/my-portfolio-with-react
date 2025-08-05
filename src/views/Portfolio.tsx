import BackToTopButton from "@/components/BackToTopButton/BackToTopButton";
import StarBackground from "@/components/StarBackground/StarBackground";
import { Navbar, Footer } from "@/layout";
import Menu from "@/layout/Menu";
import { Hero, Projects, About, Contact } from "@/sections";
import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

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
  const [activeSection, setActiveSection] = useState("home");

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
    <Router>
      <AppContent
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </Router>
  );
};

export default Portfolio;

type Props = {
  activeSection: any;
  setActiveSection: any;
};

const AppContent: React.FC<Props> = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/${activeSection}`);
  }, [activeSection, navigate]);

  return (
    <div className="overflow-hidden min-w-full">
      <Navbar />
      <BackToTopButton />

      <StarBackground />

      <div className="w-200 mx-auto">
        <Menu setActiveSection={setActiveSection} />

        <Routes>
          <Route path="/home" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Hero />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};
