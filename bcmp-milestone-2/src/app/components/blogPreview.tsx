import React from 'react';
import Link from 'next/link';
import style from './general.module.css';
import Image from 'next/image';

type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
}

export default function BlogPreview(props: Blog) {
  return (
    <div>
      <Link className={style.link} href={`blog/${props.slug}`}>
        <h3>{props.title} </h3>
      </Link>
      <p className='style.publish-date'>{props.date}</p>
          <Image src={props.image} alt="Blog Image" width={208} height={200}/>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}