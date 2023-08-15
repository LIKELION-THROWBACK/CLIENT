import { selector } from "recoil";
import { makeModalOpen, applyModalOpen } from "./atom";

// 모임 개설 모달 열렸는지 유무
export const isMakeModalOpen = selector({
  key: "isMakeModalOpen",
  get: ({ get }) => get(makeModalOpen),
  set: ({ set }, newChange) => {
    set(makeModalOpen, newChange);
  },
});
// 모임 신청 모달 열렸는지 유무
export const isApplyModalOpen = selector({
  key: "isApplyModalOpen",
  get: ({ get }) => get(applyModalOpen),
  set: ({ set }, newChange) => {
    set(applyModalOpen, newChange);
  },
});
