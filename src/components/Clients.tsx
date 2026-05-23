import React from "react";
import { motion } from "motion/react";

const clients = [
  "Global Health Corp",
  "MedTech Imaging",
  "Nordic Diagnostics",
  "Pacific Clinical Labs",
  "Summit Hospitals",
  "Nova Care Institute",
];

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-border pb-24">
        <h4 className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase mb-12">
          Trusted by leading healthcare groups worldwide
        </h4>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-80">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm md:text-base font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
