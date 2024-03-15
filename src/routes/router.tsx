import Type from "../pages/type/Type";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";
import Pokemon from "../pages/pokemon-list/Pokemon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "type",
        element: <Type />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "pokemon",
        element: <Pokemon />,
      },
    ],
  },
]);
