import { atom } from "recoil";

export const playerPositionState = atom({
    key: "playerPosition",
    default: { speed: {}, nextspeed: {} },
});
