import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const experiences = [
  {
    company: 'Circle Mobility',
    role: 'Backend Cloud Engineer & IoT Architect',
    period: 'Dec 2024 – Present',
    highlights: [
      'Cloud architecture owner: Design and deployment of serverless AWS infrastructure (API Gateway, Aurora Serverless RDS, CloudFront, EventBridge, Amazon MQ)',
      'Technical leadership: Drive architectural decisions, facilitate workshops, present at trade shows and deliver client demonstrations',
      'IoT integration: Vehicle telematics and charging walls for real-time data and digital twin systems',
    ],
  },
  {
    company: 'Smile Open Source Solutions',
    role: 'IoT Research & Development Engineer',
    period: '2021 – 2024',
    subtitle: 'Industrial IoT platform for GRDF (now in production)',
    highlights: [
      'Backend development: Python and AWS microservices (Lambda, S3, DynamoDB) within a team of 15',
      'Architecture & integration: Ingestion and orchestration of multiple APIs integrating GRDF group services',
      'Real-time monitoring: Production supervision and incident management for critical infrastructure',
    ],
  },
  {
    company: 'Renault Group',
    role: 'Development Engineer Internship',
    period: 'Apr – Oct 2021',
    highlights: [
      'AWS cloud infrastructure deployment and optimization',
      'IoT project: Connected calendars for factory operations',
      'Microservices development using serverless architecture',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle subtitle="Professional Journey">Experience</SectionTitle>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-accent border-4 border-black glow-ring" />

                <GlassCard hover className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-accent mb-1">
                        {exp.company}
                      </h3>
                      <p className="text-lg font-medium text-white/90">{exp.role}</p>
                      {'subtitle' in exp && (
                        <p className="text-sm text-accent-light/70 mt-1 italic">
                          {exp.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="text-sm font-medium text-accent-light mt-2 md:mt-0 flex items-center gap-2">
                      <Briefcase size={16} />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, highlightIndex) => (
                      <motion.li
                        key={highlightIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.2 + highlightIndex * 0.1,
                        }}
                        className="flex items-start gap-3 text-white/70"
                      >
                        <span className="text-accent mt-1">▸</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
