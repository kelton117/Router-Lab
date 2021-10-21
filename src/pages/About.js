import { Link } from "react-router-dom";

const About = (props) => {
    return (
        <div>
    <h1>About</h1>
    <Link to="/stocks">
        <div>STOCKS</div>
    </Link>
    </div>
    )
}

export default About;