import Manifest from "entities/Manifest";
import { SET_MANIFEST } from "store/constants/manifest";
import ManifestSetActionType from "./types";

const manifestSetAction = (manifest: Manifest): ManifestSetActionType => ({
  type: SET_MANIFEST,
  manifest
});

export default manifestSetAction;
