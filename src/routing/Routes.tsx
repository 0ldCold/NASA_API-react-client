import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Main = React.lazy(
  () => import(/* webpackChunkName: "Main", webpackPrefetch: true */ "scene/Main")
);

const NotFound = React.lazy(
  () =>
    import(
      /* webpackChunkName: "NotFound", webpackPrefetch: true */ "components/base/NotFound/NotFound"
    )
);

const Routes: React.FC = (): React.ReactElement => {
  return (
    <Suspense fallback={<div>loader</div>}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/main' component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
