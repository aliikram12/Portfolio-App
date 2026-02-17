import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Target, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building robust web applications from frontend to backend with modern technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces that delight users.',
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Optimizing applications for speed, scalability, and exceptional user experience.',
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Delivering projects that meet business objectives and exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and industry best practices.',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuinely loving what I do and putting heart into every project.',
    },
  ];

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
            About Me
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let Me <span className="gradient-text">Introduce</span> Myself
          </h1>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="glass-card p-6 md:p-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Image/Avatar */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden glass-card">
                  <img
                    src="/profile.png"
                    alt="Ali Ikram"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                            <span class="text-6xl font-bold gradient-text">AI</span>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right - Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hi, I'm <span className="gradient-text">Ali Ikram</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  I'm a passionate <span className="text-foreground font-medium">Full Stack Developer</span> and{' '}
                  <span className="text-foreground font-medium">UI/UX Designer</span> with expertise in building 
                  modern web applications, interactive dashboards, SaaS platforms, and stunning landing pages.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  My journey in tech started with a curiosity for how things work on the web, which evolved into 
                  a deep passion for creating digital experiences that are both functional and beautiful.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  I specialize in the MERN stack, PHP development, and modern frontend frameworks. When I'm not coding, 
                  you'll find me exploring new design trends, contributing to open-source projects, or solving 
                  algorithmic challenges on LeetCode.
                </p>
              </div>

              {/* Quick Info */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Pakistan</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Experience</div>
                  <div className="font-medium">3+ Years</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Availability</div>
                  <div className="font-medium text-green-400">Open to Work</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Languages</div>
                  <div className="font-medium">English, Urdu</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="glass-card p-5 md:p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
