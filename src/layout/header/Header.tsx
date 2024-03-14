import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("login");
  };
  return (
    <div>
      <header className={styles.header}>
        <h4>Pokemon</h4>
        <nav className={styles.nav}>
          <Link to="type">Type</Link>
          <Link to="pokemon">pokemon</Link>
          <Link to="pokemon">Cateory</Link>
        </nav>
        <div className={styles.header__register}>
          <Link to="login">Login</Link>
          <div className={styles.header__log} onClick={handleLogout}>
            <span>Log out</span>
          </div>
        </div>
      </header>
    </div>
  );
}
