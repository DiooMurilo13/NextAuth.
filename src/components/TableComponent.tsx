import { Table } from "flowbite-react";
import { Session } from "../../node_modules/next-auth/index";
import Img from "react";

export const TableComponent = ({ session }: Session | any) => {
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Product name</Table.HeadCell>
        <Table.HeadCell>Color</Table.HeadCell>
        <Table.HeadCell>Category</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">Edit</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {session.user.email}
          </Table.Cell>
          <Table.Cell>{session.user.name}</Table.Cell>
          <Table.Cell>
            <img
              src={session.user.image}
              className="rounded rounded-full h-10"
              alt="image description"
            />
          </Table.Cell>
          <Table.Cell>${session.user.image}</Table.Cell>
          <Table.Cell>
            <a
              href="/tables"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Edit
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};
