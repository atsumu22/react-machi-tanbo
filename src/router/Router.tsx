import { memo, FC } from "react";
import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRouter";
import { Page404 } from "../components/pages/Page404";
import { KobeCity } from "../components/pages/KobeCity";

export const Router: FC = memo(() => {
  return(
    <Switch>
        <Route exact path="/">
          <KobeCity />
        </Route>
        <Route path="/home" render={({ match: { url }}) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )} />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
});
