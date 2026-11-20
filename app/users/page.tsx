import React from 'react'
import { User } from '../types';  
const usersPage = async () => {
  const res = await fetch('http://localhost:8080/api/v1/products');
  const users: User[] = await res.json();
  return (
    <>
    <h1>Users Page</h1>
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul> 
    </>
  )
}

export default usersPage