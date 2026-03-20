import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'corto.rose@gmail.com',
    href: 'mailto:corto.rose@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/julienrose',
    href: 'https://www.linkedin.com/in/julienrose/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/LaNeigeLuge',
    href: 'https://github.com/LaNeigeLuge',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 min-h-screen flex items-center">
      <div className="container mx-auto max-w-4xl">
        <SectionTitle subtitle="Let's Build Something Together">
          Get In Touch
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-center text-white/80 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, exciting projects,
              or just connecting with fellow engineers and builders. Whether you need cloud
              architecture advice, IoT expertise, or want to discuss teaching opportunities,
              feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass glass-hover p-6 rounded-xl flex flex-col items-center text-center gap-3 group"
                >
                  <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <link.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-bold mb-1">{link.label}</div>
                    <div className="text-sm text-white/60 group-hover:text-accent-light transition-colors">
                      {link.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-white/50 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            Built with <Heart size={14} className="text-accent inline" /> by Julien Rosé
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
