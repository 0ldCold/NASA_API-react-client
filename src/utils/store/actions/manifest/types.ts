import Manifest from "entities/Manifest";
import { SET_MANIFEST } from "store/constants/manifest";

type ManifestSetActionType = {
  type: typeof SET_MANIFEST;
  manifest: Manifest;
};

export default ManifestSetActionType;
