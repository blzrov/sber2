import { useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

import { TextInput, Title, Textarea, MultiSelect } from "@mantine/core";
import { DateInput, TimeInput } from "@mantine/dates";
import { IconBrandEtsy } from "@tabler/icons-react";
import { IconLocationFilled } from "@tabler/icons-react";

import Map from "../components/Map";

import { tags } from "../helpers/tags";

// if id = "new" CreateEvent
export default function EditEvent() {
  const [event, setEvent] = useState();
  const { id } = useParams();

  return (
    <div>
      <Title className="mb-4" order={2} ta="center">
        Создайте собственное мероприятие!
      </Title>
      <Row>
        <Col md="5">
          <TextInput
            onChange={(e) => setEvent(e.target.value)}
            className="mb-2"
            variant="filled"
            icon={<IconBrandEtsy />}
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
            onChange={(e) => console.log(e)}
          />
          <div>
            <Row>
              <Col md="7">
                <DateInput
                  onChange={(e) => console.log(e)}
                  className="mb-2"
                  placeholder="Введите дату начала"
                  radius="xs"
                  size="md"
                  variant="filled"
                />
              </Col>
              <Col md="5">
                <TimeInput
                  onChange={(e) => console.log(e.target.value)}
                  className="mb-2"
                  placeholder="Введите время начала"
                  radius="xs"
                  size="md"
                  variant="filled"
                />
              </Col>
            </Row>
            <Row>
              <Col md="7">
                <DateInput
                  onChange={(e) => console.log(e)}
                  className="mb-2"
                  placeholder="Введите дату окончания"
                  radius="xs"
                  size="md"
                  variant="filled"
                />
              </Col>
              <Col md="5">
                <TimeInput
                  onChange={(e) => console.log(e.target.value)}
                  className="mb-2"
                  placeholder="Введите время окончания"
                  radius="xs"
                  size="md"
                  variant="filled"
                />
              </Col>
            </Row>
          </div>
          <TextInput
            className="mb-2"
            variant="filled"
            icon={<IconLocationFilled />}
            placeholder="Укажите геолокацию на карте"
            disabled
            radius="xs"
            size="md"
          />
        </Col>
        <Col md="7">
          <div style={{ width: "100%", height: "50vh" }}>
            <Map onPickMarker={(e) => console.log(e)} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
