import React from 'react';
import style from './blog0.module.css'

export default function Home() {
    return (<main>
        {/* <link rel="stylesheet" href="styles.css" /> */}
        <h1>First Project!</h1>
        <p className={style.publishDate}>Date: 3 October, 2023</p>
        <div className={style.aboutFirstProj}>
            <div><img src="website_img.png" alt="My first Hack4Impact project!" width="208" height="250"></img></div>
            <div className={style.aboutProjText}>
                <p className={style.aboutProjText}>
                    So how did my first Hack4Impact project go? I would say 
                    <em>pretty</em> well! There were a few times where I struggled, such
                    as when I was trying to commit to my own personal repository. I think
                    I had such a hard time, because in my CSC 357 class this year my
                    teacher made us create a SSH for GitHub. As a result, when I tried to
                    commit to the repository, it didn't let me, because I wasn't using a
                    key. Other than that, though, everything when smoothly and I had a
                    great time designing this website!
                </p>
            </div>
        </div>
        <p className="back-button"><a href = "/blog">Back</a></p>
    </main>
    )
}
