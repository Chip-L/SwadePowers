import { RESTDataSource } from "@apollo/datasource-rest";
import { PowerModifier } from "../types";

export class PowerModifiersAPI extends RESTDataSource {
  baseURL: string = process.env.BASE_URL ?? "";

  async getPowerModifiers() {
    console.log("getPowers", { baseURL: this.baseURL });
    const data = await this.get("powerModifiers");
    return data;
  }

  async getPowerModifierById(id: string) {
    console.log("getPowerModifierById", { id });
    const data = await this.get("powerModifiers");

    return data.find((power: PowerModifier) => power.id === id) ?? null;
  }
}
