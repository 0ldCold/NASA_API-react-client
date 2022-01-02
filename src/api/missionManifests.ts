import { AxiosResponse } from "axios";
import { instance, API_URL } from "./instance";

export const getManifest = async (roverName: string): Promise<Manifest> => {
  const ApiResp = await instance.get<MissionApiData>(`${API_URL}/manifests/${roverName}`);
  return ApiResp.data.photo_manifest;
};

export interface MissionApiData {
  photo_manifest: Manifest;
}

export interface Manifest {
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  photos: {
    [index: number]: {
      sol: number;
      earth_date: string;
      total_photos: number;
      cameras: {
        [index: number]: string;
      };
    };
  };
}
