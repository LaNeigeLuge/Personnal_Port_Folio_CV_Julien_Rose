import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, MapPin, Calendar, Code } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    company: 'Circle Mobility',
    role: 'Backend Cloud Engineer & IoT Architect',
    period: 'Dec 2024 – Present',
    location: 'Paris, France',
    type: 'Full-time',
    description: 'Leading cloud architecture and IoT integration for European vehicle sharing platform',
    achievements: [
      'Design and deployment of serverless AWS infrastructure (API Gateway, Aurora Serverless RDS, CloudFront, EventBridge, Amazon MQ)',
      'Drive architectural decisions and facilitate technical workshops',
      'Present at trade shows and deliver client demonstrations',
      'Integrate vehicle telematics and charging walls for real-time data and digital twin systems'
    ],
    tech: ['AWS IoT Core', 'Lambda', 'Aurora RDS', 'EventBridge', 'MQTT', 'CloudFront']
  },
  {
    company: 'Smile Open Source Solutions',
    role: 'IoT Research & Development Engineer',
    period: '2021 – 2024',
    location: 'Paris, France',
    type: 'Full-time',
    description: 'Industrial IoT platform for GRDF (now in production and actively used)',
    achievements: [
      'Backend development: Python and AWS microservices (Lambda, S3, DynamoDB) within a team of 15',
      'Architecture & integration: Ingestion and orchestration of multiple APIs integrating GRDF group services',
      'Real-time monitoring: Production supervision and incident management for critical infrastructure',
      'Agile methodology: Sprint planning, code reviews, and continuous delivery'
    ],
    tech: ['Python', 'AWS Lambda', 'S3', 'DynamoDB', 'MQTT', 'Docker', 'Git']
  },
  {
    company: 'Renault Group',
    role: 'Development Engineer Internship',
    period: 'Apr – Oct 2021',
    location: 'Guyancourt, France',
    type: 'Internship',
    description: 'Cloud infrastructure and IoT development for factory operations',
    achievements: [
      'AWS cloud infrastructure deployment and optimization',
      'IoT project: Connected calendars for factory operations',
      'Microservices development using serverless architecture',
      'Integration with existing enterprise systems'
    ],
    tech: ['AWS', 'IoT', 'Node.js', 'Serverless', 'Docker']
  },
];

export default function ExperienceDense() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First one expanded by default

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="Professional Journey">Experience</SectionTitle>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard
                  hover
                  className={`overflow-hidden transition-all duration-300 ${
                    isExpanded ? 'glass-green' : ''
                  }`}
                >
                  {/* Collapsed Header - Always Visible */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-xl md:text-2xl font-bold text-accent">
                          {exp.company}
                        </h3>
                        <span className="px-2 py-0.5 text-xs rounded-full bg-accent/20 text-accent-light">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-lg font-medium text-white/90 mb-2">{exp.role}</p>
                      <div className="flex flex-wrap gap-3 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-accent flex-shrink-0 mt-1"
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4 border-t border-white/10 pt-4">
                          {/* Description */}
                          <p className="text-white/70 italic">{exp.description}</p>

                          {/* Achievements */}
                          <div>
                            <h4 className="text-sm font-bold text-accent-light mb-2 flex items-center gap-2">
                              <span className="w-1 h-4 bg-accent-light rounded"></span>
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: i * 0.05 }}
                                  className="flex items-start gap-2 text-white/70 text-sm"
                                >
                                  <span className="text-accent mt-0.5">▸</span>
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h4 className="text-sm font-bold text-accent-light mb-2 flex items-center gap-2">
                              <Code size={16} />
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-1 text-xs rounded-md bg-accent/10 border border-accent/30 text-accent-light"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
