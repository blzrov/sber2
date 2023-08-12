import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, CloseButton } from "@mantine/core";
import Map from "../components/Map";

import { apiURL } from "../helpers/api";

export default function EventsMap() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const getEvents = () => {
    //   const doFetch = async () => {
    //     const response = await fetch(apiURL + "events");
    //     const result = await response.json();
    //     localStorage.setItem('data', JSON.stringify(result))
    //     console.log(result);
    //   };
    //   doFetch();
    const data = JSON.parse(localStorage.getItem("data"));
    setEvents(data.filter((e) => e.description_short.length > 100));
  };

  useEffect(getEvents, []);

  if (events.length == 0) return;

  return (
    <Row>
      <Col md="3">
        <div style={{ height: "85vh", overflow: "scroll" }}>
          <SimpleGrid cols={1}>
            {events
              .filter((e) => e.id === selectedEvent || selectedEvent === null)
              .map((e) => (
                <Card key={e.id} className="mb-2" shadow="sm" padding="lg" radius="md" withBorder>
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
                  <Text className="d-flex align-items-center" weight={500}>
                    {e.name} {selectedEvent && <CloseButton onClick={() => setSelectedEvent(null)} />}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {e.description_short}
                  </Text>
                  <Link style={{ textDecoration: "none" }} to={`event/${e}`}>
                    <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                      Просмотреть
                    </Button>
                  </Link>
                </Card>
              ))}
          </SimpleGrid>
        </div>
      </Col>
      <Col md="9">
        <div style={{ width: "100%", height: "85vh" }}>
          <Map events={events} onMarkerClick={setSelectedEvent} />
        </div>
      </Col>
    </Row>
  );
}
