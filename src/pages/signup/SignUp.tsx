import React from "react";
// import { Form, Link } from "react-router-dom";
import Heading from "../../components/heading/Heading";
import Input from "../../components/input/Input";
import style from "./signup.module.scss";
import Button from "../../components/button/Button";

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
      <Heading component="h1" variant="h1" className="text-center">
        Sign up
      </Heading>

      <form action="/signup" method="post" className="max-w-sm mx-auto pt-4">
        {Items}
        <Button txt="Rgister now" />
      </form>
    </>
  );
}
