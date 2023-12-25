import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export type IBlog = {
    title: string;
  slug: string; 
    date: string;
    description: string; // for preview
  content: string; // for individual blog page
  image: string;
  width: string;
  height: string;
    comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: String, required: false},
    description: { type: String, required: true },
    content: { type: String, required: true },
    image:{type: String, required: true },
    width: {type: String, required: true},
    height: {type: String, required: true},
comments: [{
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: Date, required: false}
}]
})


// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;