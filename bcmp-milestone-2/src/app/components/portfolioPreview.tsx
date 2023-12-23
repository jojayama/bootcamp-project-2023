import React from 'react';
import Link from 'next/link';
import style from './general.module.css';
import Image from 'next/image';
import { IPortfolio } from '@/database/portfolioSchema';
import {useState, useEffect} from 'react';

export default function PortfolioPreview(props: IPortfolio) {
  return (
    <><div>
      <Link href={`/portfolio/${props.slug}`}>
        <a className={style.link}>
          <h3>{props.projName}</h3>
        </a>
      </Link>
      <Image src={props.image} alt="img" width={208} height={200} />
      <div>
        <p>{props.description}</p>
      </div>
    {/* </div><div className={style.comments}>
        {props.comments.map((comment, index) => (
          <div key={index} className={style.comment}>
            <p className={style.user}>{comment.user}</p>
            <p>{comment.comment}</p>
          </div>
        ))} */}
      </div></>
  );
}
