import { LOADER } from "store/constants/loader";
import LoaderActionType from "./types";

const loaderAction = (loading: boolean): LoaderActionType => ({
  type: LOADER,
  loading
});

export default loaderAction;
