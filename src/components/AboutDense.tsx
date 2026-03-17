import { motion } from 'framer-motion';
import { MapPin, Languages, Briefcase, GraduationCap } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';
import CompanyCarousel from './CompanyCarousel';

const quickFacts = [
  { icon: MapPin, label: 'Location', value: 'Paris, France' },
  { icon: Languages, label: 'Languages', value: 'French, Portuguese, English' },
  { icon: Briefcase, label: 'Current', value: 'Circle Mobility + ESILV' },
  { icon: GraduationCap, label: 'Education', value: 'CY Tech Engineering' },
];

const timeline = [
  { year: '2024-Now', event: 'Backend Cloud & IoT Architect @ Circle Mobility' },
  { year: '2024-Now', event: 'Lecturer @ ESILV Engineering School' },
  { year: '2021-2024', event: 'IoT R&D Engineer @ Smile (GRDF Platform)' },
  { year: '2021', event: 'Development Engineer Intern @ Renault' },
  { year: '2018-2021', event: 'Engineering Degree @ CY Tech' },
];

export default function AboutDense() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle>About Me</SectionTitle>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Left: Bio + Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent">Who I Am</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                IoT engineer by training, backend and cloud architect by passion, and
                lecturer by calling. I work across the entire platform lifecycle—from cloud
                architecture and network security to production deployment. As a tech lead,
                I drive technical decisions, facilitate workshops, present at trade shows,
                and deliver compelling client demonstrations.
              </p>

              {/* Quick Facts Grid */}
              <div className="grid grid-cols-2 gap-3">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-start gap-2 p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <fact.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs text-white/50 mb-0.5">{fact.label}</div>
                      <div className="text-sm font-medium text-white/90 truncate">
                        {fact.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Right: Career Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-accent">Career Timeline</h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group hover:bg-white/5 p-3 rounded-lg transition-all"
                  >
                    <div className="text-accent-light font-bold text-sm min-w-[80px] pt-0.5">
                      {item.year}
                    </div>
                    <div className="text-white/80 text-sm leading-relaxed group-hover:text-white transition-colors">
                      {item.event}
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Company Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-white/90">
            I Worked with
          </h3>
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
