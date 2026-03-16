import { motion } from 'framer-motion';
import { Building2, Code, GraduationCap, Briefcase } from 'lucide-react';
import GlassCard from './GlassCard';

const stats = [
  {
    icon: Briefcase,
    value: '4+',
    label: 'Years Experience',
    sublabel: 'Cloud & IoT Engineering'
  },
  {
    icon: Building2,
    value: '6',
    label: 'Companies',
    sublabel: 'Circle, Smile, GRDF, Renault, ESILV, CY Tech'
  },
  {
    icon: Code,
    value: '20+',
    label: 'Technologies',
    sublabel: 'AWS, IoT, Python, Node.js, Docker...'
  },
  {
    icon: GraduationCap,
    value: '100+',
    label: 'Students Taught',
    sublabel: 'M1/M2 Engineering at ESILV'
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard hover className="p-6 text-center h-full">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-white mb-1">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sublabel}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
