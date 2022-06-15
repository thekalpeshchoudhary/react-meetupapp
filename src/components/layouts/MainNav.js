import { Link } from "react-router-dom";
import { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import classes from './MainNav.module.css';

const MainNav = () => {
  const favCtx = useContext(FavouriteContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/AddNewMeetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/Favourites">My Favorites <span className={classes.badge}>{favCtx.totalFavourites}</span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
