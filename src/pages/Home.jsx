import Map from "../components/Map";
import { Link } from "react-router-dom";
import HomeWidget from "../components/HomeWidget";
import { Row, Col } from "react-bootstrap";
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, HoverCard } from "@mantine/core";

export default function Home() {
  return (
    <Row>
      <Col md="3">
        <List />
      </Col>
      <Col md="6">
        <Card className="mt-5" shadow="sm" padding="lg" radius="md" withBorder>
          <HomeWidget />
          <div style={{ width: "100%", height: "50vh" }}>
            <Map />
          </div>
        </Card>
      </Col>
      <Col md="3">
        <List />
      </Col>
    </Row>
  );
}

function List() {
  return (
    <div className="mt-5 mx-2">
      <SimpleGrid cols={1}>
        {[1, 2, 3].map((e) => (
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
              Дата
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
