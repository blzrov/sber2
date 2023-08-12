import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import EventsList from "../components/EventsList";
import EventsMap from "../components/EventsMap";

import { Button, MultiSelect } from "@mantine/core";

import { tags } from "../helpers/tags";

export default function Events() {
  const [isMap, setIsMap] = useState(true);
  return (
    <div>
      <Row className="mx-1">
        <Col md="4">
          <Button onClick={() => setIsMap((isMap) => !isMap)} variant="light" size="xs">
            {isMap ? "Отобразить списом" : "Отобразить на карте"}
          </Button>
        </Col>
        <Col md="8">
          <MultiSelect
            className="mb-2"
            placeholder="Выберите подходящие теги"
            radius="xs"
            size="md"
            variant="filled"
            data={tags.map((e) => e.label)}
            searchable
            nothingFound="Не найдено"
          />
        </Col>
      </Row>
      <div>{isMap ? <EventsMap /> : <EventsList />}</div>
    </div>
  );
}
