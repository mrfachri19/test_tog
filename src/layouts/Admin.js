import React, { lazy, Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/AdminNavbar.js";
import { Route } from "react-router-dom/cjs/react-router-dom.min.js";

export default function Admin() {
  // views

  const Home = lazy(() => import("../views/admin/Home.js"));
  const renderLoader = () => <p className="">Loading</p>;

  return (
    <>
      <AdminNavbar />
      {/* Header */}
      <div className="px-4 md:mx-36 mx-auto h-full mt-10">
        <Suspense fallback={renderLoader()}>
          <Switch>
            <Route path="/admin/home" exact component={Home} />
            <Redirect from="/admin" to="/admin/Home" />
          </Switch>
        </Suspense>
        {/* <FooterAdmin /> */}
      </div>
    </>
  );
}
