import { motion } from 'framer-motion';
import { Sparkles, Heart, Lightbulb, Code } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';
import CompanyCarousel from './CompanyCarousel';

const badges = [
  { icon: Code, label: 'Builder', color: 'text-accent' },
  { icon: Heart, label: 'Teacher', color: 'text-accent-light' },
  { icon: Sparkles, label: 'IoT Nerd', color: 'text-accent' },
  { icon: Lightbulb, label: 'Always Curious', color: 'text-accent-dark' },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle>About Me</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-white/80 mb-8">
              IoT engineer by training, backend and cloud architect by passion, and
              lecturer by calling. I work across the entire platform lifecycle—from cloud
              architecture and network security to production deployment. As a tech lead,
              I drive technical decisions, facilitate workshops, present at trade shows,
              and deliver compelling client demonstrations. When I'm not architecting
              serverless AWS infrastructures or integrating vehicle telematics systems,
              you'll find me in the classroom at ESILV, inspiring the next generation
              of engineers.
            </p>

            {/* Personality Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard
                    hover
                    className="p-4 flex flex-col items-center text-center gap-3"
                  >
                    <badge.icon className={`${badge.color} w-8 h-8`} />
                    <span className="font-medium text-sm">{badge.label}</span>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Company Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-white/90">
            Trusted by Leading Organizations
          </h3>
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
