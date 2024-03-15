import { useEffect } from "react";
import UserService from "../service/login";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./header/Header";

export default function Layout() {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (location.pathname === "/login" || location.pathname === "/signup") {
      if (!token || token === "") {
        return;
      } else {
        return navigate("/pokemon");
      }
    }

    if (!token || token === "") {
      return navigate("/login");
    }
    // const verifyToken = async () => {
    //   try {
    //     const res = await UserService.userIsAuthentic();
    //     return res;
    //   } catch (error: any) {
    //     navigate("/login", {
    //       replace: true,
    //     });
    //   }
    // };
    // verifyToken();
  }, [location]);
  return (
    <div className={styles.container}>
      {!location.pathname.includes("login" || "signup") && <Header />}
      <Outlet />
    </div>
  );
}
