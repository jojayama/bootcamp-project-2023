export interface Blog{
    title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
  width: string;
  height: string;

}
const blogs: Blog[] = [
    {
        title: "First Hack4Impact Project",
        date: "10/3/23",
        description: "How did my first project go?",
        image: "blog1.png",
        slug: "blog0",
        width: "208",
        height: "250"
    },
    {
        title: "Week 1 Bootcamp Experience",
        date: "10/22/23",
        description: "How was the first week of bootcamp?",
        image: "blog2.png",
        slug: "blog1",
        width: "208",
        height: "300"
    }
];

export default blogs;
