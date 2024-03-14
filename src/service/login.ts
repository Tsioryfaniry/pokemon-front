import axios from "axios";
import Http from "./http";

export default class UserService {
  static async login(data: Object) {
    try {
      return await axios.post(
        `https://pokemon-xgt1.onrender.com/api/users/login`,
        data
      );
    } catch (e) {
      console.error("login error", e);
      throw e;
    }
  }
  static async userIsAuthentic() {
    try {
      const res = await axios.post("/users/auth", { message: "token" });
      return res;
    } catch (error: any) {
      console.error(
        "Error catched at UserService.userIsAuthentic post => ",
        error.message
      );
      throw error;
    }
  }
}
