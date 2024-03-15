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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpasssword, setConfirmpasssword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleChangename = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
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
    if (username !== "" && email !== "" && password !== "") {
      if (password === confirmpasssword) {
        setError(false);
        try {
          const res = await UserService.signup(data);
          localStorage.setItem("token", res.data.token);
          setLoading(false);
          navigate("/type");
        } catch (e) {
          console.error(e);
          setLoading(false);
        }
      } else {
        setError(true);
        setLoading(false);
        console.log("test");
      }
    } else {
      setError(true);
      setLoading(false);
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
        />
        <Input
          type="text"
          label="your email"
          placeholder="email"
          onChange={handleChangeEmail}
        />
        <Input
          type="password"
          label="Password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <Input
          type="password"
          label="Confirm password"
          placeholder="confirm password"
          onChange={handleChangeConfrimePassword}
        />
        {error && <h2 className={style.error}>Error </h2>}
      </Register>
    </>
  );
}
