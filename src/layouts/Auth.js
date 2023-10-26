import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Auth() {
  // views

  const Login = lazy(() => import("../views/auth/Login.js"));

  const renderLoader = () => <p>Loading</p>;

  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <Suspense fallback={renderLoader()}>
            <Switch>
              <Route path="/auth/login" exact component={Login} />
              <Redirect from="/auth" to="/auth/login" />
            </Switch>
          </Suspense>
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
