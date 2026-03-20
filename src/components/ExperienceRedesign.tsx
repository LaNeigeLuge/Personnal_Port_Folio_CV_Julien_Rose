import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronRight, MapPin, Calendar, Code, Cloud, Box, Plug, GitBranch, TestTube, Database, Layers, Settings, Shield, Users } from 'lucide-react';
import SectionTitle from './SectionTitle';

// Achievement Categories Component with collapsible sections
function AchievementCategories({ categories }: { categories: any[] }) {
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0])); // First category expanded by default
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  // Color palette for each category
  const categoryColors = [
    '#6B9B7F', // Architecture & Design - emerald green
    '#D4A574', // Infrastructure & DevOps - golden amber
    '#7F9BA8', // Security & Monitoring - slate blue
    '#C5A8B0', // Leadership & Product - dusty rose
  ];

  return (
    <div className="space-y-3">
      {categories.map((cat, catIndex) => {
        const isExpanded = expandedCategories.has(catIndex);
        const isHovered = hoveredCategory === catIndex;
        const IconComponent = cat.icon;
        const categoryColor = categoryColors[catIndex] || '#8BAA93';

        return (
          <div key={catIndex}>
            {/* Category Header */}
            <motion.button
              onClick={() => toggleCategory(catIndex)}
              onMouseEnter={() => setHoveredCategory(catIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="w-full flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-300 cursor-pointer relative overflow-hidden"
              style={{
                backgroundColor: isExpanded
                  ? `${categoryColor}15`
                  : isHovered
                    ? `${categoryColor}10`
                    : 'transparent',
                borderLeft: isHovered || isExpanded ? `3px solid ${categoryColor}` : '3px solid transparent',
                transform: isHovered ? 'scale(1.02)' : 'scale(1)',
              }}
              whileHover={{ x: 4 }}
              animate={!isExpanded && catIndex > 0 ? {
                // Pulse animation for collapsed categories (except first one)
                scale: [1, 1.01, 1],
              } : {}}
              transition={{
                scale: { duration: 2, repeat: Infinity, repeatDelay: 3 },
              }}
            >
              {/* Chevron with bounce animation on hover */}
              <motion.div
                animate={{
                  rotate: isExpanded ? 90 : 0,
                  x: isHovered && !isExpanded ? [0, 2, 0] : 0
                }}
                transition={{
                  rotate: { duration: 0.2 },
                  x: { duration: 0.6, repeat: isHovered && !isExpanded ? Infinity : 0 }
                }}
              >
                <ChevronRight size={16} style={{ color: categoryColor }} />
              </motion.div>

              <IconComponent
                size={16}
                style={{
                  color: categoryColor,
                  filter: isHovered ? 'drop-shadow(0 0 4px currentColor)' : 'none',
                  transition: 'filter 0.3s'
                }}
              />

              <span className="text-sm font-bold" style={{ color: categoryColor }}>
                {cat.category}
              </span>

              <span
                className="text-xs ml-auto transition-colors duration-300"
                style={{
                  color: isHovered ? categoryColor : 'rgba(255, 255, 255, 0.4)'
                }}
              >
                ({cat.achievements.length})
              </span>
            </motion.button>

            {/* Category Achievements */}
            <AnimatePresence>
              {isExpanded && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 mt-2 ml-8 overflow-hidden"
                >
                  {cat.achievements.map((achievement: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-2 text-white/70 text-sm leading-relaxed"
                    >
                      <span style={{ color: '#8BAA93' }} className="mt-0.5">▸</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    company: 'Circle Mobility',
    logo: '/src/assets/circle.jpg',
    logoColor: 'pastel-purple', // Will apply purple tint
    role: 'Backend Cloud Engineer & IoT Architect',
    period: 'Dec 2024 - Present',
    location: 'Paris, France',
    type: 'Full-time',
    description: 'Leading serverless cloud architecture and IoT integration for European vehicle sharing platform',
    achievementCategories: [
      {
        category: 'Architecture & Design',
        icon: Layers,
        achievements: [
          'Domain-Driven Design applied to multi-tenant SaaS: bounded contexts, aggregates, and service boundaries in a vehicle fleet platform',
          'Event-driven system design: defining event schemas, ownership boundaries, and async communication patterns between microservices',
          'Technical architecture decision-making: ADR writing, trade-off analysis between synchronous vs asynchronous flows, and microservice deployment strategies',
          'Digital twin modeling for connected vehicles: defining real-time state representation from CAN bus and telematics events'
        ]
      },
      {
        category: 'Infrastructure & DevOps',
        icon: Settings,
        achievements: [
          'Design and deployment of serverless AWS infrastructure using Domain Driven Design and Event-Driven Architecture',
          'Infrastructure as Code: Terraform managing Lambda, API Gateway, Aurora PostgreSQL, EventBridge, CloudFront, SES, CloudWatch, VPC, ECS',
          'Vehicle telematics integration: RabbitMQ (AMQP), Invers API, Mapbox cartography for real-time tracking and digital twins',
          'CI/CD & DevOps: GitLab CI/CD pipelines, Docker multi-platform builds, SonarQube, Ruff, Pyright, Bandit, TFLint, Checkov',
          'Automated database snapshot/restore strategy for staging and production environments with pre-test and pre-release backup workflows',
          'Database design and optimization: PostgreSQL with SQLAlchemy ORM, complex joins, and performance tuning for real-time queries'
        ]
      },
      {
        category: 'Security & Monitoring',
        icon: Shield,
        achievements: [
          'Security & monitoring: AWS Secrets Manager, IAM, Session Manager, CloudWatch Logs, Metabase dashboards',
          'Network security: VPC isolation, security groups, private subnets, NAT gateways, and SSL/TLS encryption'
        ]
      },
      {
        category: 'Leadership & Product',
        icon: Users,
        achievements: [
          'Technical Product Owner: facilitation of business workshops, translation of operator requirements into functional and technical specifications',
          'Cross-functional collaboration with business stakeholders, operations teams, and external API providers',
          'Technical mentoring and onboarding: ramping up a frontend developer, supervising technical choices, and conducting code reviews'
        ]
      }
    ],
    techStack: {
      'Backend & Core': {
        icon: Code,
        color: '#6B9B7F',
        technologies: ['Python 3', 'Poetry', 'SQLAlchemy', 'Alembic', 'Psycopg']
      },
      'Cloud & AWS': {
        icon: Cloud,
        color: '#D4A574',
        technologies: ['AWS Lambda', 'API Gateway', 'Aurora PostgreSQL', 'Cognito', 'S3', 'CloudFront', 'SES', 'EventBridge', 'CloudWatch', 'VPC', 'ECS', 'ALB', 'Session Manager', 'Secrets Manager', 'IAM']
      },
      'Infrastructure': {
        icon: Box,
        color: '#A8C5C0',
        technologies: ['Terraform', 'Docker', 'EC2']
      },
      'API & Integration': {
        icon: Plug,
        color: '#8BAA93',
        technologies: ['OpenAPI', 'PyJWT', 'OAuthlib', 'OVH', 'RabbitMQ (AMQP)', 'Telematics API', 'Mapbox']
      },
      'CI/CD & DevOps': {
        icon: GitBranch,
        color: '#9B8B7F',
        technologies: ['GitLab CI/CD', 'Docker', 'GitLab Runner', 'Ruff', 'Pyright', 'Bandit', 'TFLint', 'Checkov', 'SonarQube', 'TruffleHog', 'yamllint']
      },
      'Testing & Analytics': {
        icon: TestTube,
        color: '#C5A8B0',
        technologies: ['Behave (BDD)', 'Metabase', 'CloudWatch']
      },
      'Data': {
        icon: Database,
        color: '#7F9BA8',
        technologies: ['PostgreSQL', 'PyYAML', 'JSON']
      }
    }
  },
  {
    company: 'ESILV',
    logo: '/src/assets/esilv.jpg',
    logoColor: 'pastel-pink',
    role: 'Lecturer - Cloud IoT / AWS IoT',
    period: 'Jan 2024 - Present',
    location: 'Paris, France',
    type: 'Part-time',
    description: 'Teaching Cloud IoT and AWS IoT to M1/M2 engineering students at ESILV Engineering School',
    achievements: [
      'Course design and delivery on Cloud IoT architecture and AWS IoT services',
      'Hands-on labs and practical workshops with AWS IoT Core, Lambda, and DynamoDB',
      'Mentoring students on cloud architecture and IoT projects',
      'Bridging academic theory with real-world industry practices'
    ],
    tech: ['AWS IoT Core', 'Cloud Architecture', 'Teaching', 'Mentoring', 'AWS Lambda']
  },
  {
    company: 'Smile Open Source Solutions',
    logo: '/src/assets/smile.png',
    logoColor: 'yellowish-orange', // Will apply orange tint
    role: 'IoT Research & Development Engineer',
    period: '2021 - 2024',
    location: 'Asnieres-sur-Seine, France',
    type: 'Full-time',
    description: 'Industrial IoT platform architecture on AWS for connected gas meter fleet management (now in production and actively used)',
    achievements: [
      'Backend development: Python and AWS microservices (Lambda, S3, DynamoDB) within a team of 15',
      'Architecture & integration: Ingestion and orchestration of multiple APIs integrating GRDF group services',
      'Real-time monitoring: Production supervision and incident management for critical infrastructure',
      'Agile methodology: Sprint planning, code reviews, and continuous delivery',
      'Real time telemetry data processing: Designed digital twin representation for connected gas meters handling telemetry events, remote operations, and FOTA updates with OpenSearch analytics'
    ],
    tech: ['Python', 'AWS Lambda', 'S3', 'DynamoDB', 'MQTT', 'Docker', 'Git', 'Angular', 'IoT Core', 'OpenSearch', '']
  },
  {
    company: 'LBDC - Les bequilles du cognitif',
    logo: '/src/assets/lbdc.jpeg',
    logoColor: 'blue',
    role: 'Fractional CTO',
    period: '2022 - 2024',
    location: 'Paris, France',
    type: 'Pro-bono',
    description: 'End-to-end digital solution bridging caregivers and dependent individuals (reduced mobility, disability) through continuous remote monitoring and communication.',
    achievements: [
      'Advised on technical stack and architectural choices for the application',
      'Acted as technical liaison between stakeholders and the development vendor, facilitating requirements discussions and progress reviews',
      'Conducted code reviews on the React Native codebase',
      'Defined product requirements and drafted functional specifications'
    ],
    tech: ['React Native', 'Agile', 'Firebase']
  },
  {
    company: 'Infotel',
    logo: '/src/assets/infotel.png',
    logoColor: 'blue',
    role: 'Development Engineer Internship',
    period: 'Apr - Oct 2021',
    location: 'Saint-Mande, France',
    type: 'Internship',
    description: 'End-of-study internship: Team management application with MEAN stack architecture and IoT integration',
    achievements: [
      'Full-stack team management application: UI/UX design and screen creation with Angular front-end',
      'Requirements gathering: specification documentation and client needs analysis',
      'Team leadership: managed 4 developers throughout the project lifecycle',
      'MEAN stack architecture design: MongoDB, Express.js, Angular, and Node.js implementation',
      'Database design: MongoDB schema creation and data migration strategies',
      'Product presentation and client demonstrations',
      'IoT project: Connected calendars integration',
      'Deployment to production: application successfully launched and used by end of internship'
    ],
    tech: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'MEAN Stack', 'UI/UX Design', 'Team Management', 'IoT']
  },
  {
    company: 'Renault Group',
    logo: '/src/assets/renault.svg',
    logoColor: 'yellow',
    role: 'Robotic Simulation Engineer Internship',
    period: 'Jul 2017 + 2018',
    location: 'Curitiba, Brazil',
    type: 'Internship',
    description: 'Robotic simulation for assembly lines at Renault do Brasil',
    achievements: [
      'Implementation of the new Kwid body assembly on the automated production line',
      'Robotic arm programming: coding, simulation, and debugging for body welding operations',
      'Assembly line management and optimization with ROBCAD and Project Simulate software',
      'Robotized production chain integration and validation',
      'International experience in Brazil working with production engineering teams'
    ],
    tech: ['ROBCAD', 'Project Simulate', 'Robotics', 'Automation', 'Manufacturing Engineering']
  },
];

const getLogoFilter = (colorName: string) => {
  switch (colorName) {
    case 'pastel-purple':
      return 'sepia(100%) saturate(300%) hue-rotate(240deg) brightness(1.3)';
    case 'pastel-pink':
      return 'sepia(100%) saturate(300%) hue-rotate(320deg) brightness(1.3)';
    case 'yellowish-orange':
      return 'sepia(100%) saturate(400%) hue-rotate(10deg) brightness(1.2)';
    case 'blue':
      return 'sepia(100%) saturate(300%) hue-rotate(180deg) brightness(1.2)';
    case 'yellow':
      return 'sepia(100%) saturate(500%) hue-rotate(30deg) brightness(1.3)';
    default:
      return 'none';
  }
};

export default function ExperienceRedesign() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionTitle subtitle="Professional Journey">Experience</SectionTitle>

        <div className="space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className="relative rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-300"
                  style={{
                    background: isExpanded
                      ? 'rgba(107, 155, 127, 0.12)'
                      : 'rgba(255, 255, 255, 0.05)',
                    border: isExpanded
                      ? '1px solid rgba(107, 155, 127, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-start gap-4 hover:bg-white/5 transition-colors"
                  >
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-12 h-12 object-contain"
                          style={{ filter: getLogoFilter(exp.logoColor) }}
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center text-2xl font-bold"
                          style={{
                            background: 'linear-gradient(135deg, #6B9B7F 0%, #8BAA93 100%)',
                            color: 'white',
                            filter: getLogoFilter(exp.logoColor),
                          }}
                        >
                          {exp.company.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3
                          className="text-xl md:text-2xl font-bold"
                          style={{ color: '#8BAA93', fontFamily: 'Syne, sans-serif' }}
                        >
                          {exp.company}
                        </h3>
                        <span
                          className="px-2 py-0.5 text-xs rounded-full font-medium"
                          style={{
                            backgroundColor: 'rgba(107, 155, 127, 0.2)',
                            color: '#8BAA93',
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-base md:text-lg font-medium text-white/90 mb-2">
                        {exp.role}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-white/60">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 mt-1"
                      style={{ color: '#8BAA93' }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 space-y-4 border-t border-white/10 pt-4">
                          {/* Description */}
                          <p className="text-white/70 italic leading-relaxed">
                            {exp.description}
                          </p>

                          {/* Achievements */}
                          <div>
                            <h4
                              className="text-sm font-bold mb-3 flex items-center gap-2"
                              style={{ color: '#8BAA93' }}
                            >
                              <span
                                className="w-1 h-4 rounded"
                                style={{ backgroundColor: '#8BAA93' }}
                              ></span>
                              Key Achievements
                            </h4>

                            {/* Categorized Achievements (if available) */}
                            {'achievementCategories' in exp && exp.achievementCategories ? (
                              <AchievementCategories categories={exp.achievementCategories} />
                            ) : (
                              /* Fallback for simple achievements array */
                              <ul className="space-y-2">
                                {'achievements' in exp && exp.achievements?.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    className="flex items-start gap-2 text-white/70 text-sm leading-relaxed"
                                  >
                                    <span style={{ color: '#8BAA93' }} className="mt-0.5">▸</span>
                                    <span>{achievement}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                          </div>

                          {/* Tech Stack */}
                          <div>
                            <h4
                              className="text-sm font-bold mb-3 flex items-center gap-2"
                              style={{ color: '#8BAA93' }}
                            >
                              <span>{'</>'}</span>
                              Tech Stack
                            </h4>

                            {/* Grid Layout for techStack object */}
                            {'techStack' in exp && exp.techStack ? (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {Object.entries(exp.techStack).map(([category, data]) => {
                                  const IconComponent = data.icon;
                                  const categoryColor = data.color || '#8BAA93';
                                  return (
                                    <motion.div
                                      key={category}
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="rounded-xl p-4"
                                      style={{
                                        backgroundColor: `${categoryColor}30`,
                                        border: `1px solid ${categoryColor}50`,
                                      }}
                                    >
                                      <div className="flex items-center gap-2 mb-3">
                                        <IconComponent size={16} style={{ color: categoryColor }} />
                                        <h5 className="text-xs font-bold" style={{ color: categoryColor }}>
                                          {category}
                                        </h5>
                                      </div>
                                      <div className="flex flex-wrap gap-1.5">
                                        {data.technologies.map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-2 py-0.5 text-xs rounded font-medium"
                                            style={{
                                              backgroundColor: `${categoryColor}80`,
                                              border: `1px solid ${categoryColor}90`,
                                              color: 'rgba(253, 234, 234, 0.85)',
                                            }}
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>
                            ) : (
                              /* Fallback for simple tech array */
                              <div className="flex flex-wrap gap-2">
                                {'tech' in exp && exp.tech?.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full font-medium"
                                    style={{
                                      backgroundColor: 'rgba(107, 155, 127, 0.15)',
                                      border: '1px solid rgba(107, 155, 127, 0.3)',
                                      color: '#8BAA93',
                                    }}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
