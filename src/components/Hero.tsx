import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, FileText, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Glassmorphism Navigation */}
      <motion.nav
        className="relative z-50 px-6 py-4 backdrop-blur-md bg-white/70 border-b border-gray-200/50 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white">WFX</span>
            </div>
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-gray-700">
            <a href="#services" className="hover:text-blue-600 transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#why-us" className="hover:text-blue-600 transition-colors relative group">
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#case-studies" className="hover:text-blue-600 transition-colors relative group">
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#testimonials" className="hover:text-blue-600 transition-colors relative group">
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all">
            Get Started
          </Button>
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 text-blue-600 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              #1 Digital Marketing Agency
            </motion.div>
            
            <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Grow Your Business With Data-Driven Digital Marketing
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We help brands improve visibility, generate leads, and scale with proven marketing strategies.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl gap-2 transition-all">
                  Get Free Proposal
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 gap-2 transition-all">
                  <FileText className="w-5 h-5" />
                  See Case Studies
                </Button>
              </motion.div>
            </div>

            {/* Stats badges */}
            <motion.div
              className="mt-12 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1,200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">$3B+</div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md border border-gray-200">
                <div className="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">94%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Enhanced 3D Marketing Graphic Illustration */}
            <div className="relative">
              <svg viewBox="0 0 600 600" className="w-full h-auto drop-shadow-2xl">
                {/* Gradient definitions */}
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Background circles with gradient */}
                <circle cx="300" cy="300" r="250" fill="url(#blueGrad)" opacity="0.1" />
                <circle cx="300" cy="300" r="200" fill="url(#purpleGrad)" opacity="0.1" />
                
                {/* Chart bars with shadows */}
                <motion.g filter="url(#glow)">
                  <motion.rect
                    x="180" y="320" width="60" height="140" rx="8" fill="url(#blueGrad)"
                    initial={{ height: 0, y: 460 }}
                    animate={{ height: 140, y: 320 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  />
                  <motion.rect
                    x="270" y="250" width="60" height="210" rx="8" fill="url(#blueGrad)"
                    initial={{ height: 0, y: 460 }}
                    animate={{ height: 210, y: 250 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                  />
                  <motion.rect
                    x="360" y="200" width="60" height="260" rx="8" fill="url(#purpleGrad)"
                    initial={{ height: 0, y: 460 }}
                    animate={{ height: 260, y: 200 }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  />
                </motion.g>
                
                {/* Floating success badge */}
                <motion.g
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx="450" cy="200" r="35" fill="#10B981" filter="url(#glow)" />
                  <path d="M 440 200 L 448 208 L 460 192" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </motion.g>
                
                {/* Floating notification */}
                <motion.g
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <rect x="120" y="230" width="80" height="40" rx="20" fill="white" filter="url(#glow)" />
                  <circle cx="140" cy="250" r="8" fill="#F59E0B" />
                  <text x="155" y="255" fill="#374151" fontSize="14">+247%</text>
                </motion.g>
                
                {/* Arrow trending up with animation */}
                <motion.path
                  d="M 100 400 Q 200 350 300 320 T 500 200"
                  stroke="#EF4444" strokeWidth="4" fill="none"
                  strokeDasharray="8,8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                />
                <motion.polygon
                  points="500,200 490,210 510,210"
                  fill="#EF4444"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}