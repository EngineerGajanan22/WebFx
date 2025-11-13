import { motion } from 'motion/react';
import { Award, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '12+ Years Experience',
    description: 'Over a decade of delivering exceptional digital marketing results for businesses worldwide.',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Users,
    title: '450+ Happy Clients',
    description: 'Trusted by hundreds of companies who have achieved their marketing goals with us.',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven Approach',
    description: 'Data-backed strategies focused on measurable outcomes and continuous optimization.',
    gradient: 'from-orange-600 to-red-600'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-purple-50 border border-purple-200 text-purple-600 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Why Choose Us
          </motion.div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
            Your Trusted Marketing Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with a team that's committed to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`inline-flex w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.gradient} items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-shadow duration-300`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative line */}
        <motion.div 
          className="mt-16 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </section>
  );
}