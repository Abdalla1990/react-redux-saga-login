import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import ModulGrupsPage from "./modulgrup/ModulGrupsPage";
import NewModulGrupPage from "./modulgrup/NewModulGrupPage";
import EditModulGrupPage from "./modulgrup/EditModulGrupPage";
import ModulGrupPage from "./modulgrup/ModulGrupPage";

const AdminPage = ({ match: { url } }) => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/admin" className="header__brand">
            Admin
          </Link>
        </div>
      </div>

      <div className="container">
        <Switch>
          <Route
            exact
            path={`${url}`}
            render={() => <Redirect to={`${url}/modulgrups`} />}
          />
          <Route exact path={`${url}/modulgrups`} component={ModulGrupsPage} />
          <Route
            exact
            path={`${url}/modulgrups/new`}
            component={NewModulGrupPage}
          />
          <Route
            exact
            path={`${url}/modulgrups/:id`}
            component={ModulGrupPage}
          />
          <Route
            exact
            path={`${url}/modulgrups/:id/edit`}
            component={EditModulGrupPage}
          />
          <Redirect to="/error" />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPage;
