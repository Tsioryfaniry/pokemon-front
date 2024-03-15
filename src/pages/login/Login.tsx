import Input from "../../components/form/input/Input";
import Register from "../../components/common/register/Register";
import { FormEvent, useState } from "react";
import UserService from "../../service/login";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";
import Button from "../../components/common/button/Button";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleChangeUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };
    setLoading(true);
    setError(false);
    try {
      if (username === "" || password === "") {
        setError(true);
      } else {
        const res = await UserService.login(data);
        localStorage.setItem("token", res.data.token);
        setLoading(false);
        navigate("/pokemon");
      }
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <Register title="Login" onSubmit={handleSubmit} loader={loading}>
          <Input
            placeholder="username"
            type="text"
            onChange={handleChangeUsername}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={handleChangePassword}
          />
          {error && <p className={styles.error}>Error login</p>}
          <div className={styles.link}>
            <Link to="/signup" className={styles.signup}>
              Créer un compte
            </Link>
          </div>
        </Register>
      </div>
    </>
  );
}
