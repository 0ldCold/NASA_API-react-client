import { useDispatch } from "react-redux";
import { AppDispatch } from "store/index";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
