import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const personalProjects = [
  {
    title: 'Study Project 1',
    description: 'Personal engineering project from my studies. Details and images coming soon!',
    imagePlaceholder: true,
    tags: ['IoT', 'Embedded', 'Hardware'],
  },
  {
    title: 'Study Project 2',
    description: 'Another exciting project from my engineering curriculum. Images will be added shortly.',
    imagePlaceholder: true,
    tags: ['Cloud', 'Backend', 'AWS'],
  },
  {
    title: 'Study Project 3',
    description: 'Innovative solution developed during my academic journey. Documentation in progress.',
    imagePlaceholder: true,
    tags: ['Networks', 'IoT', 'Python'],
  },
];

export default function PersonalProjects() {
  return (
    <section id="personal-projects" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle >
          Projects
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-0 overflow-hidden h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent-dark/10 flex items-center justify-center border-b border-white/10">
                  {project.imagePlaceholder ? (
                    <div className="flex flex-col items-center gap-3 text-white/40">
                      <ImageIcon size={48} />
                      <span className="text-sm">Image coming soon</span>
                    </div>
                  ) : (
                    <img
                      src={`/src/assets/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-4 flex-grow text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-accent/10 border border-accent/30 text-accent-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 text-white/50 text-sm italic"
        >
          📸 Project images will be added soon. Drop your project photos in{' '}
          <code className="text-accent-light">src/assets/projects/</code>
        </motion.p>
      </div>
    </section>
  );
}
