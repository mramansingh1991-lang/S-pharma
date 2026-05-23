import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import mriImage from "../assets/images/mri_machine_slider_1779559707594.png";
import xrayImage from "../assets/images/xray_machine_slider_1779559724793.png";
import ctScannerImage from "../assets/images/medical_scanner_slider_1779559741753.png";

const slides = [
  {
    id: 1,
    image: mriImage,
    title: "Advanced MRI Solutions",
    subtitle: "High-Resolution Magnetic Resonance Imaging Systems",
    description: "Experience unparalleled clarity and precision in diagnostic imaging with our state-of-the-art MRI machines.",
  },
  {
    id: 2,
    image: ctScannerImage,
    title: "Next-Gen CT Scanners",
    subtitle: "Ultra-Fast Computed Tomography",
    description: "Empowering clinicians with rapid, low-dose scanning technology for accurate and timely diagnoses.",
  },
  {
    id: 3,
    image: xrayImage,
    title: "Precision X-Ray Systems",
    subtitle: "Digital Radiography at its Finest",
    description: "Reliable, high-fidelity digital X-ray solutions designed for modern clinical workflows and patient comfort.",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl"
              >
                <div className="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/10 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                  {slides[current].subtitle}
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6 leading-none tracking-tight">
                  {slides[current].title}
                </h1>
                <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                  {slides[current].description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-colors">
                    Explore product
                  </button>
                  <button className="border border-white/20 text-white px-8 py-3 font-bold text-[10px] uppercase tracking-widest hover:bg-white/10 transition-colors">
                    Request a quote
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/50 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "w-8 bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
