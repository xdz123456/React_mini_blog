import {useState} from "react";

const Home = () => {

    const [blogs, setBlogs] = useState({
        title: "My first Blog",
        body: "Let's go 1",
        author: "Sam",
        id: "1"
    }, {title: "My second Blog", body: "Let's go 2", author: "Sam", id: "2"}, {
        title: "My Third Blog",
        body: "Let's go 3",
        author: "Bob",
        id: "3"
    })
    const handleClick = () => {


    }


    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{blogs.map((blog) => (
                <div className= "blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <p></p>
                </div>
            ) )}</p>
        </div>
    )
}

export default Home;