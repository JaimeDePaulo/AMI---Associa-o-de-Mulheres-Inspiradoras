/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Programs from '@/src/components/Programs';
import Impact from '@/src/components/Impact';
import Testimonials from '@/src/components/Testimonials';
import Gallery from '@/src/components/Gallery';
import Support from '@/src/components/Support';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';
import WhatsAppButton from '@/src/components/WhatsAppButton';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-ami-purple-vibrant z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Testimonials />
        <Gallery />
        <Support />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

