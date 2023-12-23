import BlogPreview from "../components/blogPreview";
import getBlogs from "../blogData";
import style from "../components/general.module.css";

export default async function Blog() {
  const blogPosts = await getBlogs();
  return (
    <main className={style.main}>
      <div className="blog_container">
        {blogPosts && blogPosts.map((blog =>
          <div key={blog}>
            <BlogPreview {...blog} />
          </div>
        ))}
      </div>
    </main>
  );
}

