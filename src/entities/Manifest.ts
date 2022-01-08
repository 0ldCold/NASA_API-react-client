interface Manifest {
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
    length: number;
  };
}

export const getEmptyManifest = (): Manifest => {
  const manifest: Manifest = {
    name: "",
    landing_date: "",
    launch_date: "",
    status: "",
    max_sol: 0,
    max_date: "",
    total_photos: 0,
    photos: []
  };
  return manifest;
};

export default Manifest;
