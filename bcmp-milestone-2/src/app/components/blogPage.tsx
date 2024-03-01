import React from 'react';
import Image from 'next/image';
import style from './blogPreview.module.css';

type Comment = {
    user: string;
    comment: string;
    time: Date;
}
type Blog = {
    title: string;
    slug: string;
    date: string;
    description: string;
    content: string;
    image: string;
    width: string;
    height: string;
    comments: Comment[];
}

  export default function blogPage(props: Blog) {
    return (
          // replace everything between the <div> & </div> tags
          // with your code from earlier milestones
          <main className = {style.main}>
          <h2>{props.title}</h2>
          <h3>Date: {props.date}</h3>
          <Image src={props.image} alt="blog-image" width = {140} height = {200}/>
          <p>{props.content}
          </p>
          <div className = {style.comments}>
              {props.comments.map((comment, index) => (
                      <div key = {index} className = {style.comment}> 
                          <p className = {style.user}>{comment.user}</p>
                          <p>{comment.comment}</p>
                      </div>
                  ))}
          </div>
          </main>
    );
  }