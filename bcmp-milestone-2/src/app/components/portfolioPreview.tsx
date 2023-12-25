import React from 'react';
import Link from 'next/link';
import style from './general.module.css';
import Image from 'next/image';
import {useState, useEffect} from 'react';

type Comment = {
  user: string;
  comment: string;
}
type Portfolio = {
  projName: string;
  image: string;
  width: string;
  height: string;
  slug: string; 
  description: string; // for preview
  comments: Comment[];
};

export default function PortfolioPreview(props: Portfolio) {
  return (
    <div>
      <Link href={`/portfolio/${props.slug}`}>
        <a className={style.link}>
          <h3>{props.projName}</h3>
        </a>
      </Link>
      <Image src={props.image} alt="img" width={208} height={200} />
      <div>
        <p>{props.description}</p>
      </div>
      </div>
  );
}
