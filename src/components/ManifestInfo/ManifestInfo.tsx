import React, { useEffect, useState, FC } from "react";
import { getManifest } from "api/missionManifests";
import { Manifest, getEmptyManifest } from "src/entities/Manifest";
import RoverSelector from "components/RoverSelector/roverSelector";

const ManifestInfo: FC = () => {
  const [rover, setRover] = useState<string>("Curiosity");
  const [manifest, setManifest] = useState<Manifest>(getEmptyManifest());
  const rovers: string[] = ["Curiosity", "Opportunity", "Spirit"];

  useEffect(() => {
    getManifest(rover).then((apiResp) => {
      setManifest(apiResp);
    });
  }, [rover]);

  function setRoverInComponent(param: string): void {
    setRover(param);
  }

  return (
    <div className='center'>
      <RoverSelector onSelect={setRoverInComponent} options={rovers} />
      <br />
      <div className='manifest'>
        <label>Name of the Rover:</label>
        <input type='text' value={manifest.name} disabled />

        <label>The Rover&apos;s launch date from Earth:</label>
        <input type='text' value={manifest.launch_date} disabled />

        <label>The Rover&apos;s landing date on Mars:</label>
        <input type='text' value={manifest.landing_date} disabled />

        <label>The Rover&apos;s mission status:</label>
        <input type='text' value={manifest.status} disabled />

        <label>The most recent Martian sol from which photos exist:</label>
        <input type='text' value={manifest.max_sol} disabled />

        <label>The most recent Earth date from which photos exist:</label>
        <input type='text' value={manifest.max_date} disabled />

        <label>Number of photos taken by that Rover:</label>
        <input type='text' value={manifest.photos.length} disabled />
      </div>
    </div>
  );
};

export default ManifestInfo;
