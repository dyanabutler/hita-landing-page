'use client'

import { motion } from 'framer-motion';
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const AnimatedHero = ({ className }: { className: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 0, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center px-4"
  >
    <Image
      src="Colorlogo-nobackground.svg"
      alt="HITA Logo"
      width={1200}
      height={1200}
      className="mr-2 rounded"
    />
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className={className}
    >
      Revolutionizing heat recycling…beginning at the EDGE
    </motion.p>
  </motion.div>
);

export const AnimatedSection = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className: string;
}) => (
  <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className={className}
  >
    {children}
  </motion.section>
);

export const AnimatedStaggerSection = ({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className: string;
}) => (
  <motion.section 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerChildren}
    className={className}
  >
    {children}
  </motion.section>
);

