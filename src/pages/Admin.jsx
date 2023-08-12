import { Row, Col } from "react-bootstrap";

import { SimpleGrid, Button } from "@mantine/core";

import ModTable from "../components/ModTable";

export default function Admin() {
  return (
    <>
      <SimpleGrid cols={2} spacing="xl" verticalSpacing="xs">
        <Button radius="xs" size="md" uppercase>
          Модераторы
        </Button>
        <Button variant="light" radius="xs" size="md" uppercase>
          Settings
        </Button>
        <Button variant="light" radius="xs" size="md" uppercase>
          Settings
        </Button>
        <Button variant="light" radius="xs" size="md" uppercase>
          Settings
        </Button>
      </SimpleGrid>
      <ModTable />
    </>
  );
}

const style = { backgroundColor: "blue" };
