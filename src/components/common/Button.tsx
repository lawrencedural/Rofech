import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'onDark' | 'ghostDark';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const variantClass = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  onDark: 'btn-on-dark',
  ghostDark: 'btn-ghost-dark',
};

const Arrow = () => (
  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) => {
  const combinedClasses = `group ${variantClass[variant]} ${className} ${disabled ? 'opacity-50 pointer-events-none cursor-not-allowed' : ''}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        <Arrow />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
        <Arrow />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses} disabled={disabled}>
      {children}
      <Arrow />
    </button>
  );
};

export default Button;
