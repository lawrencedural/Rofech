import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import SectionTitle from '../common/SectionTitle';

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <SectionTitle
          title="Our Services"
          subtitle="Comprehensive architectural solutions from concept to completion"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-transparent hover:border-rofech-yellow flex flex-col h-full"
            >
              <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-rofech-black font-semibold text-xs uppercase tracking-wider yellow-underline inline-block pb-1 mt-auto"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

