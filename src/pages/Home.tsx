import Hero from '../components/home/Hero';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ServicesOverview from '../components/home/ServicesOverview';
import TrustIndicators from '../components/home/TrustIndicators';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <FeaturedProjects />
      <ServicesOverview />
      <TrustIndicators />
    </motion.div>
  );
};

export default Home;

