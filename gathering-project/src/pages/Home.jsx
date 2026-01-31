import React from 'react';
import MyNavbar from '../components/MyNavbar';
import HeroSection from '../components/HeroSection';
import ValuesSection from '../components/ValuesSection'; // ✅ Import kiya

const Home = () => {
  return (
    <>
      <MyNavbar />
      
      {/* 1. Hero Section (Image wala) */}
      <HeroSection />
      
      {/* 2. Values Section (Cards wala) */}
      <ValuesSection />
    </>
  );
};

export default Home;