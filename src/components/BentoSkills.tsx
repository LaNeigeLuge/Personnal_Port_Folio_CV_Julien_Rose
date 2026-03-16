import { motion } from 'framer-motion';
import { Cloud, Cpu, Code, Terminal, GraduationCap, Zap } from 'lucide-react';
import { useState } from 'react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    skills: ['AWS IoT Core', 'Lambda', 'S3', 'EC2', 'RDS', 'CloudWatch', 'API Gateway', 'EventBridge'],
    size: 'large', // 2x2
    description: 'Serverless architecture and cloud infrastructure design',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded',
    skills: ['MQTT', 'RabbitMQ', 'Advantech ECU', 'INVERS OneAPI', 'Vehicle Telematics'],
    size: 'medium', // 1x2
    description: 'Real-time device communication and telematics',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Code,
    title: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Event-Driven Architecture', 'Microservices'],
    size: 'large', // 2x2
    description: 'Scalable backend systems and API development',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Terminal,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Terraform', 'Git', 'CI/CD', 'Linux'],
    size: 'small', // 1x1
    description: 'Infrastructure as code and deployment automation',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: GraduationCap,
    title: 'Teaching',
    skills: ['Cloud Architecture', 'IoT Systems', 'Backend Engineering', 'Project Evaluation'],
    size: 'medium', // 2x1
    description: 'Lecturing at ESILV engineering school',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Zap,
    title: 'Tech Lead',
    skills: ['Architecture Decisions', 'Workshops', 'Trade Shows', 'Client Demos'],
    size: 'small', // 1x1
    description: 'Technical leadership and communication',
    color: 'from-yellow-500 to-amber-500'
  },
];

export default function BentoSkills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle subtitle="Technologies & Expertise">Skills</SectionTitle>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={getSizeClasses(category.size)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <GlassCard
                hover
                className={`h-full p-6 relative overflow-hidden group ${
                  hoveredIndex === index ? 'glass-green' : ''
                }`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${category.color}`}
                />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{category.title}</h3>
                  </div>

                  {/* Description - shown on larger cards or hover */}
                  {(category.size !== 'small' || hoveredIndex === index) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: category.size !== 'small' || hoveredIndex === index ? 1 : 0,
                        height: category.size !== 'small' || hoveredIndex === index ? 'auto' : 0
                      }}
                      className="text-sm text-white/60 mb-4"
                    >
                      {category.description}
                    </motion.p>
                  )}

                  {/* Skills pills */}
                  <div className="flex-1 flex flex-wrap gap-2 content-start overflow-hidden">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + skillIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-2 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="skillHover"
                      className="absolute inset-0 border-2 border-accent/50 rounded-2xl pointer-events-none"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
