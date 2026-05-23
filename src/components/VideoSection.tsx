import React from "react";
import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

export function VideoSection() {
  return (
    <section id="videos" className="py-24 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3">Media Center</h2>
          <h3 className="text-2xl font-bold text-foreground tracking-tight">Featured Innovations</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-sm overflow-hidden aspect-video bg-black cursor-pointer shadow-lg border border-border"
          >
            <img
              src="/images/medical_scanner_slider_1779559741753.png"
              alt="Corporate Video"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-background/20 backdrop-blur-md rounded-sm group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest">The Future of Medical Imaging</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mt-2">Corporate Video<span className="text-gray-400"> • 4:20</span></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative rounded-sm overflow-hidden aspect-video bg-black cursor-pointer shadow-lg border border-border"
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
              alt="Technology Showcase"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
              referrerPolicy="no-referrer"
            />
             <div className="absolute inset-0 flex items-center justify-center">
              <div className="p-4 bg-background/20 backdrop-blur-md rounded-sm group-hover:scale-110 transition-transform duration-300">
                <PlayCircle className="w-12 h-12 text-white" strokeWidth={1} />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h4 className="text-white text-sm font-bold uppercase tracking-widest">Installation & Calibration Protocols</h4>
              <p className="text-primary font-bold text-[10px] uppercase tracking-widest mt-2">Tech Showcase<span className="text-gray-400"> • 3:15</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
