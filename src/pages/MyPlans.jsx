import { useState } from "react";
import { Card, Image, Text, Badge, Button, Group, Divider, SimpleGrid } from "@mantine/core";
import dayjs from "dayjs";

export default function MyPlans() {
  const [state, setState] = useState(1);
  return (
    <div>
      <SimpleGrid className="mb-2" cols={2} spacing="xl" verticalSpacing="xs">
        <Button onClick={() => setState(1)} variant={state === 1 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Мои планы
        </Button>
        <Button onClick={() => setState(2)} variant={state === 2 ? "filled" : "light"} radius="xs" size="md" uppercase>
          Избранное
        </Button>
      </SimpleGrid>
      {state === 1 ? (
        <div>
          {[0, 1, 2].map((e) => (
            <Card className="mb-3" shadow="sm" padding="lg" radius="md" withBorder>
              <Group position="apart" mb="xs">
                <div className="d-flex">
                  <Text weight={500}>Название </Text>
                  <div className="ms-2">123</div>
                </div>
                <Badge color="gray" variant="light">
                  Оставить отзыв
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Описание
              </Text>

              <Button variant="light" color="blue" fullWidth mt="md" radius="md">
                Перейти к мероприятию
              </Button>
            </Card>
          ))}
          <Divider my="xs" label="Прошедшие мероприятия" labelPosition="center" />
          {[0, 1, 2].map((e) => (
            <Card className="mb-3" shadow="sm" padding="lg" radius="md" withBorder>
              <Group position="apart" mb="xs">
                <div className="d-flex">
                  <Text weight={500}>Название </Text>
                  <div className="ms-2">123</div>
                </div>
                <Badge color="green" variant="light">
                  Оставить отзыв
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Описание
              </Text>

              <Button variant="light" color="gray" fullWidth mt="md" radius="md">
                Перейти к мероприятию
              </Button>
            </Card>
          ))}
        </div>
      ) : (
        <div>2</div>
      )}
    </div>
  );
}
