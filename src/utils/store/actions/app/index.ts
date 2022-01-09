import { ModalType } from "reducers/AppReducer/types";
import { SET_MODAL } from "store/constants/app";
import { ActionSetModalType } from "./types";

// eslint-disable-next-line import/prefer-default-export
export const actionSetModal = (modal: ModalType): ActionSetModalType => ({
  type: SET_MODAL,
  modal
});
