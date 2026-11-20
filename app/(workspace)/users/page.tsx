import { Suspense } from 'react'
import type { User } from '@/app/types';
import { connection } from "next/server";
const Users = async  () => {
  const res= await fetch(
    'https://jsonplaceholder.typicode.com/users',
    {next: {revalidate: 10}}
  
  );
  const users:User[] = await res.json();
   await connection();
  return (
    <>
    <h1>Users List</h1>
    <p>Fetched at: {new Date().toLocaleTimeString()}</p>
    <ul>
    {users.map((user) => (
      <li key={user.id}>
        <h2>{user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
        <p>Company: {user.company.name}</p>
      </li>
    ))}
  </ul>
    </>
  )
}

const UsersPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading users...</div>}>
      <Users />
      </Suspense>
    </div>
  )
}
export default UsersPage