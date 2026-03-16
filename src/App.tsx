import { useState } from 'react';
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
      <div className="relative z-10">
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
      </div>
    </>
  );
}

export default App;
