import { AxiosResponse } from "axios";
import { instance, API_URL } from "./instance";

export const getPhotosEndPoint = async (
  roverName: string,
  sol?: number,
  earth_date?: string,
  camera?: string,
  page?: number
): Promise<Photos> => {
  const ApiResp = await instance.get<PhotosApiData>(`${API_URL}/rovers/${roverName}/photos`, {
    params: {
      earth_date,
      sol,
      camera,
      page
    }
  });
  return ApiResp.data.photos;
};

export interface PhotosApiData {
  photos: Photos;
}

export interface Photos {
  [index: number]: {
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
      id: number;
      name: string;
      landing_date: string;
      launch_date: string;
      status: string;
    };
  };
  length: number;
}
