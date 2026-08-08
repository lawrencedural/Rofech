import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const TrustIndicators = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: Stat[] = [
    { label: 'Years of Practice', value: 15, suffix: '+' },
    { label: 'Projects Completed', value: 120, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
    { label: 'Industry Awards', value: 25, suffix: '+' },
  ];

  return (
    <section className="bg-rofech-ink text-rofech-limewash border-t border-rofech-limewash/10">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="py-12 md:py-16 px-4 border-rofech-limewash/10 [&:not(:nth-child(2n))]:border-r md:[&:not(:nth-child(2n))]:border-r-0 md:[&:not(:last-child)]:border-r text-center md:text-left"
            >
              <div className="font-heading text-4xl md:text-5xl text-rofech-brass-light mb-2">
                <CountUp end={stat.value} duration={1.8} isInView={isInView} />
                {stat.suffix}
              </div>
              <div className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-stone/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter animation component
const CountUp = ({ end, duration, isInView }: { end: number; duration: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return <>{count}</>;
};

export default TrustIndicators;
