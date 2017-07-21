import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from './logo.svg';

const routesData = [
  { key: 1, to:'/', label:'HOME' },
  { key: 2, to:'/new-releases', label:'NEW RELEASES' },
  { key: 3, to:'/artists', label:'ARTISTS' },
  { key: 4, to:'/me', label:'RECENT TRACKS' },
];

if(localStorage.getItem('accessToken')) {
  routesData.push({ key: 5, to:'/logout', label:'LOGOUT' });
}

if(!localStorage.getItem('accessToken')) {
  routesData.push({ key: 5, to:'/login', label:'LOGIN' });
}

const Header = ({ router }) => (
  <div className="App-header">
    <div>
      <Link to="/" style={{ display: 'flex', flexDirection: 'row', color: '#FFFFFF', textDecoration: 'none' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1 className="App-logo-text">
            MUSE<span style={{ color: '#1ED760' }}>IC</span>
          </h1>
        </div>
      </Link>
    </div>
    <nav className="App-nav">
      <ul>
        {routesData.map(({ key, to, label}) => (
          <Link key={key} to={to}>
            <li className={router.location.pathname === to ? 'active' : ''}>
              {label}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  </div>
);

const mapStateToProps = (state) => ({
  router: state.router,
});

export default connect(mapStateToProps, null)(Header);
