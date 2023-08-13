import { useState } from "react";
import { Table, Button, TextInput } from "@mantine/core";

export default function Feedback() {
  const rows = elements.map((element) => (
    <tr key={element.position}>
      <th>Ивент + дата</th>
      <td>Иванов Иван Иванович</td>
      <td>КрУТО, Классно!</td>
      <td>89</td>
    </tr>
  ));

  return (
    <div>
      <div style={{ overflow: "scroll" }}>
        <Table striped highlightOnHover horizontalSpacing="xl" verticalSpacing="sm" fontSize="lg">
          <thead>
            <tr>
              <th>Ивент</th>
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
      "ывфвфвфв.an t@mail.rtov.ant @ывывыв.rtov.a nt@mail.r tov.ant@mail.rt ov.ant@mail.r tov.ant@ma il.rtov .ant@mail.rtov.ant@ma il.rttov .ant@ma il.ruывф вфвфв.an t@mail.rtov.ant @ывывыв.rtov.a nt@mail.r tov.ant@mail.rt ov.ant@mail.r tov.ant@ma il.rtov .ant@mail.rtov.ant@ma il.rttov .ant@ma il.ruывфвфвфв.an t@mail.rtov.ant @ывывыв.rtov.a nt@mail.r tov.ant@mail.rt ov.ant@mail.r tov.ant@ma il.rtov .ant@mail.rtov.ant@ma il.rttov .ant@ma il.ru",
    mass: "Белозеров Денис Васильевич",
    symbol: "C",
    name: "Carbon",
  },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];
