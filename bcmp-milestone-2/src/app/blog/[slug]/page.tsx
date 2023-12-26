"use client";
import style from '@/app/blog/page.module.css'
import BlogPreview from '@/app/components/blogPreview';
import Link from "next/link";
import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Blog from '@/database/blogSchema';
import React, {useState, useEffect} from 'react'

type IParams = {
    params: {
        slug: string
    }
}

type Comment = {
    user: string;
    comment: string;
    time: string;
}

export default function Home({ params: {slug}}: IParams) {
    const [isLoading, setLoading] = useState(true)
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
        const updatedBlogData = await response.json();
        setBlogData(updatedBlogData);

        setNewComment({
            username: '',
            comment: '',
        });
    }


    useEffect(() => {
        const fetchBlogData = async () => {
          const response = await fetch(`https://bootcamp-project-2023-beryl.vercel.app/api/blog/${slug}`);
          const data = await response.json();
          console.log("data", data)
          setBlogData(data);
          setLoading(false)
        };

        fetchBlogData();
      }, [slug]); 

    return (
    <main>
        {isLoading ? (
            <p className={style.load}>Just a moment...</p>
        ) :
        (<div>
        <h2 className={style.title}>{blogData.title}</h2>
        <h3>Date: {blogData.date}</h3>
        <p>{blogData.description}</p>
        <img src={blogData.image} width = {blogData.width} height ={blogData.height}/> 
        <p>{blogData.content}</p>
        <div className = {style.comments}>
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
        </div>)}
    </main>
    )
}