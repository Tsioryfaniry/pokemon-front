// import { Form } from "react-router-dom";

import Input from "../../components/form/input/Input";
import Register from "../../components/common/register/Register";
import { FormEvent, useState } from "react";
import UserService from "../../service/login";
import { useNavigate } from "react-router-dom";
// function action(){

// }

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [pasword, setPassword] = useState<string>("");
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
      password: pasword,
    };
    try {
      const res = await UserService.login(data);
      localStorage.setItem("token", res.data.token);
      navigate("/type");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <Register title="Login" onSubmit={handleSubmit}>
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
        </Register>
      </div>
    </>
  );
}
