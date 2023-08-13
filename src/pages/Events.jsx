import { useState } from "react";

import { Row, Col } from "react-bootstrap";
import EventsList from "../components/EventsList";
import EventsMap from "../components/EventsMap";

import { Button, MultiSelect } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";

import { tags } from "../helpers/tags";

export default function Events() {
  const [isMap, setIsMap] = useState(false);
  const [filter, setFilter] = useState({});

  function handleFilter(name, value) {}

  return (
    <div>
      <Row className="mx-1">
        <Col md="3">
          <Button onClick={() => setIsMap((isMap) => !isMap)} variant="light" size="xs">
            {isMap ? "Отобразить списом" : "Отобразить на карте"}
          </Button>
        </Col>
        <Col className="d-flex align-items-baseline" md="5">
          <DateInput
            onChange={(e) => console.log(e)}
            className="mb-2"
            placeholder="Период"
            radius="xs"
            size="md"
            variant="filled"
          />
          <div> - </div>
          <DateInput
            onChange={(e) => console.log(e)}
            className="mb-2"
            placeholder="Период"
            radius="xs"
            size="md"
            variant="filled"
          />
        </Col>
        <Col md="4">
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
