import { powerModifiersDS } from "../../dataSources";
import { PowerResolvers } from "../../types";

export const power: PowerResolvers = {
  powerModifiers: ({ powerModifiers }) => {
    // const { powerModifiers } = parent;

    return powerModifiersDS.filter((pm) => powerModifiers.includes(pm.id));
  },
};
