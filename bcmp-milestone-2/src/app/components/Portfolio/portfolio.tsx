import React from 'react';
import portfolios from '@/app/components/Portfolio/projects'; 
import Style from '@/components/Portfolio/portfolio.module.css'
import Link from 'next/link';

const PortfolioSection: React.FC = () => {
  return (
    <section className={Style.portfolioContainer}>
          {portfolios.map((project, index) => (
          <div key={index} className={Style.project}>
            <h2>{project.projName}</h2>
            <p>{project.description}</p>
            <Link href={project.slug}>
            View Project
            </Link>
          </div>
        ))}
        </section>
  );
};

export default PortfolioSection;