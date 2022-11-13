import { ReactElement } from "react";

export interface NavItemProps {
  name: String;
  path: String | Partial<String>;
  hideInMenu: boolean;
  icon: SVGAElement | string;
  exact: Boolean;
  routes: Array<NavItemProps> | any[];
  redirect?: string;
}

export interface navProps {
  name: String;
  path: String | Partial<String>;
  className?: String;
  activeClassName?: String;
}
