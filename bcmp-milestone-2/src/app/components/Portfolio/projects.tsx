export interface portfolio{
    projName: string;
    image: string;
    width: string;
    height: string;
    slug: string; 
    description: string; 
}

const portfolios: portfolio[]=[
    {
    projName:"Creating a Website",
    image:"/website_img.png",
    width:"425",
    height:"500",
    slug:"index.html",
    description:"In this project, we created a <em>website</em> that introduced ourselves and some of the experience we had! We created a <strong>blog page, index page, portfolio, resume</strong> and a <strong>contact page</strong>. We also learned to include <strong>images, links</strong> and <strong>lists</strong>!",
}];

export default portfolios;