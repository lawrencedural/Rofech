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
    { label: 'Years of Experience', value: 15, suffix: '+' },
    { label: 'Projects Completed', value: 120, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
    { label: 'Industry Awards', value: 25, suffix: '+' },
  ];

  return (
    <section className="section-padding bg-rofech-black text-white">
      <div className="section-container">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-4xl md:text-6xl text-rofech-yellow mb-2">
                <CountUp end={stat.value} duration={2} isInView={isInView} />
                {stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
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

