import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = ['All', 'Residential', 'Commercial', 'Pavilion'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-rofech-ink text-rofech-limewash">
        <div className="section-container">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-on-dark mb-5"
          >
            Sheet Index
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-rofech-limewash"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-rofech-stone max-w-2xl"
          >
            A working record of homes and spaces the studio has designed and
            built across the Philippines.
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-14 border-b border-rofech-ink/15 pb-8"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest2 transition-colors duration-300 border ${
                  activeFilter === category
                    ? 'bg-rofech-ink text-rofech-limewash border-rofech-ink'
                    : 'bg-transparent text-rofech-ink-soft border-rofech-ink/20 hover:border-rofech-ink'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.08 }}
                layout
              >
                <Link to={`/portfolio/${project.id}`} className="block group">
                  <div className="frame aspect-[4/5] bg-rofech-stone">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="corner-tl" />
                    <div className="corner-br" />
                  </div>
                  <div className="mt-5 pt-4 border-t border-rofech-ink/15">
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <h3 className="font-heading text-xl">{project.name}</h3>
                      <span className="font-mono text-[11px] text-rofech-concrete shrink-0">{project.year}</span>
                    </div>
                    <p className="text-rofech-ink-soft text-sm">{project.type}</p>
                    <p className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete mt-2">
                      {project.location}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-rofech-ink-soft">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
