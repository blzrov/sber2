import { useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import { Input, Title, Textarea, MultiSelect } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

import Map from "../components/Map";

import { tags } from "../helpers/tags";

// if id = "new" CreateEvent
export default function EditEvent() {
  const [event, setEvent] = useState("");
  const { id } = useParams();

  return (
    <div>
      <Title className="mb-4" order={2} ta="center">
        Создайте собственное мероприятие!
      </Title>
      {event}
      <Row>
        <Col md="5">
          <Input
            onChange={(e) => setEvent(e.target.value)}
            className="mb-2"
            variant="filled"
            icon={<IconAt />}
            placeholder="Название"
            radius="xs"
            size="md"
          />
          <Textarea className="mb-2" placeholder="Описание" radius="xs" size="md" variant="filled" withAsterisk />
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
        <Col md="7">
          <div style={{ width: "100%", height: "50vh" }}>
            <Map />
          </div>
        </Col>
      </Row>
    </div>
  );
}
