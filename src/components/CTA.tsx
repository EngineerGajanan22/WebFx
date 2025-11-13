import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-600 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <Sparkles className="w-4 h-4" />
            Let's Grow Together
          </motion.div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us today and discover how we can help you achieve your marketing goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                >
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
              >
                <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="w-full min-h-32 bg-white/50 backdrop-blur-sm border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl gap-2 transition-all"
                >
                  Request a Callback
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>

              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours. 🚀
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}