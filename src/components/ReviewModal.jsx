import { Slider, rem, Textarea, SimpleGrid, Title, Modal, Button, Group } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconHeart } from "@tabler/icons-react";

export default function ReviewModal({ opened, close }) {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <Modal opened={opened} onClose={close} title="">
      <form onSubmit={form.onSubmit(() => {})}>
        <Title
          order={2}
          size="h1"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
          weight={900}
          align="center"
        >
          Ваш отзыв
        </Title>

        <Textarea
          className="mb-4"
          mt="md"
          label="Комментарий"
          placeholder="Напишите комментарий, который получит организатор. Комментарий будет доступен для других пользователей."
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps("message")}
        />
        <Slider
          thumbChildren={<IconHeart size="1rem" />}
          color="red"
          label={null}
          defaultValue={40}
          thumbSize={26}
          styles={{ thumb: { borderWidth: rem(2), padding: rem(3) } }}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md">
            Отправить
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
