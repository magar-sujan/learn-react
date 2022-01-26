import { NavLink } from "react-router-dom";
import '../styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Riti Store</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Header;

