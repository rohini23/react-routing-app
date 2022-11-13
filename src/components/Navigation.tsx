import React from "react";
import routesArr from "../constants/routes";
import NavItem from "./NavItem";

const Navigation: React.FC = () => {
  return (
    <div className="nav-wrapper">
      {routesArr.map(
        // (item, ind) => !item.hideInMenu && <div key={ind}>{item.name}</div>
        (item, ind) => (
          <NavItem
            key={ind}
            name={item.name}
            path={item.path}
            hideInMenu={item.hideInMenu}
            icon={item.icon}
            exact={item?.exact ?? false}
            routes={item?.routes ?? []}
            redirect={item?.redirect}
          />
        )
      )}
    </div>
  );
};

export default Navigation;
