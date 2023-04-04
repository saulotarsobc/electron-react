import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">👉 Home</Link>
        <br />
        <Link to="/contatos">👉 Contatos</Link>
      </nav>
    </header>
  );
}
