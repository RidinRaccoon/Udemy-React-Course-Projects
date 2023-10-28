import React from 'react';
import { Card } from './UI/Card';
// STYLES
import styles from './UserList.module.css';
// TYPES
import { User } from '../types/types';

type UserListProps = {
  users: User[];
};

/**
 * Displays the name and age of each user in received list
 * @prop { User[] } users - list of Users to be rendered
 */
export function UserList({ users }: UserListProps) {
  return (
    <React.StrictMode>
      <Card className={`${styles['user-list']}`}>
        {users.length > 0 ? (
          <ul>
            {users.map((user: User) => (
              <li key={user.id}>{`${user.name}, ${user.age} years old`}</li>
            ))}
          </ul>
        ) : (
          <p className={styles.fallback}>No users added yet.</p>
        )}
      </Card>
    </React.StrictMode>
  );
}
