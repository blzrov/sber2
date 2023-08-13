import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";

import { Row, Col } from "react-bootstrap";

import { Title, Card, Button, SimpleGrid, Chip } from "@mantine/core";

import Map from "../components/Map";
import ReviewModal from "../components/ReviewModal";
import { apiURL } from "../helpers/api";
import { UserContext } from "../App";

export default function Event() {
  const user = useContext(UserContext);
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const getEvents = () => {
    const doFetch = async () => {
      let response;
      response = await fetch(apiURL + "events?id=" + id);
      const result = await response.json();
      setEvent(result[0]);
      console.log(result[0]);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  const [opened, { open, close }] = useDisclosure(false);

  if (!event) return;

  return (
    <>
      <ReviewModal opened={opened} close={close} />
      <Card className="mb-2" shadow="sm" padding="lg" radius="md" withBorder>
        <Row>
          <Col md="5">
            <Title order={2}>{event.name}</Title>
            {/* <Title order={6}>Посетит 250 человек</Title> */}
            {event.categories.map((e) => (
              <Chip checked={false} size="xs" variant="filled">
                {e.tag_name}
              </Chip>
            ))}
          </Col>
          <Col md="2">
            <Title order={3}>{dayjs(event.start_at).format("DD.MM.YYYY")}</Title>
            <Title order={3}>-</Title>
            <Title order={3}>{dayjs(event.ends_at).format("DD.MM.YYYY")}</Title>
          </Col>
          <Col md="2">
            <Title order={3}>{dayjs(event.start_at).format("HH.mm")}</Title>
            <Title order={3}>-</Title>
            <Title order={3}>{dayjs(event.ends_at).format("HH.mm")}</Title>
          </Col>
          <Col md="2">
            <Button size="md" radius="xl">
              Принять участие
            </Button>
            {/* <Button onClick={open} size="md" radius="xl">
              Оставить отзыв
            </Button> */}
          </Col>
          <Col md="1">
            <Button size="md" radius="xl">
              Лайк
            </Button>
          </Col>
        </Row>
      </Card>

      <Row>
        <Col md="6">
          <Card shadow="lg" padding="lg" radius="md" withBorder>
            <Title order={4}>
              Длинные тексты (лонгриды), где большой объем сочетается с глубоким погружением в тему, становятся все
              более популярными в печатных и онлайновых изданиях, так как позволяют изданию выделиться из
              информационного шума. Цели исследования – выявить распространенность лонгридов в российских СМИ и
              содержательные и композиционные особенности этих текстов. Исследование включает мониторинг публикаций в
              центральных российских изданиях и последующий контент-анализ 10 материалов из 10 печатных и онлайновых
              изданий. Выводы исследования: лонгриды присутствуют в изданиях разных типов: от ежедневных газет − до
              нишевых новостных сайтов. Они посвящены, как правило, описанию нового явления; имеют объем от 2 до 4 тыс.
              слов и построены по композиционной схеме чередования примеров и обобщений.
            </Title>
          </Card>
        </Col>
        <Col md="6">
          <Card shadow="lg" padding="lg" radius="md" withBorder>
            <Title order={3}>{event.location}</Title>
            <div className="mt-1" style={{ width: "100%", height: "50vh" }}>
              <Map startMarker={event.geolocation} />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
