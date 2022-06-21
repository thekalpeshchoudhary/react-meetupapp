import classes from "./Layout.module.scss";
import MainNav from "./MainNav";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/lms" && <MainNav />}
      <main className={location.pathname !== "/lms" ? classes.main : ""}>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
