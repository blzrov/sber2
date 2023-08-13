import { useState } from "react";

import { Row, Col } from "react-bootstrap";

import { SimpleGrid, Button } from "@mantine/core";

import ModTable from "../components/ModTable";
import Statistics from "../components/Statistics";
import Feedback from "../components/Feedback";
import Advertising from "../components/Advertising";

export default function Admin() {
  const [state, setState] = useState(1);

  return (
    <>
      <SimpleGrid cols={2} spacing="xl" verticalSpacing="xs">
        <Button onClick={() => setState(1)} variant={state === 1 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Модераторы
        </Button>
        <Button onClick={() => setState(2)} variant={state === 2 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Статистика
        </Button>
        <Button onClick={() => setState(3)} variant={state === 3 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Обратная связь
        </Button>
        <Button onClick={() => setState(4)} variant={state === 4 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Реклама
        </Button>
      </SimpleGrid>
      {state === 1 && <ModTable />}
      {state === 2 && <Statistics />}
      {state === 3 && <Feedback />}
      {state === 4 && <Advertising />}
    </>
  );
}

const style = { backgroundColor: "blue" };
