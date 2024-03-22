import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      
      <nav>
        <span>My website</span>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <NavLink to="contact">Contact</NavLink>
        <NavLink to="users">User</NavLink>
        <Link to={`users/${1}`}>Example</Link>
      </nav>
    </div>
  );
};

export default Header;
