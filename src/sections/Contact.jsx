import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiInstagram, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { artistConfig } from '../data/config';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate database write / mail submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-canvas-light dark:bg-canvas-dark transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-terracotta dark:text-gold font-sans text-xs tracking-[0.4em] font-semibold uppercase mb-3 block">
            Collaboration
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide text-customText-light dark:text-customText-dark">
            {artistConfig.contact.title}
          </h2>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Contact Details Board (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <p className="font-sans text-sm leading-relaxed opacity-75 tracking-wide mb-4">
              Whether you are looking to commission custom canvas paintings, inquire about ceramics collections, schedule caricature stalls, or just talk about printmaking, feel free to write.
            </p>
            
            <div className="flex flex-col gap-6 text-sm">
              {/* Phone Line */}
              <div className="flex items-center gap-5 py-2 border-b border-terracotta/10 pb-4">
                <div className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center text-terracotta dark:text-gold">
                  <FiPhone className="text-sm" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest opacity-50 uppercase font-semibold">Phone Call</p>
                  <a href={`tel:${artistConfig.contact.phone}`} className="font-medium tracking-wider hover:text-terracotta dark:hover:text-gold transition-colors mt-0.5 block">
                    {artistConfig.contact.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Chat Line */}
              <div className="flex items-center gap-5 py-2 border-b border-terracotta/10 pb-4">
                <div className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center text-green-500">
                  <FaWhatsapp className="text-base" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest opacity-50 uppercase font-semibold">WhatsApp Chat</p>
                  <a 
                    href={`https://wa.me/${artistConfig.contact.whatsapp.replace('+', '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium tracking-wider hover:text-green-500 transition-colors mt-0.5 block"
                  >
                    {artistConfig.contact.whatsapp}
                  </a>
                </div>
              </div>

              {/* Email Line */}
              <div className="flex items-center gap-5 py-2 border-b border-terracotta/10 pb-4">
                <div className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center text-terracotta dark:text-gold">
                  <FiMail className="text-sm" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest opacity-50 uppercase font-semibold">Email Address</p>
                  <a href={`mailto:${artistConfig.contact.email}`} className="font-medium tracking-wider hover:text-terracotta dark:hover:text-gold transition-colors break-all mt-0.5 block">
                    {artistConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Instagram Profile Line */}
              <div className="flex items-center gap-5 py-2">
                <div className="w-10 h-10 rounded-full border border-terracotta/20 dark:border-gold/20 flex items-center justify-center text-terracotta dark:text-gold">
                  <FiInstagram className="text-sm" />
                </div>
                <div>
                  <p className="text-[9px] tracking-widest opacity-50 uppercase font-semibold">Instagram Feed</p>
                  <a 
                    href={artistConfig.contact.instagramLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium tracking-wider hover:text-terracotta dark:hover:text-gold transition-colors mt-0.5 block"
                  >
                    {artistConfig.contact.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Premium underline-only Contact Form (Right) */}
          <div className="lg:col-span-7 bg-white dark:bg-paper-dark border border-terracotta/10 dark:border-gold/10 p-6 md:p-12 shadow-sm relative overflow-hidden">
            
            {/* Fine framing border details */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-terracotta/30 dark:border-gold/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-terracotta/30 dark:border-gold/30" />

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-terracotta/10 dark:bg-gold/10 flex items-center justify-center text-terracotta dark:text-gold mx-auto mb-6">
                    <FiMessageSquare className="text-xl" />
                  </div>
                  <h3 className="font-serif text-2xl font-light tracking-wide mb-3 text-customText-light dark:text-customText-dark">
                    Message Dispatched
                  </h3>
                  <p className="font-sans text-xs opacity-60 max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been sent directly to Khushi. She will review your request and follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 border border-terracotta dark:border-gold hover:bg-terracotta hover:text-white dark:hover:bg-gold dark:hover:text-black font-sans text-[10px] tracking-[0.2em] uppercase py-3 px-8 transition-all duration-300 font-semibold"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="name" className="font-sans text-[9px] tracking-wider uppercase opacity-55 font-bold">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-terracotta/20 dark:border-gold/20 py-2.5 px-0 text-xs font-sans focus:outline-none focus:border-terracotta dark:focus:border-gold transition-colors text-customText-light dark:text-customText-dark rounded-none"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label htmlFor="email" className="font-sans text-[9px] tracking-wider uppercase opacity-55 font-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-transparent border-b border-terracotta/20 dark:border-gold/20 py-2.5 px-0 text-xs font-sans focus:outline-none focus:border-terracotta dark:focus:border-gold transition-colors text-customText-light dark:text-customText-dark rounded-none"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="subject" className="font-sans text-[9px] tracking-wider uppercase opacity-55 font-bold">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-terracotta/20 dark:border-gold/20 py-2.5 px-0 text-xs font-sans focus:outline-none focus:border-terracotta dark:focus:border-gold transition-colors text-customText-light dark:text-customText-dark rounded-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label htmlFor="message" className="font-sans text-[9px] tracking-wider uppercase opacity-55 font-bold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-transparent border-b border-terracotta/20 dark:border-gold/20 py-2.5 px-0 text-xs font-sans focus:outline-none focus:border-terracotta dark:focus:border-gold transition-colors text-customText-light dark:text-customText-dark resize-none rounded-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-terracotta dark:border-gold bg-terracotta dark:bg-gold text-white dark:text-black hover:bg-transparent hover:text-customText-light dark:hover:text-customText-dark font-sans text-[10px] tracking-[0.25em] uppercase py-4 px-8 transition-all duration-300 font-bold disabled:opacity-50 hover:translate-y-[-2px] active:translate-y-0 shadow-sm"
                  >
                    {loading ? "Sending Message..." : "Submit Message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
