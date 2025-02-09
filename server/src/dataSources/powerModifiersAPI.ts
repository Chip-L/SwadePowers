import { RESTDataSource } from "@apollo/datasource-rest";
import { PowerModifier } from "../types";

export class PowerModifiersAPI extends RESTDataSource {
  baseURL: string = process.env.BASE_URL ?? "";

  async getPowers() {
    console.log("getPowers", { baseURL: this.baseURL });
    const data = await this.get("powerModifiers");
    return data;
  }

  async getPowerById(id: string) {
    const data = await this.get("powerModifiers");

    return data.find((power: PowerModifier) => power.id === id);
  }
}
