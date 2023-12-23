"use client";
import Comment from "@/app/components/commentPreview";
import React, {useState, useEffect} from 'react'
import style from "@/app/components/comment.module.css"

type IParams = {
    params: {
        slug: string
    }
}



function parseCommentTime(time: Date) {
    return new Date(time).toLocaleString('en-US', {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
}
type Comment = {
    user: string;
    comment: string;
    time: string;
}

export default async function Blog({ params: {slug}}: IParams) {
    const [blogData, setBlogData] = useState({
        title: '',
        date: '',
        description: '',
        content:'',
        image: '',
        width: 0,
        height: 0,
        comments: [],
      });

    const [newComment, setNewComment] = useState({
        username: '',
        comment: '',
    });

    const submitData = async () => {
        const response = await fetch(`http://localhost:3000/api/blog/${slug}/comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: newComment.username,
            comment: newComment.comment,
        }),
        });
        const updatedBlogData = await response.json();
        setBlogData(updatedBlogData);

        setNewComment({
            username: '',
            comment: '',
        });
    }


    useEffect(() => {
        const fetchBlogData = async () => {
          const response = await fetch(`http://localhost:3000/api/blog/${slug}`);
          const data = await response.json();
          setBlogData(data);
        };

        fetchBlogData();
      }, [slug]); 

    return (
    <div>
        <h2>{blogData.title}</h2>
        <h3>Date: {blogData.date}</h3>
        <p>{blogData.description}
        </p>
        <img src={blogData.image} width = {blogData.width} height ={blogData.height}/> 
        <p>{blogData.content}</p>
        {blogData.comments?.map((comment : Comment, index: number) => (
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
    );  
}