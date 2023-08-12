import { useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";

export default function Event() {
  const { id } = useParams();

  return (
    <Row>
      <Col md="6">Название</Col>
      <Col md="3">Дата</Col>
      <Col md="3">Время</Col>
    </Row>
  );
}
