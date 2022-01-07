import Manifest from "entities/Manifest";
import { instance, API_URL } from "./instance";

export const getManifest = async (roverName: string): Promise<Manifest> => {
  const ApiResp = await instance.get<MissionApiData>(`${API_URL}/manifests/${roverName}`);
  return ApiResp.data.photo_manifest;
};

export interface MissionApiData {
  photo_manifest: Manifest;
}
