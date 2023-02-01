import { useState } from 'react';
import * as React from 'react';

// import api from '~/common/api';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    // await api.login(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label> Email: </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label> Password: </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Log in</button>
    </form>
  );
};
