import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const teachingHighlights = [
  {
    icon: GraduationCap,
    title: 'ESILV Engineering School',
    description: 'Lecturer & Intervenant pédagogique',
  },
  {
    icon: Users,
    title: 'M1/M2 Students',
    description: 'Master\'s level engineering students',
  },
  {
    icon: BookOpen,
    title: 'Course Creation',
    description: 'Cloud, IoT & Backend Engineering curriculum',
  },
  {
    icon: Award,
    title: 'Hands-on Projects',
    description: 'Real-world project evaluation & mentoring',
  },
];

export default function Teaching() {
  return (
    <section id="teaching" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="Sharing Knowledge & Inspiring Future Engineers">
          Teaching
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard green className="p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-accent/20">
                <GraduationCap className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">ESILV</h3>
                <p className="text-lg text-white/80">
                  École Supérieure d'Ingénieurs Léonard de Vinci
                </p>
              </div>
            </div>

            <p className="text-lg text-white/70 leading-relaxed mb-8">
              As a lecturer at ESILV, I teach Master's level engineering students the
              practical skills they need to build modern cloud and IoT systems. My courses
              emphasize hands-on learning, real-world architectures, and industry best
              practices. I believe the best way to learn is by building, so my students
              work on projects that mirror real production challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachingHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass p-4 rounded-xl flex items-start gap-3"
                >
                  <highlight.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-white/60">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
