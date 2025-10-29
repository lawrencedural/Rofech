import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = ''
}: ButtonProps) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const combinedClasses = `${baseClasses} ${className}`;

  const MotionButton = motion.button;
  const MotionLink = motion(Link);
  const MotionA = motion.a;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <MotionA
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </MotionA>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      className={combinedClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </MotionButton>
  );
};

export default Button;

