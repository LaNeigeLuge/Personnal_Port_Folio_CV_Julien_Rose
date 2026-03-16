import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const projects = [
  // TODO: Replace with real projects
  {
    title: 'IoT Fleet Management Platform',
    description: 'Real-time vehicle telematics dashboard with live tracking, diagnostics, and predictive maintenance alerts',
    tags: ['AWS IoT Core', 'MQTT', 'React', 'PostgreSQL'],
    github: '#',
    demo: '#',
    featured: true,
  },
  {
    title: 'Smart Home Automation Hub',
    description: 'Event-driven home automation system integrating multiple IoT protocols',
    tags: ['Node.js', 'RabbitMQ', 'Docker', 'Raspberry Pi'],
    github: '#',
  },
  {
    title: 'Coming Soon',
    description: 'Exciting new project in development. Stay tuned!',
    tags: ['Cloud', 'IoT', 'Serverless'],
    comingSoon: true,
  },
  {
    title: 'Coming Soon',
    description: 'Another amazing project on the way.',
    tags: ['AWS', 'Python', 'Edge Computing'],
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle subtitle="Things I've Built">Projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={project.featured ? 'md:col-span-2' : ''}
            >
              <GlassCard
                hover={!project.comingSoon}
                className={`p-6 md:p-8 h-full flex flex-col ${
                  project.comingSoon ? 'opacity-60' : ''
                }`}
              >
                {project.comingSoon && (
                  <div className="flex items-center gap-2 text-accent-light mb-3">
                    <Clock size={16} />
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-4 flex-grow">{project.description}</p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-accent/10 border border-accent/30 text-accent-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {!project.comingSoon && (
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent transition-colors"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
