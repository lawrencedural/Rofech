import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import BrandSeal from '../components/common/BrandSeal';

const About = () => {
  const ref = useRef(null);
  const processRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with design solutions that blend form and function.'
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
      description: 'Final walkthrough and handover of your completed space.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-rofech-ink text-rofech-limewash">
        <div className="section-container">
          <p className="eyebrow-on-dark mb-5">Est. 2009 — Metro Manila, PH</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-rofech-limewash"
          >
            About Rofech
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-rofech-stone max-w-2xl"
          >
            Fifteen years spent working out how houses should sit under
            Philippine sun and rain.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-4">Our Story</p>
              <h2 className="mb-6">A studio built around climate</h2>
              <div className="space-y-4 text-rofech-ink-soft leading-relaxed">
                <p>
                  ROFECH design &amp; development was founded on a single idea:
                  that tropical living and contemporary architecture aren't
                  in tension — they're the same problem, solved well. Based
                  in the Philippines, we've spent over 15 years refining
                  that approach.
                </p>
                <p>
                  Every project starts with orientation, airflow, and light,
                  then builds outward in materials suited to the climate:
                  timber, concrete, and stone that age honestly in humidity
                  and rain.
                </p>
                <p>
                  From concept to completion, we guide clients through the
                  full process ourselves, so the design intent survives all
                  the way to handover.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="frame aspect-[4/5]">
                <img
                  src="/images/pic-2-rofech.jpg"
                  alt="ROFECH project detail"
                  className="w-full h-full object-cover"
                />
                <div className="corner-tl" />
                <div className="corner-br" />
              </div>
              <div className="plate p-6 max-w-xs mt-[-3rem] ml-6 relative bg-rofech-limewash">
                <p className="font-heading text-2xl mb-1">15+ years</p>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-concrete">
                  In tropical modern architecture
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="section-padding bg-rofech-paper">
        <div className="section-container">
          <SectionTitle
            eyebrow="Philosophy"
            title="Design that responds to place"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-xl text-rofech-ink leading-relaxed mb-6">
              We design spaces that respond to their environment while
              reflecting the people who live in them. Our tropical modern
              language centers on natural light, cross-ventilation, and a
              close relationship between indoor and outdoor rooms.
            </p>
            <p className="text-lg text-rofech-ink-soft leading-relaxed">
              Every project is a dialogue between architect and client —
              the result should feel both timeless and specific to the
              family that commissioned it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <SectionTitle eyebrow="Principles" title="What guides the work" />

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rofech-ink/10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-rofech-limewash p-7"
              >
                <h3 className="font-heading text-xl mb-3">{value.title}</h3>
                <p className="text-rofech-ink-soft text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Standards */}
      <section className="section-padding bg-rofech-paper">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Practice Standards</p>
              <h2 className="mb-8">How we're accountable</h2>

              <div className="space-y-0">
                {[
                  {
                    title: 'Licensed architects of record',
                    detail: 'Every project is designed and sealed by PRC-registered architects, in accordance with RA 9266.',
                  },
                  {
                    title: 'Permit-ready documentation',
                    detail: 'Construction drawings are prepared to LGU and building-code submission standard, not just presentation quality.',
                  },
                  {
                    title: 'Site-present construction administration',
                    detail: 'The design team conducts regular site visits through the build, not a one-time handoff to a separate contractor.',
                  },
                  {
                    title: 'UAP-affiliated practice',
                    detail: 'We hold membership with the United Architects of the Philippines and follow its code of ethics.',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex gap-6 py-6 border-t border-rofech-ink/10 last:border-b"
                  >
                    <span className="font-mono text-xs text-rofech-ink/50 font-medium mt-1 shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading text-lg mb-1.5">{item.title}</h3>
                      <p className="text-rofech-ink-soft text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="plate p-10 md:p-14"
              >
                <BrandSeal className="w-40 h-40 md:w-48 md:h-48 mx-auto" variant="ink" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-rofech-ink text-rofech-limewash">
        <div className="section-container">
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow-light mb-4">Sequence</p>
            <h2 className="mb-4 text-rofech-limewash">From vision to handover</h2>
            <p className="text-lg text-rofech-stone">Five stages, the same team throughout.</p>
          </div>

          <div ref={processRef} className="max-w-3xl">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                animate={isProcessInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="flex gap-6 py-7 border-t border-rofech-limewash/15 last:border-b"
              >
                <div className="flex-shrink-0">
                  <span className="font-mono text-sm text-rofech-brass-light">{step.number}</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-2">{step.title}</h3>
                  <p className="text-rofech-stone leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">Ready to start your project?</h2>
            <p className="text-lg text-rofech-ink-soft mb-8 max-w-xl mx-auto">
              Let's talk through your site, your program, and what a tropical
              modern home could look like for you.
            </p>
            <Button to="/contact">Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
