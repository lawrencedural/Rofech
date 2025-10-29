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
                className={`px-6 py-3 font-heading font-bold uppercase text-sm tracking-wider transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-rofech-yellow text-rofech-black'
                    : 'bg-white text-rofech-black border-2 border-rofech-black hover:bg-rofech-black hover:text-white'
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
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="project-card-overlay">
                      <div className="text-center text-rofech-black p-6">
                        <h3 className="font-heading font-bold text-2xl mb-2">{project.name}</h3>
                        <p className="text-sm uppercase tracking-wider mb-2">{project.type}</p>
                        <p className="text-sm mb-1">{project.location}</p>
                        <p className="text-sm">{project.year}</p>
                        <div className="mt-4 inline-block border-2 border-rofech-black px-6 py-2 font-bold uppercase text-sm hover:bg-rofech-black hover:text-rofech-yellow transition-colors">
                          View Details
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-heading font-bold text-xl mb-1">{project.name}</h3>
                    <p className="text-gray-600 text-sm">{project.type}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
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

