import * as React from 'react';
import './style.css';
import { ActiveUsersList } from './SRP';
import { HomePage } from './OCP';
import { VideoListComponent } from './ISP';
export default function App() {
  return (
    <div>
      <h1>Welcome to React Solid Principle Workshop</h1>
      <h2>Single Responsibility Principle</h2>
      <ActiveUsersList />
      <h2>Open Closed Principle</h2>
      <HomePage />
      <h2>Interface Segregation Principle</h2>
      <VideoListComponent />
    </div>
  );
}
