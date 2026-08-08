import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import SectionTitle from '../common/SectionTitle';

// Discipline codes in the spirit of a drawing set's sheet index
// (A — Architectural, ID — Interior Design, etc.)
const disciplineCode: Record<string, string> = {
  'architectural-design': 'A',
  '3d-visualization': 'V',
  'development-construction': 'DC',
  'interior-coordination': 'ID',
};

const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-rofech-paper">
      <div className="section-container">
        <SectionTitle
          eyebrow="Capabilities"
          title="What we take on"
          subtitle="Four disciplines, one studio — from the first sketch to the final walkthrough."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rofech-ink/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-rofech-paper p-8 flex flex-col h-full"
            >
              <span className="font-mono text-xs font-medium text-rofech-ink border border-rofech-brass bg-rofech-brass/15 w-9 h-9 flex items-center justify-center mb-6">
                {disciplineCode[service.id] ?? String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-heading text-xl mb-3">{service.title}</h3>
              <p className="text-rofech-ink-soft text-sm leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <Link
                to="/services"
                className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-ink inline-flex items-center gap-2 hover:text-rofech-brass hover:gap-3 transition-all duration-300 mt-auto"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
