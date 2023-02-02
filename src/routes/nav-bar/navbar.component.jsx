import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as ShopLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utilities/firebase.utils";
import "./navbar.component.scss";

const NavBar = () => {

  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigationBar">
        <Link className="logo-container" to="/">
          <ShopLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="testpage">
            TESTPAGE
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser} >SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGNIN
            </Link>
          )}

          <Link className="nav-link" to="testpage2">
            TESTPAGE2
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
