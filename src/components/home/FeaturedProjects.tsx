import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProjects } from '../../data/projects';
import SectionTitle from '../common/SectionTitle';

const FeaturedProjects = () => {
  const projects = getFeaturedProjects();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          title="Featured Projects"
          subtitle="Explore our latest architectural masterpieces"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={`/portfolio/${project.id}`} className="project-card block group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="project-card-overlay">
                    <div className="text-white w-full">
                      <div className="h-px w-12 bg-rofech-yellow mb-4"></div>
                      <h3 className="font-heading font-bold text-3xl mb-2 tracking-tight">{project.name}</h3>
                      <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-1">{project.type}</p>
                      <p className="text-sm text-gray-400">{project.location}</p>
                      <div className="mt-6 inline-flex items-center gap-2 text-rofech-yellow font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all duration-300">
                        View Project
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-xl mb-1">{project.name}</h3>
                  <p className="text-gray-600 text-sm">{project.type}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="btn-secondary inline-block"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

