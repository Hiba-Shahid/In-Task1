import React from 'react';
import { ServiceCard } from './ServiceCard';

export function ServiceSection() {
  return (
    <div className="services">
      <div className="container">
        <div className="services-grid">
          <ServiceCard
            title="ADVISORY"
            description="Providing transaction, risk, and executive services to clients navigating an exceptional range of challenges, changes, and opportunities."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85r-jZs_-F36fiYG-vT0_ZXpnQWlPNSmAdg&s"
            links={[
              { title: "BUSINESS RESTRUCTURING & TURNAROUND SERVICES", href: "#" },
              { title: "BUSINESS SERVICES & OUTSOURCING", href: "#" },
              { title: "CORPORATE REAL ESTATE", href: "#" },
              { title: "FORENSICS AND INVESTIGATIONS", href: "#" },
              { title: "INSURANCE RISK & RECOVERY", href: "#" },
              { title: "LITIGATION AND DISPUTES", href: "#" },
              { title: "M&A AND TRANSACTION ADVISORY", href: "#" },
              { title: "PUBLIC HOUSING AUTHORITY", href: "#" },
              { title: "REGULATORY ENFORCEMENT", href: "#" },
              { title: "RISK ADVISORY", href: "#" },
              { title: "MANAGEMENT ADVISORY", href: "#" },
              { title: "VALUATION & BUSINESS ANALYTICS", href: "#" },
              { title: "BDO WEALTH ADVISORS", href: "#" },
            ]}
            seeAllLink="#"
          />
           <ServiceCard
            title="AUDIT & ASSURANCE"
            description="In a rapidly evolving business and regulatory environment, the right guidance is more important than ever."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVg7N_8_GpUJBxFzU6PX3wTpKlHp8Y4xGJaA&s"
            links={[
              { title: "ACCOUNTING & REPORTING ADVISORY SERVICES", href: "#" },
              { title: "AUDIT INNOVATION", href: "#" },
              { title: "PRIVATE COMPANY AUDIT", href: "#" },
              { title: "AUDIT QUALITY", href: "#" },
              { title: "CORPORATE GOVERNANCE", href: "#" },
              { title: "EMPLOYEE BENEFIT PLAN AUDITS", href: "#" },
            ]}
            seeAllLink="#"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;