import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSplit from './components/HeroSplit';
import StatsSection from './components/StatsSection';
import AboutDense from './components/AboutDense';
import BentoSkills from './components/BentoSkills';
import ExperienceDense from './components/ExperienceDense';
import Teaching from './components/Teaching';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Intro Animation */}
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}

      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Main Content */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Navbar />
            <HeroSplit />
            <StatsSection />
            <AboutDense />
            <BentoSkills />
            <ExperienceDense />
            <Teaching />
            <Projects />
            <PersonalProjects />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
