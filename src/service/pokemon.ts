import Http from "./http";

export default class PokemonService extends Http {
  static async getList() {
    try {
      return await this.get("/api/pokemon");
    } catch (e) {
      console.error("get pokemon", e);
      throw e;
    }
  }
  static async getListPerPage(pageNumber: number | string) {
    try {
      const res = await this.get(`/api/pokemon?page=${pageNumber}`);
      return res.data;
    } catch (e) {
      console.error("get pokemon", e);
      throw e;
    }
  }
  static async catcheList() {
    try {
      return await this.get("/api/pokemon/list");
    } catch (e) {
      console.error("get pokemon catch", e);
      throw e;
    }
  }
}
