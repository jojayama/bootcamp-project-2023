import React from 'react';
import BlogPreview from '../components/blogPreview';
import blogs from '../blogData';

export default function Home() {
    return (<main>
        {blogs.map(blog => 
      <BlogPreview {...blog}
            /> // This is how we call the component
		)}
      </main>
    )
}