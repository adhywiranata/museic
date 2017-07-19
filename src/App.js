import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import store from './store/configureStore';

import './App.css';
import {
  Login,
  AuthSuccess,
  Home,
  MyArtists,
  Profile,
  NewReleases,
  TopArtists,
} from './containers';
import { Header } from './components';

const history = createHistory();

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="App">
        <Header />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Museic</title>
          <link rel="canonical" href="https://museic.adhywiranata.com" />
        </Helmet>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/new-releases" component={NewReleases} />
          <Route path="/me" component={Profile} />
          <Route path="/artists" component={TopArtists} />
          <Route path="/artist/:artistId" component={MyArtists} />
          {/* <Route path="/callback/:access_token/:refresh_token" component={AuthSuccess} /> */}
          <Route path="/callback" component={AuthSuccess} />
          <Route component={() => (<div>404</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
