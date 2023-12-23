import React from 'react';
import Link from 'next/link';
import style from './general.module.css';
import { IBlog } from '@/database/blogSchema';
import Image from 'next/image';

export default function BlogPreview(props: IBlog) {
  return (
    <div>
      <Link className={style.link} href={`blog/${props.slug}`}>
        <h3>{props.title} </h3>
      </Link>
      <p className='style.publish-date'>{props.date}</p>
          <Image src={props.image} alt="Blog Image" width={208} height={200}/>
      <div>
        <p>{props.content}</p>
      </div>
    </div>
  );
}