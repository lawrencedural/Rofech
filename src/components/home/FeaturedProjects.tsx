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
    <section className="section-padding bg-rofech-limewash">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20">
          <SectionTitle
            eyebrow="Selected Work"
            title="Featured projects"
            subtitle="A sample of recent residences designed and built by the studio."
          />
          <Link
            to="/portfolio"
            className="hidden md:inline-flex font-mono text-xs uppercase tracking-widest2 items-center gap-2 border border-rofech-ink px-6 py-3 mb-14 hover:bg-rofech-ink hover:text-rofech-limewash transition-colors duration-300"
          >
            View all projects →
          </Link>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
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
                  <h3 className="font-heading text-xl mb-2">{project.name}</h3>
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link to="/portfolio" className="btn-secondary inline-flex">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
