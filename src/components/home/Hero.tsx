import { motion } from 'framer-motion';
import Button from '../common/Button';

const stats = [
  { label: 'Founded', value: '2009' },
  { label: 'Projects delivered', value: '120+' },
  { label: 'Based in', value: 'Metro Manila, PH' },
];

const Hero = () => {
  return (
    <section className="relative bg-rofech-ink text-rofech-limewash overflow-hidden pt-28 lg:pt-32">
      <div className="section-container grid grid-cols-1 lg:grid-cols-12 min-h-0 lg:min-h-[calc(100vh-2rem)]">
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col justify-center py-10 md:py-16 lg:py-0 lg:pr-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-on-dark mb-6"
          >
            Rofech Design &amp; Development — PRC-Registered — Metro Manila, PH
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-rofech-limewash mb-6 text-balance"
          >
            Architecture built for the tropics,
            <span className="italic text-rofech-brass-light"> not against them.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-rofech-stone leading-relaxed max-w-md mb-10"
          >
            We design and build homes around Manila's light, heat, and rain —
            open-plan, cross-ventilated, and detailed in timber, concrete, and
            stone. One licensed team, from permit through occupancy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14 lg:mb-16"
          >
            <Button to="/contact" variant="onDark">Start a Project</Button>
            <Button to="/portfolio" variant="ghostDark">View Portfolio</Button>
          </motion.div>

          {/* Title-block stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 border-t border-rofech-limewash/15 max-w-lg"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-r last:border-r-0 border-rofech-limewash/15 py-5 pr-4">
                <p className="font-heading text-xl md:text-2xl text-rofech-limewash mb-1">{stat.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-rofech-stone/70 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative h-[52vh] lg:h-auto -mx-6 sm:-mx-8 lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="frame absolute inset-0 lg:inset-y-0 lg:right-0 lg:w-[calc(100%+3rem)]"
          >
            <img
              src="/images/pic-1-rofech.jpg"
              alt="Villa 37 — a tropical modern residence with a timber slat facade"
              className="w-full h-full object-cover"
            />
            <div className="corner-tl" />
            <div className="corner-br" />
            <div className="absolute inset-0 bg-gradient-to-t from-rofech-ink/70 via-transparent to-transparent lg:bg-gradient-to-l lg:from-rofech-ink/0 lg:via-transparent lg:to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto">
              <p className="font-mono text-[10px] uppercase tracking-widest2 text-rofech-limewash/80 bg-rofech-ink/60 backdrop-blur-sm inline-block px-3 py-1.5">
                Villa 37 — Metro Manila — 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
