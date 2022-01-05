import { getPhotosEndPoint } from "api/photosEndPoint";
import RoverSelector from "components/RoverSelector/roverSelector";
import React, { useState } from "react";

const RandomPhoto: React.FC = () => {
  const [rover, setRover] = useState("Curiosity");
  const [img, setImg] = useState("");
  const rovers: string[] = ["Curiosity", "Opportunity", "Spirit"];

  const getRandomPhoto = async (roverName: string): Promise<string> => {
    const apiResp = await getPhotosEndPoint(roverName, undefined, "2015-06-03");
    const randomIndex = Math.floor(Math.random() * apiResp.length);
    return apiResp[randomIndex]?.img_src;
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
      <RoverSelector onSelect={setRoverInComponent} options={rovers} />
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
