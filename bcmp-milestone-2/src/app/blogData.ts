import connectDB from "../helpers/db";
import mongoose from 'mongoose'
import Blog from "../database/blogSchema";

async function getBlogs() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    // send a response as the blogs as the message
    return blogs;
  } catch (err) {
    return null;
  }
}
export default getBlogs;
