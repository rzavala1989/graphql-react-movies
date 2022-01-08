import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const TitlePage = lazy(() => import('routes/TitlePage'));
const Home = lazy(() => import('routes/Home'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...?</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={TitlePage} />
        </Switch>
      </Suspense>
    </Router>
  );
};
