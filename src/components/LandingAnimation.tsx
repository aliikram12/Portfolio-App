import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LandingAnimationProps {
  onComplete: () => void;
}

const LandingAnimation: React.FC<LandingAnimationProps> = ({ onComplete }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {/* Background layers for zip effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1.2] }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-purple-500/30 blur-3xl"
          initial={{ x: '-50%', y: '-50%', scale: 0 }}
          animate={{ 
            x: ['-50%', '-30%', '-50%'], 
            y: ['-50%', '-30%', '-50%'],
            scale: [0, 1.5, 2]
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-pink-500/30 blur-3xl"
          initial={{ x: '50%', y: '50%', scale: 0 }}
          animate={{ 
            x: ['50%', '30%', '50%'], 
            y: ['50%', '30%', '50%'],
            scale: [0, 1.5, 2]
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
        
        {/* Center content */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Logo/Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="gradient-text glow-text">Ali Ikram</span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Portfolio
          </motion.p>
          
          {/* Loading bar */}
          <motion.div
            className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
              onAnimationComplete={onComplete}
            />
          </motion.div>
        </motion.div>
        
        {/* Zip unfold effect - vertical lines */}
        <motion.div
          className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-black to-purple-950/50"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-black to-pink-950/50"
          initial={{ x: 0 }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
        />
        
        {/* Horizontal zip lines */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black to-purple-950/30"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-pink-950/30"
          initial={{ y: 0 }}
          animate={{ y: '100%' }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.4, 0, 0.2, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingAnimation;
