import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, HoverCard } from "@mantine/core";
import Map from "../components/Map";

import { apiURL } from "../helpers/api";

export default function EventsMap() {
  // const getEvents = () => {
  //   const doFetch = async () => {
  //     const response = await fetch(apiURL + "events");
  //     const result = await response.json();
  //     console.log(result);
  //   };
  //   doFetch();
  // };

  // useEffect(getEvents, []);

  return (
    <Row>
      <Col md="3">
        <div style={{ height: "85vh", overflow: "scroll" }}>
          <SimpleGrid cols={1}>
            {[1, 2, 3, 4, 5, 6, 7].map((e) => (
              <Card key={e} className="mb-2" shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section className="mb-2">
                  <Image
                    src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                    height={160}
                    alt="Norway"
                  />
                </Card.Section>
                <Text weight={500}>Название</Text>
                <Text size="sm" color="dimmed">
                  With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and
                  around the fjords of Norway
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
          <Map />
        </div>
      </Col>
    </Row>
  );
}
