import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Blog from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

export async function POST(req: NextRequest, { params }: IParams ) {
  console.log("called")
	    const body = await req.json()
	    const { slug } = params;
  const user = body.user;
  const comment = body.comment;
  await connectDB();
	if (!body) {
		return NextResponse.json("Invalid comment", { status: 404 });
	}
    try {
        const blog = await Blog.findOneAndUpdate(
            {slug: slug},
            {$push: {comments: {user: user, comment: comment}}},
            {new: true}

        ).orFail();
        return NextResponse.json(blog);

    } catch (err) {
        return NextResponse.json("Blog not found.", { status: 404 });
    }

}