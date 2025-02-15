import { RESTDataSource } from "@apollo/datasource-rest";
import { Power } from "../types";
import { getRequiredEnvVar } from "../utils/env/env";

const BASE_URL = getRequiredEnvVar("BASE_URL");

export class PowersAPI extends RESTDataSource {
  baseURL: string = BASE_URL;

  async getPowers() {
    return this.get("powers");
  }

  async getPowerById(id: string) {
    const data = await this.get("powers");

    return data.find((power: Power) => power.id === id);
  }
}
