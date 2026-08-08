import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { services } from '../data/services';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const disciplineCode: Record<string, string> = {
  'architectural-design': 'A',
  '3d-visualization': 'V',
  'development-construction': 'DC',
  'interior-coordination': 'ID',
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-rofech-ink text-rofech-limewash">
        <div className="section-container">
          <p className="eyebrow-on-dark mb-5">Capabilities</p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-rofech-limewash"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-rofech-stone max-w-2xl"
          >
            Architectural solutions from concept to completion, held under
            one studio.
          </motion.p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <div className="max-w-3xl mb-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-xl text-rofech-ink-soft leading-relaxed"
            >
              Architectural and development services delivered by a single,
              licensed team — from concept design through permitting,
              construction administration, and handover.
            </motion.p>
          </div>

          {/* Detailed Services */}
          <div ref={ref} className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Service Info */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="font-mono text-xs font-medium text-rofech-ink border border-rofech-brass bg-rofech-brass/15 w-9 h-9 flex items-center justify-center mb-6">
                    {disciplineCode[service.id] ?? String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-3xl md:text-4xl mb-4">{service.title}</h2>
                  <p className="text-rofech-ink-soft leading-relaxed mb-8">{service.description}</p>

                  {/* Process Steps */}
                  <div>
                    <p className="eyebrow mb-5">Process</p>
                    <div>
                      {service.process.map((step, stepIndex) => (
                        <div
                          key={stepIndex}
                          className="flex items-start gap-4 py-3 border-t border-rofech-ink/10 last:border-b"
                        >
                          <span className="font-mono text-xs text-rofech-concrete mt-0.5">
                            {String(stepIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="text-rofech-ink-soft text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Service Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="frame aspect-[4/3]">
                    <img
                      src={`/images/pic-${(index % 3) + 1}-rofech.jpg`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="corner-tl" />
                    <div className="corner-br" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-rofech-paper">
        <div className="section-container">
          <SectionTitle
            eyebrow="Why Rofech"
            title="What sets the practice apart"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rofech-ink/10">
            {[
              {
                title: 'PRC-Licensed Team',
                description: 'Every drawing set is designed and sealed by registered architects, not delegated to unlicensed drafters.'
              },
              {
                title: 'Single Point of Accountability',
                description: 'One firm carries the project from schematic design through construction — no handoff between separate design and build teams.'
              },
              {
                title: 'Climate-Responsive Design',
                description: 'Passive cooling, orientation, and material choices calculated for Philippine heat and humidity, not applied as an afterthought.'
              },
              {
                title: 'Code-Compliant Documentation',
                description: 'Construction drawings are prepared to LGU permitting standard from the outset, reducing delays at application.'
              },
              {
                title: 'On-Site Construction Administration',
                description: 'Regular site visits through the build to verify the work matches the approved drawings.'
              },
              {
                title: 'Fixed-Scope Proposals',
                description: 'Defined deliverables and timelines agreed before design begins, with change orders documented in writing.'
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-rofech-paper p-7"
              >
                <h3 className="font-heading text-xl mb-3">{item.title}</h3>
                <p className="text-rofech-ink-soft text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-rofech-limewash">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">Common Questions</p>
              <h2 className="mb-4">Before you reach out</h2>
              <p className="text-rofech-ink-soft leading-relaxed">
                A few things prospective clients usually ask before their
                first consultation.
              </p>
            </div>

            <div className="lg:col-span-8">
              {[
                {
                  q: 'How long does permitting typically take?',
                  a: 'For a standard residential project, LGU permit processing runs roughly 6–10 weeks after complete document submission. We prepare drawings to submission standard from the start to avoid resubmission delays.',
                },
                {
                  q: 'Do you handle projects outside Metro Manila?',
                  a: 'Yes. We regularly take on projects across Luzon and coordinate site visits accordingly. Travel and site-supervision terms are scoped into the proposal.',
                },
                {
                  q: 'Can you work with a contractor we already have?',
                  a: 'We can design for an external contractor and provide construction-administration oversight, or handle design and build together as one scope — whichever suits the project.',
                },
                {
                  q: 'How is the fee structured?',
                  a: 'Typically as a percentage of construction cost, billed in phases tied to design milestones (schematic design, design development, construction documents, construction administration). We confirm the structure in writing before design begins.',
                },
                {
                  q: 'What do you need from us to start?',
                  a: 'A site (owned or under negotiation), a rough program and budget range, and your availability for an initial site visit and briefing. We can work with an informal wish list — you don\'t need finished requirements.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="py-6 border-t border-rofech-ink/10 last:border-b"
                >
                  <h3 className="font-heading text-lg mb-2">{item.q}</h3>
                  <p className="text-rofech-ink-soft text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-rofech-ink text-rofech-limewash">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-rofech-limewash">
              Let's build something <span className="italic text-rofech-brass-light">worth living in.</span>
            </h2>
            <p className="text-lg text-rofech-stone mb-10 max-w-xl mx-auto">
              Ready to start your architectural journey? Get in touch to
              discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="onDark">Start a Project</Button>
              <Button to="/portfolio" variant="ghostDark">View Our Work</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
