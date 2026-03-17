import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, X, MapPin, Globe, Briefcase, GraduationCap } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/julienrose/', color: '#6B9B7F' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/LaNeigeLuge', color: '#B8956A' },
  { icon: Mail, label: 'Contact', href: 'https://www.linkedin.com/in/julienrose/', color: '#A8C5C0' },
];

const quickFacts = [
  { label: 'Location', value: 'Paris, France', icon: MapPin, color: '#D4A574' },
  { label: 'Heritage', value: 'French & Brazilian', icon: Globe, color: '#6B9B7F' },
  { label: 'Experience', value: '4+ Years', icon: Briefcase, color: '#B8956A' },
  { label: 'Students', value: '100+ Taught', icon: GraduationCap, color: '#A8C5C0' },
];

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [stage, setStage] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (isSkipped) {
      onComplete();
      return;
    }

    const timers = [
      setTimeout(() => setStage(1), 300),    // Start with horizontal image (DELAY 1: adjust this)
      setTimeout(() => setStage(2), 1200),   // Rotate to vertical (DELAY 2: adjust this - gap is 900ms)
      setTimeout(() => setStage(3), 3500),   // Blur and show name/photo (DELAY 3: gap is 1500ms = rotation duration)
      setTimeout(() => setStage(4), 5000),   // Split to left/right (DELAY 4: gap is 1000ms)
      setTimeout(() => setStage(5), 6000),   // Show full content (DELAY 5: gap is 1000ms)
      setTimeout(() => onComplete(), 12000),  // Complete (DELAY 6: gap is 1000ms before fade)
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete, isSkipped]);

  const handleSkip = () => {
    setIsSkipped(true);
  };

  if (isSkipped || stage >= 5) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #F5F1E8 0%, #E8DCC8 50%, #F5F1E8 100%)',
        }}
      >
        {/* Paper texture overlay */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Skip button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={handleSkip}
          className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all flex items-center gap-2 group"
          style={{ color: '#6B9B7F' }}
        >
          <span className="text-sm font-medium">Skip Intro</span>
          <X size={16} className="group-hover:rotate-90 transition-transform" />
        </motion.button>

        {/* Stage 1-2-3: Horizontal image rotating to vertical then zooming */}
        {stage < 4 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ rotate: 90 }}
              animate={
                stage >= 3 ? { rotate: 0, scale: 2.5 } :
                stage >= 2 ? { rotate: 0, scale: 1 } :
                { rotate: 90, scale: 1 }
              }
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
              }}
            />
          </motion.div>
        )}

        {/* Stage 3: Show name + photo ON the zoomed image (no separate background) */}
        {stage === 3 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Darker overlay for readability */}
            <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 10, 0.4)' }} />

            {/* Name and Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="relative z-10 text-center"
            >
              <motion.img
                src="/src/assets/profile.jpg"
                alt="Julien Rosé"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-2xl"
                style={{ border: '4px solid #6B9B7F' }}
              />
              <motion.h1
                className="text-5xl font-bold"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  color: '#F5F1E8',
                }}
              >
                Julien Rosé
              </motion.h1>
            </motion.div>
          </motion.div>
        )}

        {/* Stage 4: Split to left/right - background gets much darker */}
        {stage >= 4 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Keep the zoomed background but make it darker */}
            <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 10, 0.85)' }} />

            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT: Who am I - Dynamic & Creative */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="space-y-6"
                >
                  <motion.h2
                    className="text-4xl font-bold mb-6"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: '#8BAA93'
                    }}
                  >
                    Who am I?
                  </motion.h2>

                  <motion.p
                    className="text-lg leading-relaxed"
                    style={{ color: '#E8DCC8' }}
                  >
                    <strong style={{ color: '#D4A574' }}>IoT engineer by training</strong>,
                    <strong style={{ color: '#8BAA93' }}> cloud architect by passion</strong>, and
                    <strong style={{ color: '#A8C5C0' }}> lecturer by calling</strong>.
                    I build scalable event-driven systems that connect the physical and digital worlds.
                  </motion.p>

                  {/* Quick Facts - Creative Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {quickFacts.map((fact, index) => (
                      <motion.div
                        key={fact.label}
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.1,
                          type: 'spring',
                          stiffness: 200
                        }}
                        className="p-4 rounded-xl shadow-lg backdrop-blur-sm"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          borderLeft: `4px solid ${fact.color}`
                        }}
                      >
                        <fact.icon size={20} style={{ color: fact.color, marginBottom: '4px' }} />
                        <div className="text-xs font-medium" style={{ color: '#999' }}>
                          {fact.label}
                        </div>
                        <div className="text-sm font-bold" style={{ color: fact.color }}>
                          {fact.value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* RIGHT: Photo + Social Media */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  className="flex flex-col items-center justify-center"
                >
                  <motion.img
                    src="/src/assets/profile.jpg"
                    alt="Julien Rosé"
                    className="w-48 h-48 rounded-full object-cover shadow-2xl mb-6"
                    style={{ border: '6px solid #6B9B7F' }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  />

                  <motion.h1
                    className="text-4xl font-bold mb-2"
                    style={{
                      fontFamily: 'Syne, sans-serif',
                      color: '#8BAA93'
                    }}
                  >
                    Julien Rosé
                  </motion.h1>

                  <p className="text-lg mb-6" style={{ color: '#D4A574' }}>
                    Backend Cloud & IoT Architect
                  </p>

                  {/* Social Media Links */}
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + index * 0.1,
                          type: 'spring'
                        }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          color: social.color
                        }}
                      >
                        <social.icon size={24} />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
