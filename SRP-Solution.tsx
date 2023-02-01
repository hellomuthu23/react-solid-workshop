import * as React from 'react';

import { useEffect, useMemo, useState } from 'react';
import { fetchUser, User } from './utils';

export const ActiveUsersList = () => {
  const { activeUsers } = useActiveUsers();

  return (
    <ul>
      {activeUsers.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

// utils/hooks
const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const loadUsers = () => {
      const response = fetchUser();
      setUsers(response);
    };
    loadUsers();
  }, []);

  return { users };
};

const getOnlyActive = (users: User[]) => {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);

  return users.filter(
    (user: User) => !user.isBanned && user.lastActivityAt >= weekAgo
  );
};

const useActiveUsers = () => {
  const { users } = useUsers();
  const activeUsers = useMemo(() => {
    return getOnlyActive(users);
  }, [users]);
  return { activeUsers };
};

const UserItem = (props: any) => {
  const user = props.user;
  return (
    <li key={user.id}>
      <p>{user.fullName}</p>
      <small>Role: {user.role}, </small>
      <small>Avatar url: {user.avatarUrl}</small>
    </li>
  );
};
