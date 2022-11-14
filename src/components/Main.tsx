import React, { useContext, useEffect, useMemo, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import routesArr from "../constants/routes";
import Breadcrumbs from "../components/Breadcrumbs";
import Navigation from "./Navigation";
import { authContextInterface } from "../interfaces";
import { AuthContext } from "../context/authContext";

const Main: React.FC = () => {
  const { isUnauth } = useContext(AuthContext) as authContextInterface;

  const getRoutePath = () => {
    const routesPath: any[] = [];
    routesArr.forEach((parentRoute) => {
      routesPath.push(parentRoute);
      parentRoute?.routes?.forEach((childRoute) => {
        routesPath.push(childRoute);
      });
    });
    return routesPath;
  };
  const routesPath = useMemo(() => getRoutePath(), []);

  return (
    <div className="app-wrapper">
      {!isUnauth && <Navigation />}
      <div className="main-wrapper">
        {!isUnauth && <Breadcrumbs />}
        <Routes>
          {routesPath.map((route) => {
            let Component = route.component;
            return (
              <Route
                path={route.path}
                key={`c-${route.path}`}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default Main;
