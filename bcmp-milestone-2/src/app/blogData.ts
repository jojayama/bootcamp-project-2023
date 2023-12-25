import connectDB from "../helpers/db";
import mongoose from 'mongoose'
import Blog from "../database/blogSchema";

// export interface blogType {
//   title: string;
//   date: string;
//   description: string;
//   slug: string;
// }

// const blogs: blogType[] = [
//   {
//     title: "First Hack4Impact Project",
//     date: "October 3, 2023",
//     description: "How did my first project go?",
//     slug: "blog0"
//   },
//   {
//     title: "First Week of Bootcamp",
//     date: "October 22, 2023",
//     description: "How was the first week of bootcamp?",
//     slug: "blog1"
//   }
// ]

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
