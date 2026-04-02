'use client';

import { useEffect } from 'react';
import Navbar from '@/components/navigation/Navbar';
import ChiSonoSection from '@/components/home/ChiSonoSection';
import HeroHome from '@/components/home/HeroHome';
import MetodoSection from '@/components/home/MetodoSection';
import AdattoSection from '@/components/home/AdattoSection';
import PercorsiSection from '@/components/home/PercorsiSection';
import TestFisiciSection from '@/components/home/TestFisiciSection';
import CompetenzeSection from '@/components/home/CompetenzeSection';
import CompetenzeAvanzateSection from '@/components/home/CompetenzeAvanzateSection';
import PerchéScegliereSection from '@/components/home/PerchéScegliereSection';
import CTAFinalSection from '@/components/home/CTAFinalSection';
import Footer from '@/components/navigation/Footer';

export default function HomePage() {
  useEffect(() => {
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <main className="w-full bg-white">
      <Navbar />
      <ChiSonoSection />
      <HeroHome />
      <MetodoSection />
      <AdattoSection />
      <PercorsiSection />
      <TestFisiciSection />
      <CompetenzeSection />
      <CompetenzeAvanzateSection />
      <PerchéScegliereSection />
      <CTAFinalSection />
      <Footer />
    </main>
  );
}
