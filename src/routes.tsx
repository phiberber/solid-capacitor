import { RouteDefinition } from "solid-app-router";
import { lazy } from "solid-js";

export const HOME = "/";
export const BYE = "/bye";

export const routes: RouteDefinition[] = [
  {
    path: HOME,
    component: lazy(() => import("./pages/Home")),
  },
  {
    path: BYE,
    component: lazy(() => import("./pages/Bye")),
  },
];
