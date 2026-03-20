import { motion } from 'framer-motion';
import { Download, ChevronDown, Linkedin, Github, Mail } from 'lucide-react';
import GlassCard from './GlassCard';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/julienrose/', color: '#6B9B7F', isExternal: true },
  { icon: Github, label: 'GitHub', href: 'https://github.com/LaNeigeLuge', color: '#B8956A', isExternal: true },
  { icon: Mail, label: 'Contact', href: '#', color: '#A8C5C0', isExternal: false, tooltip: 'corto.rose@gmail.com\n+33 7 81 44 62 29' },
];

export default function Hero() {
  const scrollToWork = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <GlassCard className="p-2 animate-float">
              <div className="relative">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Julien Rosé"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover glow-ring"
                />
              </div>
            </GlassCard>

            {/* Social Links under photo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-3 justify-center mt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <motion.a
                    href={social.href}
                    target={social.isExternal ? "_blank" : undefined}
                    rel={social.isExternal ? "noopener noreferrer" : undefined}
                    onClick={!social.isExternal ? (e) => e.preventDefault() : undefined}
                    whileHover={{ scale: 1.15, y: -2 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center glass glass-hover"
                    style={{ color: social.color }}
                  >
                    <social.icon size={20} />
                  </motion.a>

                  {/* Tooltip for contact info */}
                  {social.tooltip && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                      <div
                        className="px-4 py-2 rounded-lg shadow-xl backdrop-blur-md whitespace-pre-line text-center"
                        style={{
                          backgroundColor: 'rgba(139, 170, 147, 0.95)',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: '500'
                        }}
                      >
                        {social.tooltip}
                      </div>
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-8 border-transparent"
                        style={{ borderTopColor: 'rgba(139, 170, 147, 0.95)' }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 glow-text"
          >
            Julien Rosé
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl font-syne font-semibold mb-4 text-accent"
          >
            Backend Cloud Engineer & IoT Architect
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl mb-12 text-white/70 max-w-2xl mx-auto"
          >
            French · Brazilian · Paris · Cloud Architecture · IoT Systems · Lecturer
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToWork}
              className="glass-hover px-8 py-4 rounded-full font-medium bg-accent text-black hover:bg-accent-light transition-all flex items-center gap-2 group"
            >
              See my work
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </button>

            <a
              href="/src/assets/cv.pdf"
              download="Julien_Rose_CV.pdf"
              className="glass glass-hover px-8 py-4 rounded-full font-medium text-white hover:text-accent transition-all flex items-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent/50 cursor-pointer"
          onClick={scrollToWork}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
