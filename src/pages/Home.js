import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
    <h1>Home</h1>
    <Link to="/stocks">
        <div>STOCKS</div>
    </Link>
    </div>
    )
}

export default Home;