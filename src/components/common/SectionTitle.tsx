import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
}

const SectionTitle = ({ eyebrow, title, subtitle, align = 'left', onDark = false }: SectionTitleProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div ref={ref} className={`mb-14 md:mb-20 max-w-3xl ${alignmentClasses}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`${onDark ? 'eyebrow-light' : 'eyebrow'} mb-4`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.6 }}
        className={onDark ? 'text-rofech-limewash' : 'text-rofech-ink'}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-base md:text-lg mt-4 leading-relaxed ${onDark ? 'text-rofech-stone' : 'text-rofech-ink-soft'} ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;
