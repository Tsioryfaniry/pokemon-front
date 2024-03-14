import axios from "axios";
import Http from "./http";

export default class LoginUser {
  static async userLogin(data: Object) {
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
}
