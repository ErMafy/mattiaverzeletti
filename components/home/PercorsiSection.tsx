'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, MessageCircle } from 'lucide-react';

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '393389555120';

const percorsi = [
  {
    name: 'BASE',
    subtitle: 'Percorso Start',
    features: [
      'Programma personalizzato',
      'Allenamenti settimanali',
      'Feedback mensile',
      'Videoteca esercizi',
      'No test fisici',
    ],
    highlight: false,
  },
  {
    name: 'PRO',
    subtitle: 'Percorso Performance',
    features: [
      'Tutto nel base',
      'Feedback settimanale',
      'Correzioni video',
      'Supporto chat',
      'Test ogni 3 mesi (extra)',
    ],
    highlight: false,
  },
  {
    name: 'ELITE',
    subtitle: 'Percorso Atleta',
    features: [
      'Tutto nel pro',
      'Monitoraggio avanzato',
      'Call video',
      'Test inclusi ogni 3 mesi',
    ],
    highlight: true,
  },
];

// 3D Tilt Card Component - Solo desktop, su mobile niente tilt
function TiltCard({ children, className, highlight }: { children: React.ReactNode; className?: string; highlight?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default true per SSR

  // Check if mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Limit rotation to ±15 degrees
    const rotateXValue = (mouseY / (rect.height / 2)) * -8;
    const rotateYValue = (mouseX / (rect.width / 2)) * 8;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Su mobile, render semplice senza effetti 3D
  if (isMobile) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        className="card-3d-inner h-full"
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
        style={{
          transformStyle: 'preserve-3d',
          boxShadow: isHovering 
            ? highlight 
              ? '0 25px 50px -12px rgba(251,191,36,0.35)' 
              : '0 25px 50px -12px rgba(0,0,0,0.25)'
            : 'none',
        }}
      >
        {children}
        
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            opacity: isHovering ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(
              ${105 + rotateY * 2}deg,
              transparent 40%,
              rgba(255,255,255,0.1) 50%,
              transparent 60%
            )`,
          }}
        />
      </motion.div>
    </div>
  );
}

export default function PercorsiSection() {
  return (
    <section id="percorsi" className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-amber-600 uppercase mb-4">
            I PERCORSI
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase">
            SCEGLI IL TUO PERCORSO
          </h2>
        </motion.div>

        {/* Cards Grid - ALLINEATE E CENTRATE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {percorsi.map((percorso, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <TiltCard highlight={percorso.highlight} className="h-full">
                <div
                  className={`group relative rounded-3xl overflow-hidden h-full flex flex-col ${
                    percorso.highlight
                      ? 'shadow-2xl shadow-amber-500/20'
                      : 'bg-gray-50 border border-gray-200 hover:border-amber-300'
                  }`}
                >
                  {/* Background for highlight - Gold gradient */}
                  {percorso.highlight && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
                  )}

                  {/* Premium Badge - Gold */}
                  {percorso.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black text-center py-3 text-xs font-black tracking-[0.15em] uppercase flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      CONSIGLIATO
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  {/* Content */}
                  <div className={`relative p-8 md:p-10 flex flex-col flex-grow ${percorso.highlight ? 'pt-16' : ''}`}>
                    <div className={`flex flex-col flex-grow ${percorso.highlight ? 'text-white' : 'text-black'}`}>
                      {/* Plan Name */}
                      <div className={`text-xs font-bold tracking-[0.2em] uppercase mb-2 ${
                        percorso.highlight ? 'text-amber-400' : 'text-amber-600'
                      }`}>
                        {percorso.name}
                      </div>
                      
                      {/* Plan Title */}
                      <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase">
                        {percorso.subtitle}
                      </h3>

                      {/* Features */}
                      <div className="space-y-4 mb-10 flex-grow">
                        {percorso.features.map((feature, fidx) => (
                          <motion.div 
                            key={fidx} 
                            className="flex items-start gap-4"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + fidx * 0.05 }}
                            viewport={{ once: true }}
                          >
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              percorso.highlight ? 'bg-amber-500/30' : 'bg-amber-100'
                            }`}>
                              <Check className={`w-3 h-3 ${
                                percorso.highlight ? 'text-amber-400' : 'text-amber-600'
                              }`} strokeWidth={3} />
                            </div>
                            <p className={`text-sm md:text-base font-light leading-relaxed ${
                              percorso.highlight ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {feature}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <motion.a
                        href={`https://wa.me/${WHATSAPP}?text=Ciao%20Mattia,%20sono%20interessato%20al%20percorso%20${percorso.name}.`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-base transition-all duration-300 uppercase tracking-wide tap-feedback ${
                          percorso.highlight
                            ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:shadow-lg hover:shadow-amber-500/30'
                            : 'bg-black text-white hover:bg-gray-900 hover:shadow-lg hover:shadow-black/20'
                        }`}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        INFO
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
