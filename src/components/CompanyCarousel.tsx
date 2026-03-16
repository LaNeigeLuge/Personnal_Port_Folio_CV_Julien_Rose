import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const companies = [
  {
    name: 'Circle Mobility',
    logo: '/src/assets/circle.jpg',
    role: 'Backend Cloud & IoT Architect',
    period: 'Dec 2024 - Present',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'ESILV',
    logo: '/src/assets/esilv.jpg',
    role: 'Lecturer · Cloud, IoT & Networks',
    period: 'Jan 2024 - Present',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Smile',
    logo: '/src/assets/smile.png',
    role: 'IoT R&D Engineer for GRDF',
    period: '2021 - 2024',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'GRDF',
    logo: '/src/assets/grdf.png',
    role: 'Industrial IoT Platform',
    period: '2021 - 2024 (via Smile)',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Renault',
    logo: null,
    role: 'Development Engineer Intern',
    period: 'Apr - Oct 2021',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'CY Tech',
    logo: '/src/assets/cytech.png',
    role: 'Graduate Engineering School',
    period: '2018 - 2021',
    color: 'from-blue-400 to-blue-600'
  },
];

export default function CompanyCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="relative overflow-hidden py-8">
      <motion.div
        className="flex gap-4 md:gap-6 justify-center items-center flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {companies.map((company, index) => {
          const isActive = index === activeIndex;
          const distance = Math.abs(index - activeIndex);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.8 : 0.5;
          const scale = distance === 0 ? 1.15 : distance === 1 ? 0.95 : 0.8;

          return (
            <motion.div
              key={company.name}
              animate={{
                scale,
                opacity,
              }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.div
                className={`relative overflow-hidden rounded-2xl p-4 flex flex-col items-center gap-3 min-w-[100px] md:min-w-[120px] cursor-pointer ${
                  isActive ? 'glass-green' : 'glass'
                }`}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  boxShadow: '0 20px 60px rgba(74, 222, 128, 0.3)'
                }}
                onClick={() => setActiveIndex(index)}
                onMouseMove={handleMouseMove}
              >
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(74, 222, 128, 0.2), transparent 60%)`,
                  }}
                />

                {/* Logo */}
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-white/10">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${company.color} flex items-center justify-center text-2xl font-bold text-white`}>
                      {company.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Company name */}
                <span
                  className={`relative z-10 text-xs md:text-sm font-medium text-center transition-colors ${
                    isActive ? 'text-accent' : 'text-white/70'
                  }`}
                >
                  {company.name}
                </span>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCompany"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent shadow-lg shadow-accent/50"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Company info display with expand animation */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20, height: 0 }}
        animate={{ opacity: 1, y: 0, height: 'auto' }}
        exit={{ opacity: 0, y: -20, height: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8"
      >
        <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-accent mb-2">{companies[activeIndex].name}</h3>
          <p className="text-white/90 mb-1">{companies[activeIndex].role}</p>
          <p className="text-sm text-accent-light">{companies[activeIndex].period}</p>
        </div>
      </motion.div>
    </div>
  );
}
