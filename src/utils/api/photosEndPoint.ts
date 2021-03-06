import RoverPhotos from "entities/RoverPhotos";
import { instance, API_URL } from "./instance";

export const getPhotosEndPoint = async (
  roverName: string,
  sol?: number,
  earth_date?: string,
  camera?: string,
  page?: number
): Promise<RoverPhotos> => {
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
  photos: RoverPhotos;
}
