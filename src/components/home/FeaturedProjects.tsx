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
                    <div className="text-center text-rofech-black p-6">
                      <h3 className="font-heading font-bold text-2xl mb-2">{project.name}</h3>
                      <p className="text-sm uppercase tracking-wider mb-2">{project.type}</p>
                      <p className="text-sm">{project.location}</p>
                      <div className="mt-4 inline-block border-2 border-rofech-black px-6 py-2 font-bold uppercase text-sm hover:bg-rofech-black hover:text-rofech-yellow transition-colors">
                        View Details
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

