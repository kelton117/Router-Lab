import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/about">
                <div>ABOUT</div>
            </Link>
        </div>
    )
}

export default Nav;