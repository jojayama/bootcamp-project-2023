type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "First Hack4Impact Project",
        date: "10/3/23",
        description: "How did my first project go?",
        slug: "blog1"
    },
    {
        title: "Week 1 Bootcamp Experience",
        date: "10/22/23",
        description: "How was the first week of bootcamp?",
        slug: "blog2"
    }
]

function addEntry() {
    const blogsCont = document.getElementById("blog-container")
    blogs.forEach((blog) => {const entry = document.createElement("div")
    entry.classList.add("blog-entry")
    const titleEl = document.createElement("h1")
    titleEl.textContent = blog.title
    const dateEl = document.createElement("p")
    dateEl.textContent = "Date: ${blog.date}"
    const descriptEl = document.createElement("p")
    descriptEl.textContent = blog.description
    const slugEl = document.createElement("a")
    slugEl.textContent = "Link!"
    slugEl.href = '/${blog.slug}'

    entry.appendChild(titleEl)
    entry.appendChild(dateEl)
    entry.appendChild(descriptEl)
    entry.appendChild(slugEl)
    });
}
window.addEventListener('load', addEntry)
