import { Table, LoadingOverlay, Box } from "@mantine/core";

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const IncidentsTable: React.FC = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={true}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 5 }}
        />
        <Table verticalSpacing="md">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Created</Table.Th>
              <Table.Th>ID</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Title</Table.Th>
              <Table.Th>Category</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </>
  );
};

export default IncidentsTable;
