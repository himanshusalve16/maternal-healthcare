import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  type, 
  to, 
  href, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  disabled = false, 
  className = '',
  iconLeft,
  iconRight,
  ...rest 
}) => {
  // Button sizes
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };
  
  // Button variants
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    outline: 'btn-outline-primary',
    outlineSecondary: 'btn-outline-secondary',
    outlineAccent: 'border border-accent text-accent hover:bg-accent hover:text-white',
    link: 'btn-link',
    danger: 'bg-danger text-white'
  };
  
  const classes = `
    btn
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${fullWidth ? 'w-100' : ''}
    ${className}
  `;
  
  const content = (
    <>
      {iconLeft && <span className="me-2">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ms-2">{iconRight}</span>}
    </>
  );
  
  // Render as a link if 'to' prop is provided (internal link)
  if (to) {
    return (
      <Link 
        to={to} 
        className={classes} 
        {...rest}
      >
        {content}
      </Link>
    );
  }
  
  // Render as an anchor tag if 'href' prop is provided (external link)
  if (href) {
    return (
      <a 
        href={href} 
        className={classes} 
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {content}
      </a>
    );
  }
  
  // Otherwise render as a button
  return (
    <button 
      type={type || 'button'} 
      className={classes} 
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'primary', 
    'secondary', 
    'accent', 
    'outline',
    'outlineSecondary',
    'outlineAccent',
    'link',
    'danger'
  ]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node
};

export default Button; 