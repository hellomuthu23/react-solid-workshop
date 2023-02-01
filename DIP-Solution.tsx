import { useState } from 'react';
import * as React from 'react';

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>;
};
export const LoginForm = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (evt: any) => {
    evt.preventDefault();
    await onSubmit(email, password);
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

export const LoginFormNew = () => {
  const submitHandler = async (email: string, password: string) => {
    console.log('call api here');
  };
  return <LoginForm onSubmit={submitHandler} />;
};
