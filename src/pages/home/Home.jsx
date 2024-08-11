import ExpandLink from "@components/ExpandLink/ExpandLink"

const Home = () => {
    return (
        <>
            <ExpandLink to={"/posts"}>Posts</ExpandLink>
            <ExpandLink to={"/streaming"}>Streaming</ExpandLink>
            <ExpandLink to={"/dashboard"}>Dashboard</ExpandLink>
        </>
    )
}

export default Home