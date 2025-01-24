//src/app/components/AnimatedHeroSection.tsx
'use client'

import { motion } from 'framer-motion';
import Image from "next/image";
import { ArrowDownCircle } from "lucide-react";
import ContactModal from './ContactModal';

interface AnimatedHeroSectionProps {
  merriweather: string;
}

export const AnimatedHeroSection = ({ merriweather }: AnimatedHeroSectionProps) => {
  return (
    <>
      {/* Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              ease: "easeOut"
            }}
            className="flex items-center"
          >
            <Image
              src="/color-logo.svg"
              alt="HITA Logo"
              width={100}
              height={100}
              className="mr-2 rounded"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white hover:text-green-200 transition-colors"
          >
            <ContactModal />
          </motion.div>
        </div>
      </div>

      {/* Fixed Background Section */}
      <section className="fixed inset-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-gray-900 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeIn",
            delay: 0.2 
          }}
          className="relative z-10 text-center px-4"
        >
          <Image
            src="Colorlogo-nobackgrounds.svg"
            alt="HITA Logo"
            width={1200}
            height={1200}
            className="mr-2 rounded"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              ease: "easeOut"
            }}
            className={`text-xl mb-8 text-green-100 ${merriweather}`}
          >
            Revolutionizing heat recycling…beginning at the EDGE
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.2 
          }}
        >
          <ArrowDownCircle className="absolute bottom-8 animate-bounce text-white w-8 h-8" />
        </motion.div>
      </section>
    </>
  );
};