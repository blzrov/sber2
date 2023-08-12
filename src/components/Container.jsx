import { Container } from "react-bootstrap";

export default function MyContainer(props) {
  return (
    <Container fluid className="mt-2">
      {props.children}
    </Container>
  );
}
