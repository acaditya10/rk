"use client";

import { motion } from "framer-motion";
import { Star, Calendar, Home, Clock } from "lucide-react";
import { siteData } from "@/lib/data";

const iconMap = {
  star: Star,
  calendar: Calendar,
  home: Home,
  clock: Clock,
};

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-warm-stone/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-warm-stone/30">
          {siteData.metrics.map((metric, i) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={metric.label}
                className="flex items-center gap-5 py-8 lg:py-10 px-5 lg:px-10 first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-ivory flex items-center justify-center">
                  <Icon size={19} className="text-terracotta" />
                </div>
                <div>
                  <div className="text-[26px] lg:text-[30px] font-semibold text-charcoal leading-none tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-[13px] text-muted tracking-wide mt-1.5">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
