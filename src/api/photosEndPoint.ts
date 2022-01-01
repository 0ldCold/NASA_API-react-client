import { AxiosResponse } from "axios";
import { instance, API_URL } from "./instance";

export const getPhotosEndPoint = async (
  roverName: string,
  sol?: number,
  earth_date?: string,
  camera?: string,
  page?: number
): Promise<AxiosResponse<PhotosApiData>> => {
  return instance.get<PhotosApiData>(`${API_URL}/rovers/${roverName}/photos`, {
    params: {
      earth_date,
      sol,
      camera,
      page
    }
  });
};
// , {
//   params: {
//     earth_date,
//     camera,
//     page
//   }
// }

export interface PhotosApiData {
  photos: Photos[];
}

export interface Photos {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    [index: number]: {
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    };
  };
}
