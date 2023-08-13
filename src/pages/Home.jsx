import { useEffect, useState } from "react";
import Map from "../components/Map";
import { Link } from "react-router-dom";
import HomeWidget from "../components/HomeWidget";
import { Row, Col } from "react-bootstrap";
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, HoverCard } from "@mantine/core";
import { apiURL } from "../helpers/api";
import dayjs from "dayjs";

export default function Home() {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    const doFetch = async () => {
      const response = await fetch(apiURL + "find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          priority: true,
        }),
      });
      const result = await response.json();
      setEvents(result);
    };
    doFetch();
  };

  useEffect(getEvents, []);

  if (events.length == 0) return;

  return (
    <Row>
      <Col md="3">
        <List items={events.slice(0, 3)} />
      </Col>
      <Col md="6">
        <Card className="mt-5" shadow="sm" padding="lg" radius="md" withBorder>
          <HomeWidget />
          <div style={{ width: "100%", height: "50vh" }}>
            <Map events={events} />
          </div>
        </Card>
      </Col>
      <Col md="3">
        <List items={events.slice(3)} />
      </Col>
    </Row>
  );
}

function List({ items }) {
  return (
    <div className="mt-5 mx-2">
      <SimpleGrid cols={1}>
        {items.map((e) => (
          <Card key={e} className="mb-2" shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section className="mb-2">
              <Image
                src={
                  e.image_url ||
                  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                }
                height={160}
                alt="Norway"
              />
            </Card.Section>
            <Text weight={500}>{e.name}</Text>
            <Text size="sm" color="dimmed">
              {dayjs(e.start_at).format("DD.MM.YYYY")}
            </Text>
            <Link style={{ textDecoration: "none" }} to={`event/${e}`}>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Подробнее
              </Button>
            </Link>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
