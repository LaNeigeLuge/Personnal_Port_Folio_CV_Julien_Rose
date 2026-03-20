import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSplit from './components/HeroSplit';
import AboutRedesign from './components/AboutRedesign';
import ExperienceRedesign from './components/ExperienceRedesign';
import Teaching from './components/Teaching';
import Contact from './components/Contact';
import ParallaxBackground from './components/ParallaxBackground';
import IntroAnimation from './components/IntroAnimation';
import FloatingContact from './components/FloatingContact';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Intro Animation */}
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}

      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Floating Contact Button */}
      {introComplete && <FloatingContact />}

      {/* Main Content */}
      <AnimatePresence>
        {introComplete && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="relative z-10"
          >
            <Navbar />
            <HeroSplit />
            <AboutRedesign />
            <ExperienceRedesign />
            <Teaching />
            {/* <PersonalProjects /> */}
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
