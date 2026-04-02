'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingHero() {
  const [animationPhase, setAnimationPhase] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Sequenza animazioni: Logo al centro → Testo → Bottone
    const timers: NodeJS.Timeout[] = [];
    
    // Fase 1: Logo appare al centro (dopo 0.2s)
    timers.push(setTimeout(() => setAnimationPhase(1), 200));
    
    // Fase 2: Testo appare sotto il logo (dopo 1s)
    timers.push(setTimeout(() => setAnimationPhase(2), 1000));
    
    // Fase 3: Bottone appare (dopo 1.5s)
    timers.push(setTimeout(() => setAnimationPhase(3), 1500));

    // Force video play on mobile
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    };
    
    // Try to play immediately and on user interaction
    playVideo();
    document.addEventListener('touchstart', playVideo, { once: true });
    document.addEventListener('click', playVideo, { once: true });

    return () => {
      timers.forEach(clearTimeout);
      document.removeEventListener('touchstart', playVideo);
      document.removeEventListener('click', playVideo);
    };
  }, []);

  // Easing premium
  const easeOutExpo = [0.16, 1, 0.3, 1];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: easeOutExpo }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.35)' }}
          onCanPlay={() => {
            videoRef.current?.play().catch(() => {});
          }}
        >
          <source src="/assets/videohome.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.5) 100%)'
        }}
      />

      {/* Main Content Container - TUTTO CENTRATO */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          
          {/* Logo - GRANDE e CENTRATO */}
          <motion.div
            className="relative mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animationPhase >= 1 ? {
              opacity: 1,
              scale: [0.5, 1.1, 1],
            } : {}}
            transition={{
              duration: 0.6,
              ease: easeOutExpo,
              scale: { 
                duration: 0.6,
                times: [0, 0.6, 1],
                ease: easeOutExpo 
              }
            }}
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
              <Image
                src="/assets/logo.png"
                alt="Logo MV"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Logo glow effect */}
            <motion.div
              className="absolute -inset-8 rounded-full"
              initial={{ opacity: 0 }}
              animate={animationPhase >= 1 ? { opacity: [0, 0.6, 0] } : {}}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              style={{
                background: 'radial-gradient(circle, rgba(212,175,55,0.3) 0%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Testo - CAMBIA CON ME ORA */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={animationPhase >= 2 ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5, 
              ease: easeOutExpo 
            }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-wider uppercase">
              CAMBIA CON ME ORA
            </h1>
          </motion.div>

          {/* CTA Button - INIZIA */}
          <AnimatePresence>
            {animationPhase >= 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.4, 
                  ease: easeOutExpo 
                }}
              >
                <Link href="/home">
                  <motion.button
                    className="relative px-14 md:px-16 py-4 md:py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-black rounded-full text-lg md:text-xl uppercase tracking-widest overflow-hidden group shadow-2xl shadow-amber-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Button shine effect */}
                    <motion.div
                      className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                      }}
                    />
                    
                    <span className="relative z-10">INIZIA</span>
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Corner accents - Gold */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-500/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationPhase >= 3 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-500/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={animationPhase >= 3 ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      />
    </div>
  );
}
