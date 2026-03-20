import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, X, Send, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_suq3iyc',      // Your Service ID
        'template_f96qucn',     // Your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '0iUbsvmLclO12JCKn'     // Your Public Key
      );

      // Success
      setSubmitStatus('success');
      setFormData({ email: '', name: '', message: '' });

      // Close form after 2 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');

      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Floating Bubble Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 group"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div
          className="relative px-6 py-4 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #6B9B7F 0%, #8BAA93 100%)',
          }}
        >
          <Mail className="w-5 h-5 text-white" />
          <span className="text-white font-semibold whitespace-nowrap">Work with me</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight className="w-5 h-5 text-white" />
          </motion.div>
        </div>
      </motion.button>

      {/* Slide-in Contact Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Form Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full md:w-[500px] z-50 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #F5F1E8 0%, #E8DCC8 100%)',
              }}
            >
              <div className="h-full overflow-y-auto p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-3xl font-bold" style={{ color: '#6B9B7F', fontFamily: 'Syne, sans-serif' }}>
                      Contact
                    </h2>
                    <p className="text-sm" style={{ color: '#B8956A' }}>
                      Let's work together
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors"
                    style={{ color: '#6B9B7F' }}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="mb-8 p-4 rounded-xl" style={{ backgroundColor: 'rgba(107, 155, 127, 0.1)' }}>
                  <p className="text-sm font-medium mb-2" style={{ color: '#6B9B7F' }}>
                    Direct Contact
                  </p>
                  <a
                    href="https://www.linkedin.com/in/julienrose/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                    style={{ color: '#B8956A' }}
                  >
                    LinkedIn: julienrose
                  </a>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#4A4A4A' }}>
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all"
                      style={{
                        borderColor: '#E8DCC8',
                        backgroundColor: 'white',
                        color: '#4A4A4A',
                      }}
                      placeholder="email.you@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#4A4A4A' }}>
                      Your full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all"
                      style={{
                        borderColor: '#E8DCC8',
                        backgroundColor: 'white',
                        color: '#4A4A4A',
                      }}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#4A4A4A' }}>
                      How can I help you?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 outline-none transition-all resize-none"
                      style={{
                        borderColor: '#E8DCC8',
                        backgroundColor: 'white',
                        color: '#4A4A4A',
                      }}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    style={{
                      background: submitStatus === 'success'
                        ? 'linear-gradient(135deg, #8BAA93 0%, #6B9B7F 100%)'
                        : submitStatus === 'error'
                        ? 'linear-gradient(135deg, #D46B6B 0%, #B85A5A 100%)'
                        : 'linear-gradient(135deg, #6B9B7F 0%, #5A8B6F 100%)',
                    }}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : submitStatus === 'success' ? (
                      '✓ Message sent!'
                    ) : submitStatus === 'error' ? (
                      '✗ Failed to send'
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Footer Note */}
                <p className="mt-6 text-xs text-center" style={{ color: '#999' }}>
                  Your message will be sent directly to corto.rose@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
