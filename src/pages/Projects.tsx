import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe, Database, Layers } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  category: string;
  tech: string[];
  image?: string;
}

const projects: Project[] = [
  {
    name: 'National College of Technology',
    description: 'Educational institution website with modern design and comprehensive information architecture.',
    url: 'http://nationalcollege.edu.pk/',
    category: 'Simple Websites',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/national-college.png',
  },
  {
    name: 'Chand Caterers',
    description: 'Elegant landing page for a catering service business with beautiful food galleries.',
    url: 'https://aliikram12.github.io/Chand_Caterers_LandingPage/',
    github: 'https://github.com/aliikram12/Chand_Caterers_LandingPage',
    category: 'Simple Websites',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    image: '/projects/chand-caterers.png',
  },
  {
    name: 'MALoon Finance & Management',
    description: 'Professional financial services website with modern UI and responsive design.',
    url: 'https://aliikram12.github.io/MALOON_Web/',
    github: 'https://github.com/aliikram12/MALOON_Web',
    category: 'Simple Websites',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/maloon.png',
  },
  {
    name: 'Multi Aspects',
    description: 'City news and information portal with dynamic content sections.',
    url: 'https://aliikram12.github.io/City_New/',
    github: 'https://github.com/aliikram12/City_New',
    category: 'Simple Websites',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/multi-aspects.png',
  },
  {
    name: 'SESS Project',
    description: 'Full-featured admin dashboard for educational management system with data visualization.',
    url: 'https://admin.sessuos.info/',
    category: 'MERN Stack',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/projects/sess.png',
  },
  {
    name: 'Learning Portal',
    description: 'Comprehensive e-learning platform with course management and student tracking.',
    url: '#',
    github: '#',
    category: 'PHP Projects',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image: '/projects/learning-portal.png',
  },
  {
    name: 'School Management System',
    description: 'Complete school administration system with student, teacher, and class management.',
    url: '#',
    github: '#',
    category: 'PHP Projects',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    image: '/projects/school-management.png',
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  'Simple Websites': Globe,
  'MERN Stack': Layers,
  'PHP Projects': Database,
};

const categoryColors: Record<string, string> = {
  'Simple Websites': '#10B981',
  'MERN Stack': '#8B5CF6',
  'PHP Projects': '#777BB4',
};

const Projects: React.FC = () => {
  const categories = ['Simple Websites', 'MERN Stack', 'PHP Projects'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-full px-4 py-8 particle-bg">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full glass-card text-sm text-purple-400 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            My Work
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects showcasing my skills in web development and design.
          </p>
        </motion.div>

        {/* Projects by Category */}
        {categories.map((category, categoryIndex) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          const CategoryIcon = categoryIcons[category];
          const categoryColor = categoryColors[category];

          return (
            <motion.section
              key={category}
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${categoryColor}20` }}
                >
                  <CategoryIcon className="w-6 h-6" style={{ color: categoryColor }} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">{category}</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                variants={containerVariants}
              >
                {categoryProjects.map((project) => (
                  <motion.div
                    key={project.name}
                    className="glass-card overflow-hidden group"
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                                  <span class="text-4xl font-bold gradient-text">${project.name.charAt(0)}</span>
                                </div>
                              `;
                            }
                          }}
                        />
                      </motion.div>
                      
                      {/* Overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-button flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Preview</span>
                        </motion.a>
                      </motion.div>

                      {/* Category Badge */}
                      <div 
                        className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${categoryColor}30`,
                          color: categoryColor,
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded-full glass-card"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                          whileHover={{ x: 2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                        {project.github && project.github !== '#' && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            whileHover={{ x: 2 }}
                          >
                            <Github className="w-4 h-4" />
                            <span>Source</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          );
        })}

        {/* More Projects CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/aliikram12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
