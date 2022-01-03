import { getPhotosEndPoint } from "src/api/photosEndPoint";
import React, { useState } from "react";

const Main: React.FC = () => {
  const [rover, setRover] = useState("Curiosity");
  const [img, setImg] = useState("");

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
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRover(event.target.value);
  };
  return (
    <div className='center'>
      <select value={rover} onChange={handleSelectChange}>
        <option value='Curiosity'>Curiosity</option>
        <option value='Opportunity'>Opportunity</option>
        <option value='Spirit'>Spirit</option>
      </select>
      <br />
      <button type='button' onClick={handleButton}>
        Случайная картинка
      </button>
      <br />
      <img className='roverPhoto' alt='RandomRoversPhoto' src={img} />
    </div>
  );
};

export default Main;
