import * as React from 'react';
import './style.css';
import { ActiveUsersList } from './SRP';
import { HomePage } from './OCP';
import { VideoListComponent } from './ISP';
import { LoginForm } from './DIP';
// import { LoginFormNew } from './DIP-Solution';

export default function App() {
  return (
    <div>
      <h1>Welcome to React Solid Principle Workshop</h1>
      <h2>1. Single Responsibility Principle</h2>
      <ActiveUsersList />
      <h2>2. Open Closed Principle</h2>
      <HomePage />
      <h2>4.Interface Segregation Principle</h2>
      <VideoListComponent />
      <h2>5. Dependency Inversion Principle</h2>
      <LoginForm />
    </div>
  );
}
