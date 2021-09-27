import { Link, withRouter } from "react-router-dom";
import Cart from "./Cart";

const NavBar = (props) => {

    function redirectToHome() {
        props.history.push('/');
    }
    return (
        <div className="navbar">
            <div className="navbar-title" onClick={redirectToHome}>Food Hub</div>
            <ul className="center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/order">Order</Link></li>
            </ul>
            <div style={{marginLeft: "auto"}} className="center">
                <Cart/>
            </div>
        </div>
    )
}

export default withRouter(NavBar);