import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

import css from "./DetailsNavList.module.css";

const DetailsNavList = () => {
  return (
    <>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            to="features"
            state={{ ...location.state }}
            className={({ isActive }) => (isActive ? css.activeLink : "")}
          >
            Features
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            to="reviews"
            state={{ ...location.state }}
            className={({ isActive }) => (isActive ? css.activeLink : "")}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default DetailsNavList;
