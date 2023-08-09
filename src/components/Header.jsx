import { Link } from "react-router-dom";
import ButtonScheme from "./ButtonScheme";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/event/1">Event</Link>
        </li>
        <li>
          <ButtonScheme />
        </li>
      </ul>
    </nav>
  );
}
