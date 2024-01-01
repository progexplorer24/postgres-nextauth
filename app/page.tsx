import pool from "../lib/db"
import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import UsersTable from './table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';
  let users: User[] = []; // Declare users outside of the try-catch block
  // const result = await sql`
  //   SELECT id, name, username, email 
  //   FROM users 
  //   WHERE name ILIKE ${'%' + search + '%'};
  // `;
  // const users = result.rows as User[];
  const query = `
  SELECT id, name, username, email 
  FROM users 
  WHERE name ILIKE $1;
`;
const values = ['%' + search + '%'];

try {
  const { rows } = await pool.query(query, values);
  users = rows as User[]; // Assign value inside try block
  
} catch (error) {
  console.error(error);
  // Handle the error appropriately
}

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>
      <Search />
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
