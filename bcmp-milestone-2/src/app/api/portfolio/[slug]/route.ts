import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/helpers/db";
import Portfolio from "@/database/portfolioSchema";

type IParams = {
  params: {
    slug: string;
  }
}

export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB(); // function from db.ts before
  const { slug } = params; // another destructure
  console.log(slug)
  try {
    const portfolio = await Portfolio.findOne({ slug }).orFail();
    console.log("portfolio", portfolio)
    return NextResponse.json(portfolio);
  } catch (err) {
    return NextResponse.json("Portfolio not found.", { status: 404 });
  }
}