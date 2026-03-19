import { motion } from 'framer-motion';
import { Cloud, Users, Wifi } from 'lucide-react';
import GlassCard from './GlassCard';
import SectionTitle from './SectionTitle';
import CompanyCarousel from './CompanyCarousel';
import ColorfulText from './ColorfulText';

const bioText = `A Backend Cloud & IoT Engineer with 4+ years of experience building scalable, event-driven platforms that connect the physical and digital worlds. My work spans cloud architecture, IoT protocols, and full-stack development, which has shaped how I think about building resilient distributed systems.

Currently, I work at Circle Mobility as a Backend Cloud & IoT Architect, where I focus on building connected vehicle platforms and real-time data processing systems. I also lecture at ESILV Engineering School, teaching Cloud IoT and AWS to M1/M2 students.

Before now, I was an IoT R&D Engineer at Smile (2021-2024), where I built an industrial IoT platform for GRDF—France's largest gas distribution network.

If you have a question, project proposal, or just want to connect, feel free to reach out.`;

const expertiseBlocks = [
  {
    title: 'Cloud & Backend',
    icon: Cloud,
    description: 'Serverless architectures, IaC, and event-driven backend systems with Python',
    color: '#6B9B7F',
    technologies: [
      'Python 3.12', 'SQLAlchemy', 'FastAPI', 'Terraform', 'AWS Lambda', 'API Gateway',
      'Aurora PostgreSQL', 'DynamoDB', 'S3', 'EventBridge', 'CloudWatch', 'Cognito',
      'CloudFront', 'SES', 'VPC', 'ECS', 'IAM', 'Secrets Manager', 'RabbitMQ',
      'Docker', 'GitLab CI/CD', 'Metabase', 'MongoDB'
    ],
  },
  {
    title: 'IoT & Embedded',
    icon: Wifi,
    description: 'Expertise in IoT platforms, edge computing, and real-time data processing systems',
    color: '#D4A574',
    technologies: ['IoT Core', 'MQTT', 'AMQP', 'Telematic integration', 'LORA', '5G-Certified', 'Sensors', 'ESP32', 'Raspberry Pi'],
  },
  {
    title: 'Tech Lead & Product',
    icon: Users,
    description: 'Leading technical teams, client workshops, product definition, and business strategy',
    color: '#A8C5C0',
    technologies: ['Team Management', 'Workshops', 'Client Demos', 'Product Strategy', 'Agile'],
  },
];

export default function AboutRedesign() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle>My Expertise</SectionTitle>

        {/* Two Column Layout: Bio + 3 Expertise Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

          {/* LEFT: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <GlassCard className="p-8 h-full relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                {bioText.split('\n\n').map((paragraph, index) => (
                  <ColorfulText
                    key={index}
                    text={paragraph}
                    className="text-base md:text-lg"
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* RIGHT: 3 Expertise Blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {expertiseBlocks.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard hover className="p-6">
                  {/* Header with Icon */}
                  <div className="flex items-start gap-4 mb-3">
                    <div
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${block.color}20` }}
                    >
                      <block.icon size={24} style={{ color: block.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2" style={{ color: block.color }}>
                        {block.title}
                      </h4>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  </div>

                  {/* Technologies Pills */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {block.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full font-medium"
                        style={{
                          backgroundColor: `${block.color}15`,
                          color: block.color,
                          border: `1px solid ${block.color}40`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* AWS Certification Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div
            className="max-w-md mx-auto rounded-2xl p-4 backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.15) 0%, rgba(107, 155, 127, 0.15) 100%)',
              border: '1px solid rgba(212, 165, 116, 0.3)',
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(212, 165, 116, 0.2)' }}
              >
                <img
                  src="/src/assets/aws-solutions-architect.webp"
                  alt="AWS"
                  className="w-12 h-12 object-contain"
                  style={{
                    filter: 'sepia(100%) saturate(400%) hue-rotate(20deg) brightness(1.2)',
                  }}
                />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-bold" style={{ color: '#D4A574' }}>
                  AWS Solutions Architect
                </h4>
                <p className="text-sm text-white/70">
                  Certified Associate · Amazon Web Services
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Company Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-6" style={{ color: '#8BAA93' }}>
            I Worked With
          </h3>
          <CompanyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
