import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      {/* Use 'to' instead of 'href' */}
      <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/home"><li>Home </li> </NavLink>
      <NavLink to="/about" className={(e) => {
        return e.isActive ? "red" : " "
      }}><li>About</li></NavLink >
      <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/login" ><li>Contact</li></NavLink >
    </nav>
  );
}

export default Navbar;