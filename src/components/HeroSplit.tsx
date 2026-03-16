import { motion } from 'framer-motion';
import { Download, Linkedin, Github, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/julienrose/', color: '#6B9B7F' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/LaNeigeLuge', color: '#B8956A' },
  { icon: Mail, label: 'Contact', href: 'https://www.linkedin.com/in/julienrose/', color: '#A8C5C0' },
];

const quickFacts = [
  { label: 'Location', value: 'Paris, France', emoji: '📍', color: '#D4A574' },
  { label: 'Heritage', value: 'French & Brazilian', emoji: '🌍', color: '#6B9B7F' },
  { label: 'Role', value: 'Cloud & IoT Architect', emoji: '💼', color: '#B8956A' },
  { label: 'Teaching', value: 'ESILV Lecturer', emoji: '🎓', color: '#A8C5C0' },
];

export default function HeroSplit() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 relative">
      <div className="container mx-auto max-w-7xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT: Bio + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#6B9B7F' }}>
              Who am I?
            </h2>

            <p className="text-lg md:text-xl leading-relaxed text-white/90">
              <strong style={{ color: '#D4A574' }}>IoT engineer by training</strong>,{' '}
              <strong style={{ color: '#6B9B7F' }}>cloud architect by passion</strong>, and{' '}
              <strong style={{ color: '#A8C5C0' }}>lecturer by calling</strong>.
              I build scalable event-driven systems that connect the physical and digital worlds.
            </p>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-3">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="glass p-4 rounded-xl"
                  style={{ borderLeft: `4px solid ${fact.color}` }}
                >
                  <div className="text-2xl mb-1">{fact.emoji}</div>
                  <div className="text-xs font-medium text-white/50">{fact.label}</div>
                  <div className="text-sm font-bold text-white/90">{fact.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/src/assets/cv.pdf"
              download="Julien_Rose_CV.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all self-start"
              style={{ backgroundColor: '#6B9B7F' }}
              whileHover={{ scale: 1.05, backgroundColor: '#8BAA93' }}
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* RIGHT: Photo + Name + Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.img
              src="/src/assets/profile.jpg"
              alt="Julien Rosé"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl mb-6"
              style={{ border: '6px solid #6B9B7F' }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            />

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-2"
              style={{ color: '#6B9B7F', fontFamily: 'Syne, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Julien Rosé
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-6"
              style={{ color: '#B8956A' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Backend Cloud & IoT Architect
            </motion.p>

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
                    delay: 0.6 + index * 0.1,
                    type: 'spring'
                  }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center glass"
                  style={{ color: social.color }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
