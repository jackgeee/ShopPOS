const { NavLink } = require("react-router-dom");

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink to = '/'>Main Page</NavLink></li>
            <li><NavLink to = '/'>Sign Up</NavLink></li>
        </ul>
    </nav>
);