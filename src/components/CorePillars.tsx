import React from "react";
import { motion } from "motion/react";
import { PenTool, Target, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "We Design",
    description: "Transforming clinical ideas into reality with precision engineering and innovative diagnostic solutions tailored to healthcare needs.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "We Build",
    description: "Crafting high-quality medical machinery with advanced manufacturing technologies to deliver excellence in every scan.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "We Restore",
    description: "Providing comprehensive repair, calibration, and maintenance services to ensure the longevity and efficiency of your imaging tools.",
  },
];

export function CorePillars() {
  return (
    <section id="machinery" className="py-24 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group"
            >
              <div className="w-12 h-12 rounded-sm bg-background flex items-center justify-center text-primary shadow-sm border border-border mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                {pillar.icon}
              </div>
              <h3 className="text-sm uppercase tracking-widest font-bold text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
