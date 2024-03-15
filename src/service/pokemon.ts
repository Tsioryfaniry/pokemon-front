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
  static async getListType() {
    try {
      const res = await this.get(`/api/pokemon/type`);
      return res.data;
    } catch (e) {
      console.error("get pokemon type", e);
      throw e;
    }
  }
  static async getItemType(id: string | number) {
    try {
      const res = await this.get(`/api/pokemon/type/${id}`);
      return res.data;
    } catch (e) {
      console.error("get pokemon type", e);
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
      return await this.get("/api/pokemon/list?filter=catch");
    } catch (e) {
      console.error("get pokemon catch", e);
      throw e;
    }
  }
  static async releaseList() {
    try {
      return await this.get("/api/pokemon/list?filter=release");
    } catch (e) {
      console.error("get pokemon realese", e);
      throw e;
    }
  }
  static async catch(id: number) {
    try {
      return await this.post(`/api/pokemon/catch/${id}`, {});
    } catch (e) {
      console.error("catch pokemon catch", e);
      throw e;
    }
  }
  static async release(id: number) {
    try {
      return await this.post(`/api/pokemon/release/${id}`, {});
    } catch (e) {
      console.error("release pokemon catch", e);
      throw e;
    }
  }
  static async search(name: string) {
    try {
      return await this.get(`/api/pokemon/search?query=${name}`);
    } catch (e) {
      console.error("search pokemon ", e);
      throw e;
    }
  }
}
