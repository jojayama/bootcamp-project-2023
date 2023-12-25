import mongoose, { Schema } from "mongoose";

export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export type IPortfolio = {
    projName: string;
    image: string;
    width: string;
    height: string;
    slug: string; 
    description: string; // for preview
    comments: IComment[]; // array for comments
};


// mongoose schema 
export const portfolioSchema = new Schema<IPortfolio>({
    projName: { type: String, required: true },
    image:{type: String, required: true },
    width: {type: String, required: true},
    height: {type: String, required: true},
    slug: { type: String, required: true },
    description: { type: String, required: true },
comments: [{
    user: {type: String, required: true},
    comment: {type: String, required: true},
    time: {type: String, required: false}
}]
})

// defining the collection and model
const Portfolio = mongoose.models['portfolio'] ||
mongoose.model('portfolio', portfolioSchema);

export default Portfolio;