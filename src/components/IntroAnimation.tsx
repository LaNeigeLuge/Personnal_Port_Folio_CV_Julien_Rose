import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Linkedin, Github, Mail, X } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/julienrose/', color: '#6B9B7F' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/LaNeigeLuge', color: '#B8956A' },
  { icon: Mail, label: 'Contact', href: 'https://www.linkedin.com/in/julienrose/', color: '#A8C5C0' },
];

const quickFacts = [
  { label: 'Location', value: 'Paris 🇫🇷', emoji: '📍', color: '#D4A574' },
  { label: 'Heritage', value: 'French & Brazilian', emoji: '🌍', color: '#6B9B7F' },
  { label: 'Experience', value: '4+ Years', emoji: '💼', color: '#B8956A' },
  { label: 'Students', value: '100+ Taught', emoji: '🎓', color: '#A8C5C0' },
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
      setTimeout(() => setStage(1), 800),    // Start with horizontal image
      setTimeout(() => setStage(2), 3000),   // Rotate to vertical (slower!)
      setTimeout(() => setStage(3), 6500),   // Blur and show name/photo
      setTimeout(() => setStage(4), 9500),   // Split to left/right
      setTimeout(() => setStage(5), 12000),  // Show full content
      setTimeout(() => onComplete(), 15000), // Complete after 15s total
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
        exit={{ opacity: 0 }}
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

        {/* Stage 1-2: Horizontal image rotating to vertical */}
        {stage < 3 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.div
              className="relative shadow-2xl"
              initial={{ rotate: 180, width: '70vw', height: '40vh' }}
              animate={stage >= 2 ? {
                rotate: 270,
                width: '40vh',
                height: '70vh',
              } : {}}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
              style={{
                backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '12px',
                border: '8px solid #F5F1E8',
              }}
            />
          </motion.div>
        )}

        {/* Stage 3: Blur and show name + photo centered */}
        {stage === 3 && (
          <motion.div className="absolute inset-0 flex items-center justify-center">
            {/* Blurred background */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, filter: 'blur(0px)' }}
              animate={{ opacity: 1, filter: 'blur(20px)' }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(245, 241, 232, 0.7)' }} />

            {/* Name and Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
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
                  background: 'linear-gradient(135deg, #6B9B7F 0%, #B8956A 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Julien Rosé
              </motion.h1>
            </motion.div>
          </motion.div>
        )}

        {/* Stage 4: Split to left/right */}
        {stage >= 4 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {/* Blurred background - darker! */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/src/assets/parallax-bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px)',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(10, 15, 10, 0.75)' }} />

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
                      color: '#6B9B7F'
                    }}
                  >
                    Who am I?
                  </motion.h2>

                  <motion.p
                    className="text-lg leading-relaxed"
                    style={{ color: '#4A4A4A' }}
                  >
                    <strong style={{ color: '#B8956A' }}>IoT engineer by training</strong>,
                    <strong style={{ color: '#6B9B7F' }}> cloud architect by passion</strong>, and
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
                        <div className="text-2xl mb-1">{fact.emoji}</div>
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
                      color: '#6B9B7F'
                    }}
                  >
                    Julien Rosé
                  </motion.h1>

                  <p className="text-lg mb-6" style={{ color: '#B8956A' }}>
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
