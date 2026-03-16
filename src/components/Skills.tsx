import { motion } from 'framer-motion';
import { Cloud, Cpu, Code, Terminal, GraduationCap } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud & AWS',
    skills: ['AWS IoT Core', 'Lambda', 'S3', 'EC2', 'RDS', 'CloudWatch'],
  },
  {
    icon: Cpu,
    title: 'IoT & Embedded',
    skills: ['MQTT', 'RabbitMQ', 'Advantech ECU', 'INVERS OneAPI', 'Vehicle Telematics'],
  },
  {
    icon: Code,
    title: 'Backend & APIs',
    skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Event-Driven Architecture'],
  },
  {
    icon: Terminal,
    title: 'DevOps & Tools',
    skills: ['Docker', 'Terraform', 'Git', 'CI/CD', 'Linux'],
  },
  {
    icon: GraduationCap,
    title: 'Teaching',
    skills: ['Cloud Architecture', 'IoT Systems', 'Backend Engineering', 'Project Evaluation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionTitle subtitle="Technologies & Expertise">Skills</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <GlassCard hover className="p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
