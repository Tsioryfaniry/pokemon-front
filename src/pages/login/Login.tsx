// import { Form } from "react-router-dom";
// import Heading from "@/components/heading/Heading";
import Heading from "../../components/heading/Heading";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import style from "./login.module.scss";
// function action(){

// }

export default function Login() {
  const items = [
    { type: "text", label: "your email", placeholder: "your email" },
    { type: "text", label: "your email", placeholder: "phone number" },
    { type: "text", label: "Password", placeholder: "password" },
    { type: "text", label: "Confirm password", placeholder: "password" },
  ];
  const Items = items.map((item) => (
    <Input
      key={item.label}
      type={item.type}
      placeholder={item.placeholder}
      label={item.label}
    />
  ));
  return (
    <div className="max-w-sm m-auto pt-4">
      <Heading>Login</Heading>
      <form className="max-w-sm mx-auto pt-4" action="/login">
        {Items}
        <Button txt="Login" />
      </form>
    </div>
  );
}
