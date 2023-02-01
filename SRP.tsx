import * as React from 'react';
import { useEffect, useState } from 'react';
import { fetchUser, User } from './utils';

export const ActiveUsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = () => {
      const response = fetchUser();
      setUsers(response);
    };
    loadUsers();
  }, []);

  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return (
    <ul>
      {users
        .filter((user) => !user.isBanned && user.lastActivityAt >= weekAgo)
        .map((user) => (
          <li key={user.id}>
            <p>{user.fullName}</p>
            <small>Role: {user.role}, </small>
            <small>Avatar url: {user.avatarUrl}</small>
          </li>
        ))}
    </ul>
  );
};
