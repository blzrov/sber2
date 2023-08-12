import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import dayjs from "dayjs";

import { Row, Col } from "react-bootstrap";

import { Title, Card, Button } from "@mantine/core";

import Map from "../components/Map";
import ReviewModal from "../components/ReviewModal";

export default function Event() {
  const [event, setEvent] = useState(null);
  const getEvents = () => {
    //   const doFetch = async () => {
    //     const response = await fetch(apiURL + "events");
    //     const result = await response.json();
    //     localStorage.setItem('data', JSON.stringify(result))
    //     console.log(result);
    //   };
    //   doFetch();
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data.filter((e) => e.id == id)[0]);
    setEvent(data.filter((e) => e.id == id)[0]);
  };

  useEffect(getEvents, []);

  const [opened, { open, close }] = useDisclosure(false);
  const { id } = useParams();

  if (!event) return;

  return (
    <>
      <ReviewModal opened={opened} close={close} />
      <Card className="mb-2" shadow="sm" padding="lg" radius="md" withBorder>
        <Row>
          <Col md="5">
            <Title order={2}>{event.name}</Title>
            <Title order={6}>Посетит 250 человек</Title>
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
            {/* <Button size="md" radius="xl">
              Принять участие
            </Button> */}{" "}
            <Button size="md" radius="xl">
              Оставить отзыв
            </Button>
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
