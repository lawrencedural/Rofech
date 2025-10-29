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
          <h1 className="text-4xl font-heading font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="btn-primary inline-block">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Image */}
      <section className="relative h-[70vh] overflow-hidden bg-black">
        <motion.img
          key={selectedImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={project.images[selectedImage]}
          alt={project.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </section>

      {/* Image Thumbnails */}
      <section className="bg-gray-100 py-4">
        <div className="section-container">
          <div className="flex gap-4 justify-center overflow-x-auto">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-24 h-24 overflow-hidden transition-all ${
                  selectedImage === index ? 'ring-4 ring-rofech-yellow' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={image} alt={`${project.name} view ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/portfolio" className="text-gray-500 hover:text-rofech-yellow transition-colors">
                    ← Back to Portfolio
                  </Link>
                </div>

                <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{project.name}</h1>
                <p className="text-xl text-gray-600 mb-8">{project.type}</p>

                <div className="prose prose-lg max-w-none mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-4">Design Philosophy</h2>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                <div className="mb-12">
                  <h2 className="font-heading font-bold text-2xl mb-6">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-rofech-yellow text-xl mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading font-bold text-2xl mb-6">Materials</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.materials.map((material, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="bg-gray-100 px-4 py-2 text-sm text-gray-700"
                      >
                        {material}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 p-8 sticky top-24"
              >
                <h3 className="font-heading font-bold text-xl mb-6">Project Specs</h3>
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-300 pb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Location</span>
                    <span className="text-lg font-medium">{project.location}</span>
                  </div>
                  <div className="border-b border-gray-300 pb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Year</span>
                    <span className="text-lg font-medium">{project.year}</span>
                  </div>
                  <div className="border-b border-gray-300 pb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Area</span>
                    <span className="text-lg font-medium">{project.area}</span>
                  </div>
                  <div className="pb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Category</span>
                    <span className="text-lg font-medium">{project.category}</span>
                  </div>
                </div>

                <Button to="/contact" className="w-full text-center">
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

