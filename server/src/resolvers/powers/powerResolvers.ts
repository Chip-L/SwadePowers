import { powerModifiersDS } from "../../dataSources";
import { PowerModel, PowerResolvers } from "../../types";

// any is for Context type
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const powerResolvers: PowerResolvers<any, PowerModel> = {
  powerModifiers: (parent) => {
    const { powerModifiers } = parent;

    return powerModifiersDS.filter((pm) => powerModifiers.includes(pm.id));
  },
};
