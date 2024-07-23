export interface User {
  id: number;
  name: string;
  age: number;
  website?: string;
}

export const users: User[] = [
  { id: 1, name: 'Joe', age: 27, website: 'https://www.example.com/joe' },
  { id: 2, name: 'Frank', age: 32 },
  { id: 3, name: 'Laura', age: 29, website: 'https://www.example.com/laura' },
  { id: 4, name: 'Jack', age: 22, website: 'https://www.example.com/jack' },
  { id: 5, name: 'Jane', age: 31, website: 'https://www.example.com/jane' },
];
