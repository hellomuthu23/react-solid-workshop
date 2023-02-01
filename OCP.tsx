import React = require('react');
import { useLocation } from 'react-router';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header>
      <div>logo</div>
      <div>
        {pathname === '/dashboard' && <a href="/events/new">Create event</a>}
        {pathname === '/' && <a href="/dashboard">Go to dashboard</a>}
      </div>
    </header>
  );
};

const HomePage = () => (
  <div>
    <Header />
    <div>other</div>
  </div>
);
const DashboardPage = () => (
  <div>
    <Header />
    <div>dashboard</div>
  </div>
);
