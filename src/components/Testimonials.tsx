import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVenture Inc.',
    content: 'WebFX transformed our digital presence completely. Their SEO strategy increased our organic traffic by 340% in just 6 months. The team is professional, responsive, and truly understands our business goals.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthCo',
    content: 'The ROI we\'ve seen from our PPC campaigns is incredible. They reduced our cost per acquisition by 45% while scaling our revenue by 285%. Best marketing investment we\'ve made.',
    rating: 5,
    avatar: 'MC'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'HealthFirst Solutions',
    content: 'Working with WebFX feels like having an extension of our team. They\'re strategic, data-driven, and always go above and beyond. Our lead generation has increased by 280%.',
    rating: 5,
    avatar: 'ER'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from businesses that have achieved success with our services.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white">
                    {testimonials[currentIndex].avatar}
                  </div>
                  <div className="text-left">
                    <div className="text-gray-900">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-gray-300 hover:bg-gray-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-gray-300 hover:bg-gray-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}