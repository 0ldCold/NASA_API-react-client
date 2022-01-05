import React, { useState, FC, FormEvent } from "react";

const RoverSelector: FC<{ options: string[]; onSelect: (value: string) => void }> = ({
  onSelect,
  options
}) => {
  const [rover, setRover] = useState<string>("Curiosity");

  const handleSelectChange = (value: string): void => {
    setRover(value);
    onSelect(value);
  };

  return (
    <div className='selector'>
      <select value={rover} onChange={(e) => handleSelectChange(e.currentTarget.value)}>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoverSelector;
