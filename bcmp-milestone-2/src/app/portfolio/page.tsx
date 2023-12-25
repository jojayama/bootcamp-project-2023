import React from 'react';
import getPortfolios from './portfolioData'; 
import style from '../components/general.module.css';
import PortfolioPreview from '../components/portfolioPreview';

export default async function Home(){
  const portfolioPosts = await getPortfolios()
  console.log(portfolioPosts)
  if(portfolioPosts){
    return (
    <main className={style.main}>
      <h1 className={style.title}>Portfolio</h1>
      <div className="blog_container">
        {portfolioPosts.map((portfolio) => (
          <div key={portfolio._id}>
            <PortfolioPreview {...portfolio._doc}
            />
          </div>
          )
        )}
      </div>
    </main>
  );
}else if(!portfolioPosts){
  <main>
    <p>No portfolio projects found...</p>
  </main>
}
}