import { PowerModifier, PowerResolvers } from "../../types";

export const power: PowerResolvers = {
  powerModifiers: async (parent, _, { dataSources }) => {
    const powerModifiersArr: PowerModifier[] = [];
    for (const id of parent.powerModifiers) {
      powerModifiersArr.push(
        await dataSources.powerModifiersAPI.getPowerModifierById(id),
      );
    }

    return powerModifiersArr;
  },
};
