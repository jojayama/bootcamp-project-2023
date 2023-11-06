import React from 'react';
import { Blog } from '../blogData';
import Link from 'next/link';
import style from './general.module.css'

export default function BlogPreview({title, description, date, image, slug, width, height}: Blog) {
    return (
      <div>
        <Link className={style.a} href={`blog/${slug}`}><h3>{title} </h3></Link>
        <p className='style.publish-date'>{date}</p>
            <img src={image} alt="img" width={width} height={height}/>
        <div>
          <p>{description}</p>
        </div>
      </div>
    );
  }