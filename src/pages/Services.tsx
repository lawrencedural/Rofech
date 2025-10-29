import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rofech-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center text-white section-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
          >
            Our <span className="text-rofech-yellow">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive architectural solutions from concept to completion
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              At ROFECH, we offer a complete suite of architectural and design services tailored to bring
              your vision to life. From initial concept to final construction, our team guides you through
              every step of the process with expertise and attention to detail.
            </motion.p>
          </div>

          {/* Detailed Services */}
          <div ref={ref} className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 border-l-4 border-rofech-yellow pl-4">{service.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">{service.description}</p>

                  {/* Process Steps */}
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-lg mb-4">Our Process:</h3>
                    {service.process.map((step, stepIndex) => (
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + stepIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-6 h-6 bg-rofech-yellow flex items-center justify-center text-rofech-black font-bold text-sm">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Service Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative h-[400px] overflow-hidden">
                    <img
                      src={`/images/pic-${(index % 3) + 1}-rofech.jpg`}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 border-4 border-rofech-yellow opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <SectionTitle
            title="Why Choose ROFECH"
            subtitle="What sets us apart in architectural design and development"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Experienced Team',
                description: 'Over 15 years of expertise in tropical modern architecture'
              },
              {
                title: 'Client-Centered',
                description: 'Your vision and satisfaction drive every decision we make'
              },
              {
                title: 'Sustainable Design',
                description: 'Eco-friendly materials and energy-efficient solutions'
              },
              {
                title: 'Full-Service',
                description: 'From design to construction, we handle it all'
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous standards ensure exceptional results'
              },
              {
                title: 'Timely Delivery',
                description: 'Projects completed on schedule and within budget'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-transparent hover:border-rofech-yellow"
              >
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-rofech-black text-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Let's Build Something <span className="text-rofech-yellow">Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to start your architectural journey? Get in touch with our team to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact">Start a Project</Button>
              <Button to="/portfolio" variant="secondary">View Our Work</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

