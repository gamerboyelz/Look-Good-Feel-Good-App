import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import {  ReactComponent as ShopLogo } from "../../assets/crown.svg";
import './navbar.component.scss'

const NavBar = () => {
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
          <Link className="nav-link" to="sign-in">
            SIGNIN
          </Link>
          <Link className="nav-link" to="testpage2" >
            TESTPAGE2
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
