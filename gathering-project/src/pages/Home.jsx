import React from 'react';
import MyNavbar from '../components/MyNavbar';
import HeroSection from '../components/HeroSection';
import ValuesSection from '../components/ValuesSection'; 
import CTASection from '../components/CTASection';// ✅ Import kiya

const Home = () => {
  return (
    <>
      <MyNavbar />
      
      {/* 1. Hero Section (Image wala) */}
      <HeroSection />
      
      {/* 2. Values Section (Cards wala) */}
      <ValuesSection />

      <CTASection />
    </>
  );
};

export default Home;