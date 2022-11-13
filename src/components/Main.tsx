import React, { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import routesArr from "../constants/routes";
import Breadcrumbs from "../components/Breadcrumbs";

const Main: React.FC = () => {
  const getRoute = () => {
    const routes: any[] = [];
    routesArr.forEach((parentRoute) => {
      let Component = parentRoute.component;
      routes.push(
        <Route
          path={parentRoute.path}
          key={`p-${parentRoute.path}`}
          element={<Component />}
        />
      );
      parentRoute?.routes.forEach((childRoute) => {
        let Component = childRoute.component;
        routes.push(
          <Route
            path={childRoute.path}
            key={`c-${childRoute.path}`}
            element={<Component />}
          />
        );
      });
    });
    return routes;
  };

  const routes = useMemo(() => getRoute(), []);

  return (
    <div className="main-wrapper">
      <Breadcrumbs />
      <Routes>{routes}</Routes>
    </div>
  );
};

export default Main;
