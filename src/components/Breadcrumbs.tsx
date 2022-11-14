import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import ArrowRight from "../assets/icons/right-arrow.svg";

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  const pathArr = useMemo(() => location.pathname.split("/"), [location]);

  return (
    <div className="breadcrumb-wrapper">
      {pathArr.map(
        (item, ind) =>
          item && (
            <div key={ind}>
              {pathArr.length - 1 > ind ? (
                <Nav
                  path={`${location.pathname.split(item)[0]}${item}`}
                  name={item}
                  className={"breadcrumb-item"}
                />
              ) : (
                <div className="breadcrumb-item-disabled">{item}</div>
              )}
              {pathArr.length - 1 > ind && (
                <img alt={""} src={ArrowRight} height={10} width={10} />
              )}
            </div>
          )
      )}
    </div>
  );
};

export default Breadcrumbs;
