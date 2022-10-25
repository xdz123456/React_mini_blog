import BlogList from "./blogList";
import UseFetch from "./useFetch";

const Home = () => {
    const {data, isPending, error} = UseFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            <h1>Mini Blog</h1>
            {error && <h2>{error}</h2>}
            {isPending && <h2>Loading......</h2>}
            {data && <BlogList blogs={data}/>}
        </div>
    )
}

export default Home;