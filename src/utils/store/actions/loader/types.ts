import { LOADER } from "store/constants/loader";

type LoaderActionType = {
  type: typeof LOADER;
  loading: boolean;
};

export default LoaderActionType;
