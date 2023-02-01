import React = require('react');

const Header = ({ children }: any) => {
  return (
    <header>
      <div>logo</div>
      <div>{children}</div>
    </header>
  );
};
const HomePage = () => (
  <div>
    <Header>
      <a href="/events/new">Create event</a>
    </Header>
    <div>other</div>
  </div>
);
const DashboardPage = () => (
  <div>
    <Header>
      <a href="/dashboard">Go to dashboard</a>
    </Header>
    <div> dashboard</div>
  </div>
);
