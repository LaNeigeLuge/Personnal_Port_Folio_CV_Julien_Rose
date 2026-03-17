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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Logos Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
        {companies.map((company, index) => {
          const isActive = index === activeIndex;
          const isHovered = index === hoveredIndex;

          return (
            <motion.div
              key={company.name}
              className="relative group cursor-pointer"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative rounded-2xl p-4 md:p-6 aspect-square flex items-center justify-center overflow-hidden"
                style={{
                  background: isActive || isHovered
                    ? 'rgba(107, 155, 127, 0.15)'
                    : 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: isActive
                    ? '2px solid #6B9B7F'
                    : '1px solid rgba(255, 255, 255, 0.1)',
                }}
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
              >
                {/* Glow effect */}
                {isActive && (
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(107, 155, 127, 0.4) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                {/* Logo */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-full h-full object-contain"
                      style={{
                        filter: isActive || isHovered ? 'none' : 'grayscale(100%) opacity(0.6)',
                        transition: 'filter 0.3s ease',
                      }}
                    />
                  ) : (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                      style={{
                        background: 'linear-gradient(135deg, #6B9B7F 0%, #8BAA93 100%)',
                      }}
                    >
                      {company.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 rounded-full"
                    style={{ width: '60%', backgroundColor: '#6B9B7F' }}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>

              {/* Tooltip on hover */}
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium px-2 py-1 rounded"
                  style={{
                    backgroundColor: '#6B9B7F',
                    color: 'white',
                  }}
                >
                  {company.name}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Company Details Card */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div
          className="rounded-2xl p-8 max-w-3xl mx-auto backdrop-blur-xl"
          style={{
            background: 'rgba(107, 155, 127, 0.1)',
            border: '1px solid rgba(107, 155, 127, 0.3)',
          }}
        >
          <div className="flex items-start gap-6">
            {/* Large Logo */}
            <div className="hidden md:block w-24 h-24 rounded-xl bg-white/10 backdrop-blur-sm flex-shrink-0 p-3 overflow-hidden">
              {companies[activeIndex].logo ? (
                <img
                  src={companies[activeIndex].logo}
                  alt={companies[activeIndex].name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div
                  className="w-full h-full rounded-lg flex items-center justify-center text-3xl font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #6B9B7F 0%, #8BAA93 100%)',
                  }}
                >
                  {companies[activeIndex].name.charAt(0)}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{ color: '#8BAA93', fontFamily: 'Syne, sans-serif' }}
              >
                {companies[activeIndex].name}
              </h3>
              <p className="text-lg text-white/90 mb-2">{companies[activeIndex].role}</p>
              <p className="text-sm" style={{ color: '#D4A574' }}>
                {companies[activeIndex].period}
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6 flex gap-1">
            {companies.map((_, index) => (
              <motion.div
                key={index}
                className="h-1 flex-1 rounded-full cursor-pointer"
                style={{
                  backgroundColor: index === activeIndex ? '#6B9B7F' : 'rgba(255, 255, 255, 0.2)',
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scaleY: 1.5 }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
