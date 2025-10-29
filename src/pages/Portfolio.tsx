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
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-rofech-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center text-white section-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
          >
            Our <span className="text-rofech-yellow">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300"
          >
            Discover our collection of exceptional architectural projects
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 font-heading font-bold uppercase text-xs tracking-[0.2em] transition-all duration-500 ${
                  activeFilter === category
                    ? 'bg-rofech-yellow text-rofech-black'
                    : 'bg-white text-rofech-black border-2 border-gray-200 hover:border-rofech-black hover:bg-rofech-black hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Link to={`/portfolio/${project.id}`} className="project-card block group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="project-card-overlay">
                      <div className="text-white w-full">
                        <div className="h-px w-12 bg-rofech-yellow mb-4"></div>
                        <h3 className="font-heading font-bold text-3xl mb-2 tracking-tight">{project.name}</h3>
                        <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">{project.type}</p>
                        <p className="text-sm text-gray-400 mb-1">{project.location}</p>
                        <p className="text-xs text-gray-500">{project.year}</p>
                        <div className="mt-6 inline-flex items-center gap-2 text-rofech-yellow font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
                          View Project
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-heading font-bold text-xl mb-1 tracking-tight">{project.name}</h3>
                    <p className="text-gray-500 text-sm uppercase tracking-[0.15em]">{project.type}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

