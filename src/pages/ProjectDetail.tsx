import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { getProjectById } from '../data/projects';
import Button from '../components/common/Button';

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? getProjectById(projectId) : null;
  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Project not found</h1>
          <Link to="/portfolio" className="btn-primary inline-flex">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Image */}
      <section className="relative h-[65vh] overflow-hidden bg-rofech-ink">
        <motion.img
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={project.images[selectedImage]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rofech-ink/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 section-container !px-0 md:!px-8">
          <p className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-limewash/85 bg-rofech-ink/60 backdrop-blur-sm inline-block px-3 py-1.5">
            {project.name} — {project.location} — {project.year}
          </p>
        </div>
      </section>

      {/* Image Thumbnails */}
      {project.images.length > 1 && (
        <section className="bg-rofech-paper py-4 border-b border-rofech-ink/10">
          <div className="section-container">
            <div className="flex gap-3 justify-center overflow-x-auto">
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-rofech-brass' : 'opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={image} alt={`${project.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link to="/portfolio" className="font-mono text-xs uppercase tracking-widest2 text-rofech-concrete hover:text-rofech-brass transition-colors mb-6 inline-block">
                  ← Back to Portfolio
                </Link>

                <h1 className="mb-3 text-4xl md:text-5xl">{project.name}</h1>
                <p className="text-lg text-rofech-ink-soft mb-12">{project.type}</p>

                <div className="mb-14">
                  <p className="eyebrow mb-4">Design Philosophy</p>
                  <p className="text-rofech-ink-soft leading-relaxed text-lg">{project.description}</p>
                </div>

                <div className="mb-14">
                  <p className="eyebrow mb-6">Key Features</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 pb-4 border-b border-rofech-ink/10">
                        <span className="text-rofech-ink/50 font-mono text-xs mt-1 font-medium">{String(index + 1).padStart(2, '0')}</span>
                        <span className="text-rofech-ink-soft">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="eyebrow mb-6">Materials</p>
                  <div className="flex flex-wrap gap-3">
                    {project.materials.map((material, index) => (
                      <span
                        key={index}
                        className="border border-rofech-ink/15 px-4 py-2 text-sm text-rofech-ink-soft font-mono"
                      >
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="plate p-8 sticky top-24"
              >
                <p className="eyebrow mb-6">Project Specs</p>
                <div className="mb-8">
                  <div className="flex justify-between border-b border-rofech-ink/10 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">Location</span>
                    <span className="text-sm font-medium text-right">{project.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-rofech-ink/10 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">Year</span>
                    <span className="text-sm font-medium">{project.year}</span>
                  </div>
                  <div className="flex justify-between border-b border-rofech-ink/10 py-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">Area</span>
                    <span className="text-sm font-medium">{project.area}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">Category</span>
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                </div>

                <Button to="/contact" className="w-full">
                  Start Your Project
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
