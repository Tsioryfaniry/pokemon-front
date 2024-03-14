// import { Form, Link } from "react-router-dom";

import Input from "../../components/form/input/Input";
import Register from "../../components/common/register/Register";

export default function SignUp() {
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
    <>
      <Register title="Sign Up">{Items}</Register>
    </>
  );
}
