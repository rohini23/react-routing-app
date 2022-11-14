import * as React from "react";
import { NavItemProps } from "../interfaces";
import Nav from "./Nav";
import ArrowDown from "../assets/icons/down-arrow.svg";
import ArrowUp from "../assets/icons/up-arrow.svg";

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return !props.hideInMenu ? (
    <div className="nav-item-container">
      <div className="nav-item-wrapper" onClick={handleToggle}>
        <Nav
          path={props.path}
          name={props.name}
          className={"child-toggled nav-item-link"}
          activeClassName={"nav-item-active"}
        />
        {props?.routes?.length ? (
          <div className="toggle-btn">
            {toggle ? (
              <img alt={""} src={ArrowUp} height={10} width={10} />
            ) : (
              <img alt={""} src={ArrowDown} height={10} width={10} />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      {toggle && props?.routes?.length ? (
        <>
          {props.routes.map(
            (route) =>
              !route.hideInMenu && (
                <Nav
                  className={`child-nav-item nav-item-link`}
                  key={route.name}
                  path={route.path}
                  name={route.name}
                  activeClassName={"nav-item-active"}
                />
              )
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};

export default NavItem;
