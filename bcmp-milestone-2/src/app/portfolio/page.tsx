import React, { useState, useEffect } from 'react';
import getPortfolios from '../portfolioData'; 
import style from '../components/general.module.css';
import PortfolioPreview from '../components/portfolioPreview';

export default async function Portfolio(){
  const portfolioPosts = await getPortfolios();
  console.log(portfolioPosts)
    return (
    <main className={style.main}>
      <h1 className={style.title}>Portfolio</h1>
      <div className="blog_container">
        {portfolioPosts && portfolioPosts.map((portfolio) => (
          <div key={portfolio._id}>
            <PortfolioPreview 
            key ={portfolio.title}
            projName={portfolio.title}
            image={portfolio.image}
            width={portfolio.width}
            height={portfolio.height}
            slug={portfolio.slug}
            description={portfolio.description}
            comments={portfolio.comment}
            />
          </div>
          )
        )}
      </div>
    </main>
  );
}