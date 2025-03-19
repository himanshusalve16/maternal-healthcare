import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({
  title,
  subtitle,
  image,
  imageAlt,
  children,
  footer,
  to,
  onClick,
  className = '',
  titleSize = 'h4',
  shadow = 'md',
  hover = false,
  borderRadius = 'md',
  ...rest
}) => {
  // Shadow options
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg'
  };
  
  // Border radius options
  const borderRadiusClasses = {
    none: 'rounded-0',
    sm: 'rounded',
    md: 'rounded-3',
    lg: 'rounded-4',
    full: 'rounded-circle'
  };
  
  const cardClasses = `
    card
    border-0
    ${shadowClasses[shadow] || shadowClasses.md}
    ${borderRadiusClasses[borderRadius] || borderRadiusClasses.md}
    ${hover ? 'transition-transform hover:scale-105' : ''}
    ${className}
  `;
  
  // Determine title element based on titleSize
  const TitleElement = titleSize || 'h4';

  const cardContent = (
    <>
      {image && (
        <div className={`card-img-top ${borderRadius === 'none' ? 'rounded-top-0' : 'rounded-top'} overflow-hidden`}>
          <img 
            src={image} 
            alt={imageAlt || title || 'Card image'} 
            className="w-100 h-auto" 
          />
        </div>
      )}
      
      <div className="card-body">
        {title && (
          <TitleElement className="card-title">
            {title}
          </TitleElement>
        )}
        
        {subtitle && (
          <h6 className="card-subtitle mb-3 text-muted">
            {subtitle}
          </h6>
        )}
        
        {children && <div className="card-text">{children}</div>}
      </div>
      
      {footer && <div className="card-footer bg-transparent border-top-0">{footer}</div>}
    </>
  );
  
  // If card is clickable (has 'to' prop), render as Link
  if (to) {
    return (
      <Link 
        to={to} 
        className={`${cardClasses} text-decoration-none text-inherit h-100`}
        {...rest}
      >
        {cardContent}
      </Link>
    );
  }
  
  // If card has onClick handler
  if (onClick) {
    return (
      <div 
        className={`${cardClasses} cursor-pointer h-100`} 
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick(e);
          }
        }}
        {...rest}
      >
        {cardContent}
      </div>
    );
  }
  
  // Default non-interactive card
  return (
    <div className={`${cardClasses} h-100`} {...rest}>
      {cardContent}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  children: PropTypes.node,
  footer: PropTypes.node,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  titleSize: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  hover: PropTypes.bool,
  borderRadius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
};

export default Card; 