"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

function FacebookIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { services } from "@/lib/data/services";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  description: string;
  contactMethod: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  description?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    description: "",
    contactMethod: "phone",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.description.trim()) newErrors.description = "Please describe your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[#22242a] pt-32 pb-16">
        <div className="container-content text-center">
          <SectionEyebrow text="GET IN TOUCH" center className="mb-5" />
          <h1 className="font-display text-display-l font-bold text-[#faf7f2] mb-4">
            Request a Free Quote
          </h1>
          <p className="font-body text-[#8a8d91] max-w-xl mx-auto">
            Dustin personally reviews every request and responds fast. No pressure, no obligation.
          </p>
        </div>
      </section>

      {/* Form + contact rail */}
      <section className="section-padding bg-[#faf7f2]">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center gap-6 py-20 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#e7e0d6] flex items-center justify-center">
                    <CheckCircle size={36} className="text-[#b01e24]" />
                  </div>
                  <div>
                    <h2 className="font-display text-h2 font-bold text-[#22242a] mb-3">
                      Thanks — we&apos;ll be in touch soon.
                    </h2>
                    <p className="font-body text-[#5a5e64] max-w-sm mx-auto">
                      Dustin personally reviews every request and will reach out shortly. Can&apos;t wait?
                    </p>
                  </div>
                  <a
                    href="tel:7636881248"
                    className="inline-flex items-center gap-2 bg-[#b01e24] text-white font-body font-semibold px-7 py-3.5 rounded-[12px] hover:bg-[#7e1419] transition-colors"
                  >
                    <Phone size={16} />
                    Call (763) 688-1248
                  </a>
                  <Link href="/" className="font-body text-sm text-[#b01e24] hover:text-[#7e1419] transition-colors">
                    ← Back to Home
                  </Link>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-6"
                  aria-label="Request a free quote"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-body text-sm font-semibold text-[#22242a]">
                        Your Name <span className="text-[#b01e24]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={[
                          "w-full px-4 py-3 rounded-[6px] border font-body text-[#22242a] text-base bg-white placeholder:text-[#b0a89a] transition-all",
                          "focus:outline-none focus:border-[#b01e24] focus:shadow-[0_0_0_3px_rgba(176,30,36,0.12)]",
                          errors.name ? "border-[#b3261e] bg-[#fff5f5]" : "border-[#d8d0c4]",
                        ].join(" ")}
                      />
                      {errors.name && (
                        <p id="name-error" className="font-body text-xs text-[#b3261e]" role="alert">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-body text-sm font-semibold text-[#22242a]">
                        Phone Number <span className="text-[#b01e24]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={[
                          "w-full px-4 py-3 rounded-[6px] border font-body text-[#22242a] text-base bg-white placeholder:text-[#b0a89a] transition-all",
                          "focus:outline-none focus:border-[#b01e24] focus:shadow-[0_0_0_3px_rgba(176,30,36,0.12)]",
                          errors.phone ? "border-[#b3261e] bg-[#fff5f5]" : "border-[#d8d0c4]",
                        ].join(" ")}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="font-body text-xs text-[#b3261e]" role="alert">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-body text-sm font-semibold text-[#22242a]">
                      Email Address <span className="font-normal text-[#8a8d91]">(optional)</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-[6px] border border-[#d8d0c4] font-body text-[#22242a] text-base bg-white placeholder:text-[#b0a89a] transition-all focus:outline-none focus:border-[#b01e24] focus:shadow-[0_0_0_3px_rgba(176,30,36,0.12)]"
                    />
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="font-body text-sm font-semibold text-[#22242a]">
                      Service Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[6px] border border-[#d8d0c4] font-body text-[#22242a] text-base bg-white transition-all focus:outline-none focus:border-[#b01e24] focus:shadow-[0_0_0_3px_rgba(176,30,36,0.12)] appearance-none cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                      <option value="not-sure">Not sure — need advice</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="font-body text-sm font-semibold text-[#22242a]">
                      Describe Your Project <span className="text-[#b01e24]">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="What needs repairing? Where is it located? Any history you know about the damage?"
                      aria-required="true"
                      aria-invalid={!!errors.description}
                      aria-describedby={errors.description ? "desc-error" : undefined}
                      className={[
                        "w-full px-4 py-3 rounded-[6px] border font-body text-[#22242a] text-base bg-white placeholder:text-[#b0a89a] transition-all resize-none",
                        "focus:outline-none focus:border-[#b01e24] focus:shadow-[0_0_0_3px_rgba(176,30,36,0.12)]",
                        errors.description ? "border-[#b3261e] bg-[#fff5f5]" : "border-[#d8d0c4]",
                      ].join(" ")}
                    />
                    {errors.description && (
                      <p id="desc-error" className="font-body text-xs text-[#b3261e]" role="alert">{errors.description}</p>
                    )}
                  </div>

                  {/* Preferred contact */}
                  <div className="flex flex-col gap-2">
                    <p className="font-body text-sm font-semibold text-[#22242a]">Preferred Contact Method</p>
                    <div className="flex gap-4">
                      {["phone", "email", "text"].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleChange}
                            className="accent-[#b01e24]"
                          />
                          <span className="font-body text-sm text-[#3a3d42] capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Reassurance */}
                  <p className="font-body text-xs text-[#8a8d91] italic">
                    Dustin personally reviews every request — expect a fast callback.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 bg-[#b01e24] text-white font-body font-semibold text-base px-8 py-4 rounded-[12px] hover:bg-[#7e1419] transition-all duration-200 disabled:opacity-60 shadow-[0_0_0_0_rgba(200,160,106,0)] hover:shadow-[0_0_20px_4px_rgba(200,160,106,0.3)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#b01e24]"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {loading ? "Sending..." : "Request My Free Quote"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact rail */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-[#22242a] rounded-[16px] p-6 flex flex-col gap-5">
                <h2 className="font-display text-h3 font-bold text-[#faf7f2]">
                  Or just call Dustin.
                </h2>

                <a
                  href="tel:7636881248"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#b01e24] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-body font-bold text-[#faf7f2] text-lg group-hover:text-[#c8a06a] transition-colors">
                      (763) 688-1248
                    </p>
                    <p className="font-body text-xs text-[#8a8d91]">By appointment · always reachable</p>
                  </div>
                </a>

                <a href="mailto:thielmasonry@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-full bg-[#3a3d42] flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#8a8d91] group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-body text-sm text-[#8a8d91] group-hover:text-[#faf7f2] transition-colors break-all">
                    thielmasonry@gmail.com
                  </p>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#3a3d42] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#8a8d91]" />
                  </div>
                  <div className="font-body text-sm text-[#8a8d91]">
                    <p>15441 Oliva St SE</p>
                    <p>Becker, MN 55308</p>
                  </div>
                </div>

                <a
                  href="https://facebook.com/ThielMasonryRestoration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-full bg-[#3a3d42] flex items-center justify-center flex-shrink-0">
                    <FacebookIcon size={18} className="text-[#8a8d91] group-hover:text-[#4267B2] transition-colors" />
                  </div>
                  <p className="font-body text-sm text-[#8a8d91] group-hover:text-[#faf7f2] transition-colors">
                    facebook.com/ThielMasonryRestoration
                  </p>
                </a>
              </div>

              <div className="bg-[#e7e0d6] rounded-[12px] p-5 border border-[#d8d0c4]">
                <p className="font-subhead font-medium text-[#22242a] mb-1">Fast callbacks. Honest quotes.</p>
                <p className="font-body text-sm text-[#5a5e64]">
                  No pressure, no upsell. Dustin tells you exactly what your project needs — and what it costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
