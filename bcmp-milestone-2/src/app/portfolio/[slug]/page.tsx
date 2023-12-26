"use client";
import style from '../../blog/page.module.css';
import React, {useState, useEffect} from 'react'

type Comment = {
    user: string;
    comment: string;
}

type IParams = {
		params: {
			slug: string
		}
}

export default function Home({ params: { slug } }: IParams) {
    const [isLoading, setLoading] = useState(true)
    const [portfolioData, setPortfolioData] = useState({
        projName: '',
        image: '',
        width: 0,
        height: 0,
        slug: '',
        description: '',
        comments: []
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    const submitData = async () => {
        const response = await fetch(`https://bootcamp-project-2023-beryl.vercel.app/api/blog/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatePortfolioData = await response.json();
        setPortfolioData(updatePortfolioData);

        setNewComment({
            username: '',
            comment: '',
        });
    }

    useEffect(() => {
        const fetchPortfolioData = async () => {
          const response = await fetch(`https://bootcamp-project-2023-beryl.vercel.app/api/blog/${slug}`);
          const data = await response.json();
          console.log("data", data)
          setPortfolioData(data);
          setLoading(false)
          console.log(portfolioData)
        };

        fetchPortfolioData();
      }, [slug]); 

    return(<main className = {style.main}>
        {isLoading ? (<p className={style.load}>Just a moment...</p>) :(
        <div>
        <h2>{portfolioData.projName}</h2>
        <p className = {style.content}>
            {portfolioData.description}
        </p>
        <div className = {style.comments}>
            {portfolioData.comments?.map((comment : Comment, index: number) => (
                    <div key = {index} className = {style.comment}> 
                        <p className = {style.user}>{comment.user}</p>
                        <p>{comment.comment}</p>
                    </div>
            ))}
            <div className = {style.commentForm}>
                <form className = {style.totalForm}>
                    <div className = {style.formElement}>
                    <label>Name:   </label>
                    <textarea id="userName" className={style.userName} 
                        onChange={(e) => setNewComment({ ...newComment, username: e.target.value })}
                        required/>
                    </div>
                    <div className = {style.formElement}>
                    <label>Comment:   </label>
                    <textarea className= {style.userComment}
                        onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                        required/>
                    </div>
                    <div className = {style.formElement}>
                        <button type="button" className={style.submitButton} onClick={submitData}>Submit Comment</button>
                    </div>
                </form>
            </div>
        </div>
        </div>)}
        </main>
    )
}