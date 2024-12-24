import React from 'react';
import { ChevronRight } from 'lucide-react';

export function ServiceCard({ title, description, links, image, seeAllLink }) {
  return (
    <div className="service-card">
      <div className="service-grid">
        {image && (
          <div className="service-image">
            <img src={image} alt="" />
            </div>
        )}
        <div className="service-content">
          <div className="service-header">
            <h2 className="service-title">{title}</h2>
            <ChevronRight size={20} color="#dc2626" />
          </div>
          {description && (
            <p className="service-description">{description}</p>
          )}
          <div className="service-links">
            {links.map((link) => (
              <a key={link.title} href={link.href} className="service-link">
                <ChevronRight size={16} />
                <span>{link.title}</span>
              </a>
            ))}
          </div>
          {seeAllLink && (
            <a href={seeAllLink} className="see-all-link">
              SEE ALL {title}
              <ChevronRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;