import React, { Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";

import Error404 from "../Pages/Error404";

import { lazy } from "react";
import Loading from "../components/Loadings/Loading";

const Layout = lazy(() => import("./../Layout"));
const AllProjects = lazy(() => import("../Pages/AllProjects"));

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<App />} />
        <Route
          path="projects"
          element={
            <Suspense fallback={<Loading />}>
              <AllProjects />
            </Suspense>
          }
        />
        {/* <Route path="notes" element={<Notes />} /> */}
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
