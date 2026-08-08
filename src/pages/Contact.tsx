import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/common/Button';

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
  website: string; // honeypot — must stay empty; hidden from real users
}

type FormErrors = Partial<Record<keyof Omit<FormData, 'website'>, string>>;

// Same practical email pattern used server-side, so obviously invalid
// addresses are caught before a request is even sent.
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const initialFormData: FormData = {
  name: '',
  email: '',
  projectType: '',
  budget: '',
  message: '',
  website: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the person edits it.
    if (name in errors) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (data: FormData): FormErrors => {
    const next: FormErrors = {};

    if (!data.name.trim()) {
      next.name = 'Please enter your name.';
    } else if (data.name.trim().length > 100) {
      next.name = 'Name is too long.';
    }

    const trimmedEmail = data.email.trim();
    if (!trimmedEmail) {
      next.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      next.email = 'Please enter a valid email address.';
    }

    if (!data.projectType) {
      next.projectType = 'Please select a project type.';
    }

    if (!data.message.trim()) {
      next.message = 'Please tell us a bit about your project.';
    } else if (data.message.trim().length > 5000) {
      next.message = 'Message is too long (5000 characters max).';
    }

    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Honeypot tripped — a bot filled in a field real users never see.
    // Fail silently rather than tipping off the bot.
    if (formData.website.trim().length > 0) {
      setIsSubmitted(true);
      return;
    }

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          projectType: formData.projectType,
          budget: formData.budget,
          message: formData.message.trim(),
          website: formData.website,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong sending your message.');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData(initialFormData);
      }, 4000);
    } catch (error: any) {
      setSubmitError(
        error.message || 'Something went wrong. Please try again, or email us directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-24 bg-rofech-ink text-rofech-limewash">
        <div className="section-container">
          <p className="eyebrow-on-dark mb-5">Get in Touch</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-4 text-rofech-limewash"
          >
            Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-rofech-stone"
          >
            Tell us about your site and your program — we'll take it from there.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <p className="eyebrow mb-4">Project Inquiry</p>
              <h2 className="text-3xl mb-4">Start your project</h2>
              <p className="text-rofech-ink-soft mb-10">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="plate p-10 text-center"
                >
                  <div className="font-mono text-xs uppercase tracking-widest2 text-rofech-ink mb-3">Received</div>
                  <h3 className="font-heading text-2xl mb-2">Thank you</h3>
                  <p className="text-rofech-ink-soft">Your message has been sent. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  {/* Honeypot — hidden from real users, catches bots that
                      auto-fill every field. Clipped to 1px rather than
                      offset off-screen, so it can never affect page width. */}
                  <div
                    style={{
                      position: 'absolute',
                      width: '1px',
                      height: '1px',
                      padding: 0,
                      margin: '-1px',
                      overflow: 'hidden',
                      clip: 'rect(0, 0, 0, 0)',
                      whiteSpace: 'nowrap',
                      border: 0,
                    }}
                    aria-hidden="true"
                  >
                    <label htmlFor="website">Leave this field blank</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
                    <div>
                      <label htmlFor="name" className="field-label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="field-input"
                        placeholder="Juan Dela Cruz"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-xs text-red-700 mt-2">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="field-label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="field-input"
                        placeholder="juan@example.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-700 mt-2">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="projectType" className="field-label">Project Type *</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="field-input"
                        aria-invalid={!!errors.projectType}
                        aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      >
                        <option value="">Select a project type</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Consultation</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" className="text-xs text-red-700 mt-2">{errors.projectType}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="budget" className="field-label">Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="field-input"
                      >
                        <option value="">Select your budget range</option>
                        <option value="under-5m">Under ₱5M</option>
                        <option value="5m-10m">₱5M – ₱10M</option>
                        <option value="10m-20m">₱10M – ₱20M</option>
                        <option value="20m-plus">₱20M+</option>
                        <option value="not-sure">Not Sure Yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="field-label">Project Details *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      maxLength={5000}
                      className="field-input resize-none"
                      placeholder="Tell us about your site, your vision, and any specific requirements..."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-700 mt-2">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-sm text-red-700 border border-red-700/30 bg-red-50 px-4 py-3">
                      {submitError}
                    </p>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="plate p-8 mb-8">
                <p className="eyebrow mb-6">Studio</p>
                <div className="space-y-5">
                  <div className="border-b border-rofech-ink/10 pb-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete block mb-1">Office</span>
                    <span className="text-rofech-ink">Metrocor Subdivision, Marcos Alvarez Ave, Talon, Las Piñas City, Metro Manila</span>
                  </div>
                  <div className="border-b border-rofech-ink/10 pb-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete block mb-1">Email</span>
                    <a href="mailto:info@rofech.com" className="text-rofech-ink hover:text-rofech-brass transition-colors">
                      info@rofech.com
                    </a>
                  </div>
                  <div className="border-b border-rofech-ink/10 pb-4">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete block mb-1">Phone</span>
                    <a href="tel:+639123456789" className="text-rofech-ink hover:text-rofech-brass transition-colors">
                      +63 912 345 6789
                    </a>
                  </div>
                  <div>
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete block mb-1">Hours</span>
                    <span className="text-rofech-ink text-sm leading-relaxed block">
                      Mon – Fri: 9:00 AM – 6:00 PM<br />
                      Sat: 10:00 AM – 4:00 PM<br />
                      Sun: Closed
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mb-8">
                <p className="eyebrow mb-4">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-11 h-11 border border-rofech-ink/15 text-rofech-ink flex items-center justify-center hover:bg-rofech-ink hover:text-rofech-limewash transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 border border-rofech-ink/15 text-rofech-ink flex items-center justify-center hover:bg-rofech-ink hover:text-rofech-limewash transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-11 h-11 border border-rofech-ink/15 text-rofech-ink flex items-center justify-center hover:bg-rofech-ink hover:text-rofech-limewash transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="h-56 border border-rofech-ink/15 overflow-hidden grayscale-[15%] contrast-[1.05]">
                <iframe
                  title="Rofech studio location — Metrocor, Marcos Alvarez Ave, Las Piñas City"
                  src="https://www.google.com/maps?q=Metrocor+Subdivision,+Marcos+Alvarez+Ave,+Talon,+Las+Pi%C3%B1as+City,+Metro+Manila&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
