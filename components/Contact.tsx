"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowRight, Calendar, Users, Home, Shield } from "lucide-react";
import { siteData } from "@/lib/data";

const steps = [
  { title: "Tell us about your space", description: "Share your requirements and ideas." },
  { title: "We schedule a consultation", description: "Online or at our experience centre." },
  { title: "We develop your design direction", description: "Tailored to your lifestyle and budget." },
];

const contactItems = [
  { icon: MapPin, title: "Patna & surrounding areas", description: "We serve homes and businesses across Patna." },
  { icon: Phone, title: siteData.brand.phone, description: "Mon – Sat, 10:00 AM – 7:00 PM", href: `tel:${siteData.brand.phone}` },
  { icon: MessageCircle, title: "Chat on WhatsApp", description: "Get quick answers from our team.", href: `https://wa.me/${siteData.brand.whatsapp}` },
  { icon: MapPin, title: "Visit our Experience Centre", description: siteData.brand.experienceCentreAddress, href: "https://maps.google.com/?q=Patna+Bihar" },
];

const trustBadges = [
  { icon: Calendar, title: "Free consultation", description: "No obligation" },
  { icon: Users, title: "Expert guidance", description: "From concept to completion" },
  { icon: Home, title: "Spaces that feel like home", description: "That's our promise" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    designing: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", phone: "", designing: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="relative min-h-[500px] lg:min-h-[560px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-12 py-8 lg:py-14 min-h-[inherit] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-0 lg:gap-12 w-full items-center bg-[#F6F1E7]/90 rounded-xl p-5 lg:bg-transparent lg:p-0 lg:rounded-none">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <p className="eyebrow text-terracotta mb-0">Get in Touch</p>
              <div className="h-px w-8 bg-terracotta/50" />
            </div>

            <h2 className="text-[1.8rem] lg:text-[3.4rem] tracking-[-0.045em] leading-[1.02] font-semibold text-charcoal mb-3">
              Let&apos;s design
              <br />
              your{" "}
              <span className="serif-italic text-terracotta">dream space.</span>
            </h2>

            <p className="text-charcoal/70 text-[13px] lg:text-[14px] leading-[1.6] mb-5 max-w-[360px]">
              From first ideas to final handover, we&apos;re here to
              make the process simple, transparent and enjoyable.
            </p>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
              {/* Steps */}
              <div className="space-y-2.5">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full border border-terracotta/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-terracotta text-[10px] font-medium">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-charcoal mb-0.5">{step.title}</p>
                      <p className="text-[11px] text-charcoal/50">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2.5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Wrapper
                      key={item.title}
                      {...wrapperProps}
                      className="flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-full border border-charcoal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={12} className="text-charcoal/60" />
                      </div>
                      <div>
                        <p className="text-[12px] font-medium text-charcoal group-hover:text-terracotta transition-colors">
                          {item.title}
                        </p>
                        <p className="text-[10px] text-charcoal/45 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <p className="text-[9px] lg:text-[10px] tracking-[0.18em] uppercase text-charcoal/40 font-medium mt-5">
              Thoughtful Spaces. Happier Lives.
            </p>
          </motion.div>

          {/* Right Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="p-0 lg:p-8 lg:bg-[#F6F1E7] lg:rounded-2xl lg:shadow-[0_24px_80px_rgba(0,0,0,0.08)] mt-6 lg:mt-0">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-[12px] font-medium tracking-[0.12em] uppercase text-charcoal">
                    Start your project
                  </h3>
                  <div className="h-px w-6 bg-terracotta/40" />
                </div>
                <p className="text-[8px] tracking-[0.14em] uppercase text-charcoal/40 text-right leading-[1.6] hidden sm:block">
                  We&apos;ll get back to you
                  <br />
                  within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-medium text-charcoal/60 mb-1 block">
                      Your Name <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[38px] text-[13px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-3 placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 transition-colors"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-medium text-charcoal/60 mb-1 block">
                      Phone Number <span className="text-terracotta">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-[38px] text-[13px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-3 placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 transition-colors"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-medium text-charcoal/60 mb-1 block">
                      What are you designing? <span className="text-terracotta">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.designing}
                        onChange={(e) => setFormData({ ...formData, designing: e.target.value })}
                        className="w-full h-[38px] text-[13px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-3 transition-all appearance-none focus:outline-none focus:border-terracotta/50"
                        required
                      >
                        <option value="">Select an option</option>
                        {siteData.contact.designingOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal/40"/></svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-medium text-charcoal/60 mb-1 block">
                      Approx. Budget
                    </label>
                    <div className="relative">
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full h-[38px] text-[13px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-3 transition-all appearance-none focus:outline-none focus:border-terracotta/50"
                      >
                        <option value="">Select an option</option>
                        {siteData.contact.budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-charcoal/40"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-medium text-charcoal/60 mb-1 block">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full text-[13px] text-charcoal bg-white border border-warm-stone/50 rounded-lg px-3 py-2 placeholder:text-charcoal/30 focus:outline-none focus:border-terracotta/50 transition-colors resize-none"
                    placeholder="Share your ideas, requirements or any specific details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-terracotta text-white text-[13px] font-medium py-3 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
                >
                  Get a Free Consultation
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <div className="flex items-center justify-center gap-1.5 pt-0.5">
                  <Shield size={11} className="text-charcoal/30" />
                  <p className="text-[10px] text-charcoal/40">
                    Your information is safe with us. We respect your privacy.
                  </p>
                </div>
              </form>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-warm-stone/40">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.title} className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-charcoal/5 flex items-center justify-center flex-shrink-0">
                        <Icon size={11} className="text-charcoal/50" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-charcoal leading-tight">{badge.title}</p>
                        <p className="text-[9px] text-charcoal/40 mt-0.5">{badge.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
