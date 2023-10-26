import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import { store } from "./redux/store";
// layouts

import Admin from "./layouts/Admin";
import Auth from "./layouts/Auth.js";
const App = () => (
  <>
     <BrowserRouter>
    <Provider store={store}>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/admin" />
      </Switch>
    </Provider>
  </BrowserRouter>
  </>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));