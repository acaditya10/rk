"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { siteData } from "@/lib/data";

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
    <section id="contact" className="bg-ivory py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Image */}
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-10">
              <img
                src="/images/contact-bg.jpg"
                alt="RK Interiors showroom"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="eyebrow text-terracotta mb-4">Get in Touch</p>
            <h2 className="text-[2rem] lg:text-[2.8rem] leading-[1.12] font-semibold text-charcoal mb-10">
              Let&apos;s design your
              <br />
              <span className="serif-italic text-terracotta">dream space.</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-warm-stone/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-charcoal">
                    Patna &amp; surrounding areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-warm-stone/50 flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-terracotta" />
                </div>
                <div>
                  <a
                    href={`tel:${siteData.brand.phone}`}
                    className="text-[15px] font-medium text-charcoal hover:text-terracotta transition-colors"
                  >
                    {siteData.brand.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-warm-stone/50 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={17} className="text-terracotta" />
                </div>
                <div>
                  <a
                    href={`https://wa.me/${siteData.brand.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-medium text-charcoal hover:text-terracotta transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-white border border-warm-stone/50 flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-terracotta" />
                </div>
                <div>
                  <p className="text-[15px] font-medium text-charcoal">
                    Visit our Experience Centre
                  </p>
                  <p className="text-[13px] text-muted mt-1">
                    {siteData.brand.experienceCentreAddress}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-warm-stone/30">
              <h3 className="text-[20px] font-semibold text-charcoal mb-7">
                Start your project
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[13px] text-muted mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full text-[15px] text-charcoal bg-ivory/50 border border-warm-stone/50 rounded-xl px-4 py-3.5 placeholder:text-muted/40 transition-all"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-[13px] text-muted mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full text-[15px] text-charcoal bg-ivory/50 border border-warm-stone/50 rounded-xl px-4 py-3.5 placeholder:text-muted/40 transition-all"
                      placeholder="Phone"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[13px] text-muted mb-2 block">
                      What are you designing?
                    </label>
                    <select
                      value={formData.designing}
                      onChange={(e) =>
                        setFormData({ ...formData, designing: e.target.value })
                      }
                      className="w-full text-[15px] text-charcoal bg-ivory/50 border border-warm-stone/50 rounded-xl px-4 py-3.5 transition-all appearance-none"
                    >
                      <option value="">Select</option>
                      {siteData.contact.designingOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[13px] text-muted mb-2 block">
                      Approx. Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full text-[15px] text-charcoal bg-ivory/50 border border-warm-stone/50 rounded-xl px-4 py-3.5 transition-all appearance-none"
                    >
                      <option value="">Select</option>
                      {siteData.contact.budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[13px] text-muted mb-2 block">
                    Tell us about your project
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full text-[15px] text-charcoal bg-ivory/50 border border-warm-stone/50 rounded-xl px-4 py-3.5 placeholder:text-muted/40 transition-all resize-none"
                    placeholder="Brief description..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-terracotta text-white text-[15px] font-medium px-7 py-4 rounded-full hover:bg-terracotta/90 transition-all duration-300 group"
                >
                  Get Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
