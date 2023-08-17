// atom 선언
import { atom } from "recoil";
export const makeModalOpen = atom({
  key: "makeModalOpen",
  default: false,
});
export const applyModalOpen = atom({
  key: "applyModalOpen",
  default: false,
});
