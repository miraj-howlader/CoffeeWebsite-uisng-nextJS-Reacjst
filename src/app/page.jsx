"use client";

import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import OpeningHours from "@/components/OpeningHours";
import Testimonial from "@/components/Testimonial";
import LocomotiveScroll from "locomotive-scroll";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <div className=" h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonial />
    </div>
  );
};

export default Home;
