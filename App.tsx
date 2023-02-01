import * as React from 'react';
import './style.css';
import { ActiveUsersList } from './SRP';
import { HomePage } from './OCP-Solution';
export default function App() {
  return (
    <div>
      <h1>Welcome to React Solid Principle Workshop</h1>
      <h2>Single Responsibility Principle</h2>
      <ActiveUsersList />
      <h2>Open Closed Principle</h2>
      <HomePage />
    </div>
  );
}
