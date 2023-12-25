import Portfolio from "@/database/portfolioSchema";
import connectDB from "@/helpers/db";

async function getPortfolios(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const portfolios = await Portfolio.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return portfolios
	} catch (err) {
	    return null
	}
}
export default getPortfolios