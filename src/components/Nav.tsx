import React from "react";
import { NavLink } from "react-router-dom";
import { navProps } from "../interfaces";

const Nav: React.FC<navProps> = (props: navProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${props.className} ${isActive ? props.activeClassName : ""}`
      }
      to={`${props.path}`}
    
    >
      <span>{props.name}</span>
    </NavLink>
  );
};

export default Nav;
