import { getPhotosEndPoint } from "api/photosEndPoint";
import RoverSelector from "components/RoverSelector/roverSelector";
import React, { useState } from "react";
import RoversName from "src/entities/RoversName";
import { getRandomInt } from "utils/utils";

const RandomPhoto: React.FC = () => {
  const [rover, setRover] = useState("Curiosity");
  const [img, setImg] = useState("");

  const getRandomPhoto = async (roverName: string): Promise<string> => {
    const apiResp = await getPhotosEndPoint(roverName, undefined, "2015-06-03");
    return apiResp[getRandomInt(0, apiResp.length - 1)]?.img_src;
  };
  const handleButton = () => {
    getRandomPhoto(rover).then((imgSrc) => {
      setImg(imgSrc);
    });
  };

  function setRoverInComponent(param: string): void {
    setRover(param);
  }

  return (
    <div className='center'>
      <RoverSelector onSelect={setRoverInComponent} options={RoversName} />
      <br />
      <button type='button' onClick={handleButton}>
        Random image
      </button>
      <br />
      <img className='roverPhoto' alt='RandomRoversPhoto' src={img} />
    </div>
  );
};

export default RandomPhoto;
