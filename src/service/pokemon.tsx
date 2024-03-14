import Http from "./http";

export default class Pokemon extends Http {
  static async pokemonList() {
    try {
      return await this.get("/api/pokemon");
    } catch (e) {
      console.error("get pokemon", e);
      throw e;
    }
  }
}
