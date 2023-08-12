import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Card, Image, Text, Badge, Button, Group, SimpleGrid, HoverCard } from "@mantine/core";
import Map from "../components/Map";

import { apiURL } from "../helpers/api";

export default function EventsList() {
  const [events, setEvents] = useState([]);
  const getEvents = () => {
    //   const doFetch = async () => {
    //     const response = await fetch(apiURL + "events");
    //     const result = await response.json();
    //     localStorage.setItem('data', JSON.stringify(result))
    //     console.log(result);
    //   };
    //   doFetch();
    const data = JSON.parse(localStorage.getItem("data"));
    setEvents(data);
  };

  useEffect(getEvents, []);

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", coFls: 1, spacing: "sm" },
      ]}
    >
      {events
        .filter((e) => e.description_short.length > 100)
        .map((e) => (
          <Card key={e.id} className="m-2" shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={
                  e.image_url ||
                  "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                }
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Text lineClamp={1} className="my-1" weight={500}>
              {e.name}
            </Text>
            <div className="d-flex align-items-baseline">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Badge style={{ cursor: "pointer" }} color="pink" variant="light">
                    2ГИС
                  </Badge>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <div style={{ width: "100%", height: "15vh" }}>
                    <Map startMarker={e.geolocation} />
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <div className="ms-2">{dayjs(e.start_at).format("DD.MM.YYYY")}</div>
            </div>

            <Text className="mt-1" lineClamp={3} size="sm" color="dimmed">
              {e.description_short}
            </Text>

            <Link style={{ textDecoration: "none" }} to={`event/${e.id}`}>
              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Просмотреть
              </Button>
            </Link>
          </Card>
        ))}
    </SimpleGrid>
  );
}
