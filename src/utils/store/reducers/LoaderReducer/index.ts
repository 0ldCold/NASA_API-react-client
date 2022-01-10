import LoaderActionType from "store/actions/loader/types";
import { LOADER } from "store/constants/loader";
import LoaderStateType from "./types";

const initState: LoaderStateType = {
  loading: false
};

const LoaderReducer = (state = initState, action: LoaderActionType): LoaderStateType => {
  switch (action.type) {
    case LOADER:
      return {
        loading: action.loading
      };
    default:
      return state;
  }
};

export default LoaderReducer;
