import { PowerResolvers } from "../../types";

export const power: PowerResolvers = {
  powerModifiers: ({ powerModifier: string }, _, { dataSources }) => {
    // const { powerModifiers } = parent;
    return dataSources.powerModifiers.getPowerModifierById(powerModifier);
    // return powerModifiersDS.filter((pm) => powerModifiers.includes(pm.id));
  },
};
