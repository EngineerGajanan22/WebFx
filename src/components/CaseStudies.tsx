import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const caseStudies = [
  {
    company: 'TechStart SaaS',
    image: 'https://images.unsplash.com/photo-1622131815526-eaae1e615381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYzMDA5NzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '300% Increase in Organic Traffic in 3 Months',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    company: 'E-Commerce Retail',
    image: 'https://images.unsplash.com/photo-1693159682660-c125e71844d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG9mZmljZSUyMHNwYWNlfGVufDF8fHx8MTc2MzAxMTEyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '500% ROI on PPC Campaigns Within 6 Months',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    company: 'Healthcare Provider',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjMwMTExMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    result: '280% More Qualified Leads in 4 Months',
    gradient: 'from-orange-600 to-red-600'
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-20 left-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-20" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-orange-50 border border-orange-200 text-orange-600 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Success Stories
          </motion.div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text text-transparent">
            Real Results from Real Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses achieve remarkable growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden bg-white border-0 shadow-lg">
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Floating badge */}
                  <motion.div
                    className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${study.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <TrendingUp className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white mb-2">{study.company}</h3>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <p className="text-gray-900 leading-relaxed">
                      {study.result}
                    </p>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-blue-600 group-hover:text-blue-700"
                    whileHover={{ x: 5 }}
                  >
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}