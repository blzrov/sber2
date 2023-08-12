import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Table, Button, TextInput, Modal } from "@mantine/core";

export default function ModTable() {
  const [opened, { open, close }] = useDisclosure(false);

  const rows = elements.map((element) => (
    <tr key={element.position}>
      <td>{element.mass}</td>
      <td>{element.position}</td>
      <td>
        <Button color="red" size="xl" compact>
          Удалить
        </Button>
      </td>
    </tr>
  ));

  return (
    <div>
      <AddModModal opened={opened} close={close} />
      <div className="d-flex justify-content-between m-3 mb-4 flex-wrap">
        <Button onClick={open} size="md" variant="light">
          + Добавить нового модератора
        </Button>
        <TextInput size="md" variant="filled" placeholder="Поиск" withAsterisk />
      </div>
      <div style={{ overflow: "scroll" }}>
        <Table striped highlightOnHover horizontalSpacing="xl" verticalSpacing="sm" fontSize="lg">
          <thead>
            <tr>
              <th>Почта</th>
              <th>ФИО</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}

const elements = [
  { position: "molotov.ant@mail.ru", mass: "Белозеров Денис Васильевич", symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

function AddModModal({ opened, close }) {
  function handleClick() {
    console.log("a");
  }
  return (
    <Modal opened={opened} onClose={close} title="Добавить роль 'Модератор' пользователю">
      <TextInput className="mb-2" variant="filled" placeholder="Введите почту пользователя" radius="xs" size="md" />
      <Button>Добавить</Button>
    </Modal>
  );
}
