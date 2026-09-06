"use client";

import { motion } from "framer-motion";
import { Users, Package, Ruler, ShieldCheck } from "lucide-react";
import { siteData } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={22} className="text-terracotta" />,
  package: <Package size={22} className="text-terracotta" />,
  ruler: <Ruler size={22} className="text-terracotta" />,
  shield: <ShieldCheck size={22} className="text-terracotta" />,
};

export default function TrustBar() {
  return (
    <section className="bg-ivory border-b border-warm-stone/30">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-warm-stone/40">
          {siteData.metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              className="flex items-start gap-3 py-5 lg:py-6 px-4 lg:px-6 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="shrink-0 w-12 h-12 rounded-full bg-warm-stone/50 flex items-center justify-center">
                {iconMap[metric.icon]}
              </div>
              <div>
                <div className="text-[28px] lg:text-[36px] font-semibold text-charcoal leading-none tracking-[-0.03em]">
                  {metric.value}
                </div>
                <div className="text-[11px] lg:text-[12px] uppercase text-muted tracking-[0.1em] mt-2">
                  {metric.label}
                </div>
                <div className="text-[12.5px] text-muted/80 mt-1.5 hidden sm:block">
                  {metric.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
