import React = require('react');

const Header = ({ children }: any) => {
  return (
    <header>
      <div>logo</div>
      <div>{children}</div>
    </header>
  );
};

export const HomePage = () => (
  <div>
    <Header>
      <a href="/events/new">Go to dashboard</a>
    </Header>
    <div>other</div>
  </div>
);
export const DashboardPage = () => (
  <div>
    <Header>
      <a href="/dashboard">Create event</a>
    </Header>
    <div>dashboard</div>
  </div>
);
