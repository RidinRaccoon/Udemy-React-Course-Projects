import React from 'react';

export const UsersContext = React.createContext({
  users: [{ id: 'id', name: 'name' }],
});
