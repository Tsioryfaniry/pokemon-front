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
}
