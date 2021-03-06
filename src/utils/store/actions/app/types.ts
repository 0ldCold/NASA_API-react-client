import { ModalType } from "reducers/AppReducer/types";
import { SET_MODAL } from "store/constants/app";

export type ActionSetModalType = {
  type: typeof SET_MODAL;
  modal: ModalType;
};

export type AppActionTypes = ActionSetModalType;
