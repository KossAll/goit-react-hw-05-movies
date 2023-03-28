import { NavLink } from 'react-router-dom';
import style from './NavBar.module.css';

const Navbar = () => {
  return (
    <ul className={style.menu}>
      <li>
        <NavLink className={style.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={style.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
