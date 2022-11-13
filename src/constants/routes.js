import { lazy } from "react";

const routesArr = [
  {
    name: "Login",
    locale: "user.login",
    path: "/user/login",
    component: lazy(() => import("../pages/Login")),
    hideInMenu: true,
    icon: "dashboard",
    routes: [],
  },
  {
    path: "/dashboard",
    locale: "dashboard",
    name: "Dashboard",
    icon: "dashboard",
    exact: true, // This route will only work for /dashboard . For
    hideInMenu: false,
    // /dashboard/analysis or other this component will not be rendered
    component: lazy(() => import("../pages/Dashboard")),
    routes: [
      {
        path: "/dashboard/analysis",
        locale: "dashboard.analysis",
        name: "analysis",
        component: lazy(() => import("../pages/DashboardAnalysis")),
        exact: true,
        hideInMenu: false,
        // accessTO: ["admin"], // Allow only admins to view this menu
        // and access this page
      },
      {
        path: "/dashboard/monitor",
        locale: "dashboard.monitor",
        component: lazy(() => import("../pages/Monitor")),
        name: "monitor",
        exact: true,
        hideInMenu: false,
      },
      // {
      //   path: "/dashboard/workplace",
      //   locale: "dashboard.workplace",
      //   component: lazy(() => import("pages/dashboard/workplace")),
      //   name: "workplace",
      //   exact: true,
      // hideInMenu: false,
      // },
    ],
  },
  {
    path: "/projects",
    locale: "projects",
    name: "Projects",
    icon: "projects",
    component: lazy(() => import("../pages/ProductTable")),
    redirect: "/projects/list", //Redirect /projects to
    hideInMenu: false,
    // /projects/list
    routes: [
      {
        path: "/projects/list",
        locale: "projects.list",
        name: "Projects",
        icon: "projects",
        component: lazy(() => import("../pages/ProductTable")),
        exact: true,
        hideInMenu: false,
      },
      {
        path: "/projects/:id",
        locale: "projects.details",
        name: "Project Details",
        component: lazy(() => import("../pages/ProductDetail")),
        icon: "projects",
        key: "projects",
        exact: true,
        hideInMenu: true,
      },
      {
        path: "/projects/:id/settings",
        locale: "projects.settings",
        icon: "settings",
        component: lazy(() => import("../pages/ProductSettings")),
        name: "Settings",
        parentKey: "details",
        exact: true,
        hideInMenu: true,
      },
    ],
  },
  // {
  //   path: "*",
  //   component: lazy(() => import("../pages/Dashboard")),
  // },
];

export default routesArr;
