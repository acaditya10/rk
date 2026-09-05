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
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* Left Image - larger */}
          <motion.div
            className="grid grid-rows-2 lg:grid-rows-[1.2fr_1fr] min-h-[400px]"
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
            <div className="grid grid-cols-2">
              <img
                src="/images/experience-2.jpg"
                alt="Experience centre materials display"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/experience-3.jpg"
                alt="Experience centre kitchen display"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="bg-ivory p-10 lg:p-14 flex flex-col justify-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="eyebrow text-terracotta mb-4">
              Visit Our Experience Centre
            </p>
            <h2 className="text-[1.8rem] lg:text-[2.4rem] leading-[1.15] font-semibold text-charcoal mb-5">
              See. Touch.{" "}
              <span className="serif-italic text-terracotta">Experience.</span>
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-7">
              Explore materials, finishes, kitchens, wardrobes and design
              possibilities before making decisions for your home.
            </p>

            <ul className="space-y-3.5 mb-9">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3.5">
                  <div className="w-5.5 h-5.5 rounded-full bg-terracotta/10 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-terracotta" />
                  </div>
                  <span className="text-[15px] text-charcoal">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-terracotta text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
              >
                Book a Visit
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 border border-charcoal text-charcoal text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300"
              >
                <MapPin size={15} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
