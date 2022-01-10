import Manifest, { getEmptyManifest } from "entities/Manifest";
import ManifestSetActionType from "store/actions/manifest/types";
import { SET_MANIFEST } from "store/constants/manifest";

const ManifestReducer = (state = getEmptyManifest(), action: ManifestSetActionType): Manifest => {
  switch (action.type) {
    case SET_MANIFEST:
      return action.manifest;
    default:
      return state;
  }
};

export default ManifestReducer;
