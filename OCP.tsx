import React = require('react');

const Header = () => {
  const pathname = window.location.pathname;

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

export const HomePage = () => (
  <div>
    <Header />
    <div>other</div>
  </div>
);
export const DashboardPage = () => (
  <div>
    <Header />
    <div>dashboard</div>
  </div>
);
