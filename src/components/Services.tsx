import { motion, useMotionValue, useTransform } from 'motion/react';
import { Search, Megaphone, Share2, Globe, Lightbulb, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const services = [
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Boost your search rankings and drive organic traffic with our proven SEO strategies.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Megaphone,
    title: 'PPC Marketing',
    description: 'Maximize ROI with targeted paid advertising campaigns across all major platforms.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage audiences on social media platforms.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Web Design',
    description: 'Create stunning, high-converting websites with exceptional user experiences.',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Lightbulb,
    title: 'Branding & Strategy',
    description: 'Develop a powerful brand identity and strategic marketing roadmap.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Create compelling content that attracts, engages, and converts your audience.',
    gradient: 'from-pink-500 to-rose-500'
  }
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.05, z: 50 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / 10);
        y.set((e.clientY - centerY) / 10);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer bg-white border-0 shadow-lg overflow-hidden relative">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
        
        <CardContent className="p-8 relative z-10">
          <motion.div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <h3 className="mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.description}</p>
          
          <motion.div 
            className="mt-6 text-blue-600 inline-flex items-center gap-2"
            whileHover={{ x: 5 }}
          >
            Learn more →
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-600 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Full-Service Digital Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive strategies to help your business grow and thrive online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}