export const fetchUser = () => {
  return users;
};

const users: User[] = [
  {
    id: '1',
    avatarUrl: '/test',
    fullName: 'Spiderman',
    role: 'superhero',
    lastActivityAt: new Date('01/08/2022'),
    isBanned: false,
  },
  {
    id: '2',
    avatarUrl: '/test2',
    fullName: 'Batman',
    role: 'superhero',
    lastActivityAt: new Date(),
    isBanned: false,
  },
  {
    id: '3',
    avatarUrl: '/test3',
    fullName: 'Ironman',
    role: 'superhero',
    lastActivityAt: new Date(),
    isBanned: false,
  },
  {
    id: '4',
    avatarUrl: '/test4',
    fullName: 'Thanos',
    role: 'villan',
    lastActivityAt: new Date(),
    isBanned: false,
  },
  {
    id: '5',
    avatarUrl: '/test5',
    fullName: 'Thanos 2',
    role: 'villan',
    lastActivityAt: new Date(),
    isBanned: true,
  },
];

export interface User {
  id: string;
  avatarUrl: string;
  fullName: string;
  role: string;
  lastActivityAt: Date;
  isBanned: boolean;
}
