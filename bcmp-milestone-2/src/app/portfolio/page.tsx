import React from 'react';
import stye from './portfolio.module.css'

export default function Home() {
    return (<main>
        <h1 className="page-title">Portfolio</h1>
        <div className="project">
            <a href="index.html"><img src="website_img.png" alt="This is what the index page of my website looks like!" width="425" height="500"></img></a>
            <div className="project-details">
                <p className="project-name">
                <h2>Creating a Website</h2>
                </p>
                <p className="project-details">
                    In this project, we created a <em>website</em> that introduced ourselves and some of the experience we had! We created a <strong>blog page, index page, portfolio, resume</strong> and a <strong>contact page</strong>. We also learned to include <strong>images, links</strong> and <strong>lists</strong>!
                </p>
                <a href="index.html">LEARN MORE</a>
            </div>
        </div>
    </main>
    )
}