import { TextInput } from "@mantine/core";
import { Card, Image, Text, Badge, Button, Group, Divider, SimpleGrid } from "@mantine/core";
import { useState } from "react";
import { apiURL } from "../helpers/api";
import dayjs from "dayjs";

export default function Advertising() {
  const [searchResult, setSearchResult] = useState([]);

  async function handleInput(value) {
    if (value.length < 5) return;
    const response = await fetch(apiURL + "find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name: value,
      }),
    });
    const result = await response.json();
    if (result.length > 5) result.length = 5;
    setSearchResult(result);
  }
  return (
    <div className="mt-4">
      <TextInput
        className="mb-4"
        onChange={(e) => handleInput(e.target.value)}
        placeholder="Поиск мероприятия"
        variant="filled"
        size="md"
        withAsterisk
      />
      <div>
        {searchResult.map((e) => (
          <Card className="mb-3" shadow="sm" padding="lg" radius="md" withBorder>
            <Group position="apart" mb="xs">
              <div className="d-flex">
                <Text weight={500}>{e.name} </Text>
                <div className="ms-2">{dayjs(e.start_at).format("DD.MM.YYYY")}</div>
              </div>
              <Badge color="pink" variant="light">
                Добавить в приоритет
              </Badge>
            </Group>
          </Card>
        ))}
      </div>
    </div>
  );
}
