import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const About = () => {
  const ref = useRef(null);
  const processRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge design solutions that blend form and function.'
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and materials for a better tomorrow.'
    },
    {
      title: 'Excellence',
      description: 'Delivering exceptional quality in every detail of our architectural work.'
    },
    {
      title: 'Collaboration',
      description: 'Working closely with clients to bring their vision to life.'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Initial consultation to understand your vision, needs, and project requirements.'
    },
    {
      number: '02',
      title: 'Concept',
      description: 'Development of design concepts with 3D visualizations and material boards.'
    },
    {
      number: '03',
      title: 'Design',
      description: 'Detailed architectural drawings and construction documentation.'
    },
    {
      number: '04',
      title: 'Build',
      description: 'Construction management ensuring quality and timeline adherence.'
    },
    {
      number: '05',
      title: 'Delivery',
      description: 'Final walkthrough and handover of your completed dream space.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-rofech-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-10" />
        <div className="relative z-20 text-center text-white section-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-4"
          >
            About <span className="text-rofech-yellow">ROFECH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Crafting architectural excellence since 2008
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our <span className="text-rofech-yellow">Story</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  ROFECH design & development was founded with a singular vision: to create architectural spaces
                  that seamlessly blend tropical living with contemporary design. Based in the Philippines, we've
                  spent over 15 years perfecting the art of tropical modern architecture.
                </p>
                <p>
                  Our approach combines sustainable materials, climate-responsive design, and innovative construction
                  techniques to create homes that are not just beautiful, but also functional and environmentally conscious.
                </p>
                <p>
                  From concept to completion, we guide our clients through every step of the architectural journey,
                  ensuring their vision becomes reality while maintaining the highest standards of quality and craftsmanship.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px]"
            >
              <img
                src="/images/pic-2-rofech.jpg"
                alt="ROFECH Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-rofech-yellow p-8 max-w-xs">
                <p className="font-heading font-bold text-2xl text-rofech-black">
                  15+ Years of Architectural Excellence
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <SectionTitle
            title="Design Philosophy"
            subtitle="Our approach to creating exceptional spaces"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We believe in designing spaces that respond to their environment while reflecting the unique
              personality of their inhabitants. Our tropical modern aesthetic celebrates natural light,
              ventilation, and the seamless integration of indoor and outdoor spaces.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every project is a collaboration, a dialogue between architect and client, resulting in spaces
              that are both timeless and distinctly personal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionTitle title="Our Values" />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-rofech-yellow"
              >
                <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-rofech-black text-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Our <span className="text-rofech-yellow">Process</span>
            </h2>
            <p className="text-xl text-gray-300">From vision to reality in five steps</p>
          </div>

          <div ref={processRef} className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex gap-6 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-rofech-yellow flex items-center justify-center">
                    <span className="font-heading font-bold text-2xl text-rofech-black">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl mb-2">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's collaborate to create a space that reflects your vision and exceeds your expectations.
            </p>
            <Button to="/contact">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

