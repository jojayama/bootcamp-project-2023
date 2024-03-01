import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/helpers/db"
import Portfolio, { IComment } from "@/database/portfolioSchema"
import portfolioSchema from "@/database/portfolioSchema"

type IParams = {
		params: {
			slug: string
		}
}

export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
		const { slug } = params // another destructure

	   try {
	        const portfolio = await portfolioSchema.findOne({ slug }).orFail()
	        return NextResponse.json(portfolio, { status: 200 });
	    } catch (err) {
	        return NextResponse.json('Portfolio project not found.', { status: 404 })
	    }
}
