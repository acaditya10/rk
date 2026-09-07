"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Pencil } from "lucide-react";

const propertyTypes = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "Office"];
const areaRanges = ["500–800", "800–1200", "1200–1600", "1600–2000", "2000+"];
const budgetRanges = ["₹3–5L", "₹5–10L", "₹10–20L", "20L+"];

const basePrices: Record<string, number> = {
  "1 BHK": 3500,
  "2 BHK": 4200,
  "3 BHK": 4800,
  "4 BHK": 5500,
  Office: 5000,
};

const areaMultipliers: Record<string, number> = {
  "500–800": 0.85,
  "800–1200": 1.0,
  "1200–1600": 1.1,
  "1600–2000": 1.18,
  "2000+": 1.25,
};

function FloorPlan({ type }: { type: string }) {
  const rooms: Record<string, { label: string; w: string; h: string; color: string }[]> = {
    "1 BHK": [
      { label: "Living", w: "col-span-2", h: "row-span-1", color: "bg-warm-stone/40" },
      { label: "Bedroom", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Kitchen", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/15" },
      { label: "Bath", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
    ],
    "2 BHK": [
      { label: "Living", w: "col-span-2", h: "row-span-1", color: "bg-warm-stone/40" },
      { label: "Bed 1", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 2", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Kitchen", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/15" },
      { label: "Bath", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
    ],
    "3 BHK": [
      { label: "Living", w: "col-span-2", h: "row-span-1", color: "bg-warm-stone/40" },
      { label: "Bed 1", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 2", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 3", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Kitchen", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/15" },
      { label: "Bath 1", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
      { label: "Bath 2", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
    ],
    "4 BHK": [
      { label: "Living", w: "col-span-3", h: "row-span-1", color: "bg-warm-stone/40" },
      { label: "Bed 1", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 2", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 3", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Bed 4", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Kitchen", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/15" },
      { label: "Bath 1", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
      { label: "Bath 2", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
    ],
    Office: [
      { label: "Work Area", w: "col-span-2", h: "row-span-1", color: "bg-warm-stone/40" },
      { label: "Cabin", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/10" },
      { label: "Meeting", w: "col-span-1", h: "row-span-1", color: "bg-terracotta/15" },
      { label: "Pantry", w: "col-span-1", h: "row-span-1", color: "bg-charcoal/5" },
    ],
  };

  const items = rooms[type] || rooms["2 BHK"];
  const cols = type === "4 BHK" ? "grid-cols-3" : "grid-cols-2";

  return (
    <div className={`grid ${cols} gap-1.5`}>
      {items.map((room) => (
        <div
          key={room.label}
          className={`${room.color} border border-charcoal/8 rounded-md p-2 flex items-center justify-center min-h-[48px]`}
        >
          <span className="text-[10px] font-medium text-charcoal/50 tracking-wide uppercase">
            {room.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function PriceCalculator() {
  const [property, setProperty] = useState<string | null>(null);
  const [area, setArea] = useState<string | null>(null);
  const [customArea, setCustomArea] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);

  const estimatedPrice = property && area
    ? Math.round(basePrices[property] * areaMultipliers[area])
    : null;

  const totalMin = estimatedPrice ? Math.round(estimatedPrice * 0.8) : 0;
  const totalMax = estimatedPrice ? Math.round(estimatedPrice * 1.2) : 0;

  return (
    <section className="bg-ivory py-14 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="mb-10 lg:mb-14">
          <div className="flex items-center gap-4 mb-5">
            <p className="eyebrow text-terracotta mb-0">Budget Estimator</p>
            <div className="h-px w-12 bg-terracotta/40" />
          </div>
          <h2 className="text-[2.4rem] lg:text-[3.6rem] tracking-[-0.04em] leading-[1.05] font-semibold text-charcoal">
            Get an Instant
            <br />
            <span className="serif-italic text-terracotta">Cost Estimate.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12">
          {/* Left: Inputs */}
          <div className="space-y-8">
            {/* Property Type */}
            <div>
              <p className="text-[13px] font-medium text-charcoal mb-3">Property Type</p>
              <div className="flex flex-wrap gap-2.5">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProperty(type)}
                    className={`px-5 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                      property === type
                        ? "bg-terracotta text-white border-terracotta"
                        : "bg-white text-charcoal border-warm-stone/50 hover:border-terracotta/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Area */}
            <div>
              <p className="text-[13px] font-medium text-charcoal mb-3">Area (sq. ft.)</p>
              <div className="flex flex-wrap gap-2.5">
                {areaRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => { setArea(range); setShowCustomInput(false); }}
                    className={`px-5 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                      area === range && !showCustomInput
                        ? "bg-terracotta text-white border-terracotta"
                        : "bg-white text-charcoal border-warm-stone/50 hover:border-terracotta/40"
                    }`}
                  >
                    {range}
                  </button>
                ))}
                <button
                  onClick={() => { setShowCustomInput(true); setArea(null); }}
                  className={`px-4 py-2.5 rounded-full text-[13px] font-medium border flex items-center gap-1.5 transition-all duration-300 ${
                    showCustomInput
                      ? "bg-terracotta text-white border-terracotta"
                      : "bg-white text-charcoal border-warm-stone/50 hover:border-terracotta/40"
                  }`}
                >
                  <Pencil size={12} />
                  Custom
                </button>
              </div>
              <AnimatePresence>
                {showCustomInput && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="number"
                      value={customArea}
                      onChange={(e) => setCustomArea(e.target.value)}
                      placeholder="Enter area in sq. ft."
                      className="mt-3 w-full max-w-[280px] h-[44px] text-[14px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-4 placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 transition-colors"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Budget */}
            <div>
              <p className="text-[13px] font-medium text-charcoal mb-3">Expected Budget</p>
              <div className="flex flex-wrap gap-2.5">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => setBudget(range)}
                    className={`px-5 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                      budget === range
                        ? "bg-terracotta text-white border-terracotta"
                        : "bg-white text-charcoal border-warm-stone/50 hover:border-terracotta/40"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-terracotta text-white text-[14px] font-medium px-8 py-3.5 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
              >
                Get Exact Quote
                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Floor Plan + Estimate */}
          <div className="space-y-6">
            {/* Floor Plan */}
            <div className="bg-white rounded-xl p-5 border border-warm-stone/30">
              <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-charcoal/50 mb-3">
                {property ? `${property} Layout` : "Select a property type"}
              </p>
              {property ? (
                <FloorPlan type={property} />
              ) : (
                <div className="flex items-center justify-center h-[180px] text-[13px] text-charcoal/30">
                  Choose a property type to see layout
                </div>
              )}
            </div>

            {/* Price Estimate */}
            <AnimatePresence>
              {estimatedPrice && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="bg-white rounded-xl p-5 border border-warm-stone/30"
                >
                  <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-charcoal/50 mb-2">
                    Estimated Budget
                  </p>
                  <p className="text-[28px] lg:text-[34px] font-semibold text-charcoal tracking-[-0.03em]">
                    ₹{totalMin.toLocaleString("en-IN")} – ₹{totalMax.toLocaleString("en-IN")}
                  </p>
                  <p className="text-[12px] text-charcoal/40 mt-1.5">
                    Approximate for {property} · {area || `${customArea} sq ft`} area
                  </p>
                  <div className="mt-4 pt-4 border-t border-warm-stone/30">
                    <p className="text-[11px] text-charcoal/40 leading-relaxed">
                      This is an estimated range. Actual pricing depends on materials,
                      design complexity and customizations. Get in touch for an exact quote.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
