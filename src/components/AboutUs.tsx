import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutUs() {
  const points = [
    "ISO 9001, 14001 & 45001 Certified",
    "State-of-the-art diagnostic imaging solutions",
    "Expert installation and clinical training",
    "24/7 dedicated service and maintenance",
  ];

  return (
    <section id="about-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Hospital Research"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 w-64 bg-card p-6 rounded-2xl shadow-xl border border-border hidden md:block">
              <div className="text-4xl font-display font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground font-medium">Years of Excellence in Medical Technology</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3">About Us</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
              Pioneering the Future of Diagnostic Imaging.
            </h3>
            <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
              At Balram S-Pharma, we specialize in the design, distribution, and maintenance of high-caliber radiology and imaging machinery. From cutting-edge MRI systems to ultra-fast CT scanners, we empower global healthcare institutions with technology that delivers precision when it matters most.
            </p>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-center text-foreground font-semibold text-xs uppercase tracking-wider"
                >
                  <CheckCircle2 className="text-primary mr-3 h-5 w-5 shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>

            <button className="flex items-center group font-bold text-primary text-[10px] uppercase tracking-widest border-b border-primary/30 pb-1 transition-colors hover:border-primary">
              <span className="relative inline-block overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  Read our full story
                </span>
                <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  Read our full story
                </span>
              </span>
              <ArrowRight className="ml-2 w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
