import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: "mri-series-x",
    name: "MRI Series X-Pro",
    category: "Magnetic Resonance",
    image: "/images/mri_machine_slider_1779559707594.png",
  },
  {
    id: "ct-scan-ultra",
    name: "CT Scan Ultra 360",
    category: "Computed Tomography",
    image: "/images/medical_scanner_slider_1779559741753.png",
  },
  {
    id: "xray-digital-dr",
    name: "Digital DR X-Ray System",
    category: "Radiography",
    image: "/images/xray_machine_slider_1779559724793.png",
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest text-[10px] uppercase mb-2">Our Products</h2>
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Advanced Clinical Machinery
            </h3>
          </div>
          <button className="hidden md:flex items-center text-primary text-[10px] font-bold uppercase tracking-widest border-b border-primary/30 pb-1 transition-colors hover:border-primary">
            View full catalogue
            <ArrowRight className="ml-2 w-3 h-3" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Hover overlay badge */}
                <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center shadow-sm text-sm font-medium text-foreground">
                  View details <ArrowRight className="ml-1.5 w-4 h-4" />
                </div>
              </div>
              
              <div>
                <div className="text-[10px] uppercase font-semibold tracking-widest text-muted-foreground mb-1">
                  {product.category}
                </div>
                <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <button className="inline-flex items-center text-primary font-medium">
            View full catalogue
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
