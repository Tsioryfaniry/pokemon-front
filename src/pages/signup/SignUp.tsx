// import { Form, Link } from "react-router-dom";

import Input from "../../components/form/input/Input";
import Register from "../../components/common/register/Register";
import { FormEvent, useState } from "react";
import UserService from "../../service/signup";
import { useNavigate } from "react-router-dom";
import style from "./signup.module.scss";
import clsx from "clsx";

export default function SignUp() {
  const [username, setUsername] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpasssword, setConfirmpasssword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangename = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setemail(e.currentTarget.value);
  };
  const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };
  const handleChangeConfrimePassword = (
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setConfirmpasssword(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const data = {
      username: username,
      email: email,
      password: password,
    };
    if (password === confirmpasssword) {
      setError(false);
      if (username !== "" && email !== "" && password !== "") {
        try {
          const res = await UserService.signup(data);
          localStorage.setItem("token", res.data.token);
          setLoading(true);
          navigate("/type");
        } catch (e) {
          console.error(e);
          setLoading(true);
        }
      }
    } else {
      setError(true);
    }
  };
  return (
    <>
      <Register title="Sign Up" onSubmit={handleSubmit} loader={loading}>
        <Input
          type="text"
          label="Full name"
          placeholder="full name"
          onChange={handleChangename}
          value="Rasoa"
        />
        <Input
          type="text"
          label="your email"
          placeholder="email"
          onChange={handleChangeEmail}
          value="rasoa@gmail.com"
        />
        <Input
          type="password"
          label="Password"
          placeholder="password"
          onChange={handleChangePassword}
          value="ddd"
        />
        <Input
          type="password"
          label="Confirm password"
          placeholder="confirm password"
          onChange={handleChangeConfrimePassword}
          value="ddd"
        />
        {error && (
          <h2 className={style.error}> Verifier votre mot de passe </h2>
        )}
      </Register>
    </>
  );
}
