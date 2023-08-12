import { useState } from "react";
import { Table, Button, TextInput } from "@mantine/core";

export default function Feedback() {
  const rows = elements.map((element) => (
    <tr key={element.position}>
      <td>{element.mass}</td>
      <td>{element.position}</td>
      <td>67</td>
    </tr>
  ));

  return (
    <div>
      <div style={{ overflow: "scroll" }}>
        <Table striped highlightOnHover horizontalSpacing="xl" verticalSpacing="sm" fontSize="lg">
          <thead>
            <tr>
              <th>Пользователь</th>
              <th>Комментарий</th>
              <th>Оценка</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}

const elements = [
  {
    position:
      "ывфвфвфв.ant@mail.rtov.ant@ывывыв.rtov.ant@mail.rtov.ant@mail.rtov.ant@mail.rtov.ant@mail.rtov.ant@mail.rtov.ant@mail.rttov.ant@mail.ru",
    mass: "Белозеров Денис Васильевич",
    symbol: "C",
    name: "Carbon",
  },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
