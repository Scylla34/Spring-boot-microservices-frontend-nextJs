import { Suspense } from "react";
import type { User } from "@/app/types";
import { Spinner } from "@/components/ui/spinner";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

type UserSummary = Pick<User, "id" | "name" | "username" | "email">;

function isUserSummary(value: unknown): value is UserSummary {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const user = value as Record<string, unknown>;

  return (
    typeof user.id === "number" &&
    typeof user.name === "string" &&
    typeof user.username === "string" &&
    typeof user.email === "string"
  );
}

async function fetchUsers(): Promise<UserSummary[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });

  if (!response.ok) {
    throw new Error(`User request failed with status ${response.status}`);
  }

  const data: unknown = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("The user API did not return a list");
  }

  return data.filter(isUserSummary);
}

async function UsersList() {
  let users: UserSummary[];

  try {
    users = await fetchUsers();
  } catch {
    return (
      <div className="users-state" role="alert">
        <strong>Unable to load users.</strong>
        <p>Check the API connection and try again.</p>
      </div>
    );
  }

  return (
    <div className="users-table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default function UsersPage() {
  return (
    <section>
      <header className="dashboard-heading">
        <div>
          <h1>Users</h1>
          <p>People loaded from the JSON Placeholder API.</p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="users-state" role="status">
            <Spinner className="size-5" />
            <span>Loading users...</span>
          </div>
        }
      >
        <UsersList />
      </Suspense>
    </section>
  );
}