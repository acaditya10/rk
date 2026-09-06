"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Check } from "lucide-react";

const benefits = [
  "Wide range of materials",
  "Kitchen & wardrobe displays",
  "Expert design consultation",
  "Easy parking",
];

export default function ExperienceCentre() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-0 overflow-hidden">
          {/* Left Image */}
          <motion.div
            className="aspect-[4/3] lg:aspect-auto min-h-[380px] lg:min-h-[500px]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/experience-centre.jpg"
              alt="RK Interiors Experience Centre showroom"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="bg-ivory p-8 lg:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="eyebrow text-terracotta mb-5">
              Visit Our Experience Centre
            </p>
            <h2 className="text-[2.6rem] lg:text-[3.8rem] tracking-[-0.045em] leading-[1.02] font-semibold text-charcoal mb-7">
              See. Touch.{" "}
              <span className="serif-italic text-terracotta">Experience.</span>
            </h2>
            <p className="text-muted text-[16px] lg:text-[17px] leading-[1.7] mb-9">
              Explore materials, finishes, kitchens, wardrobes and design
              possibilities before making decisions for your home.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-terracotta" />
                  </div>
                  <span className="text-[16px] text-charcoal">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-terracotta text-white text-[15px] font-medium px-8 py-4 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
              >
                Book a Visit
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="https://maps.google.com/?q=Patna+Bihar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-charcoal text-charcoal text-[15px] font-medium px-8 py-4 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                <MapPin size={16} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
    </section>
  );
}
