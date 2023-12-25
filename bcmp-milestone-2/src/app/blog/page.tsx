import BlogPreview from "../components/blogPreview";
import getBlogs from "../blogData";
import style from "../components/general.module.css";

export default async function Home() {
  const blogPosts = await getBlogs();
  if(blogPosts){
  return (
    <main className={style.main}>
      <h1 className={style.title}>Blogs</h1>
      <div className="blog_container">
        {blogPosts.map((blog =>
          <div key={blog._id}>
            <BlogPreview {...blog._doc} />
          </div>
        ))}
      </div>
    </main>
  );
  }
}

