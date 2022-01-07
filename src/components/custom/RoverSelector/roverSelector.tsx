import React, { FC } from "react";
import Select, { ActionMeta } from "react-select";

const RoverSelector: FC<{ options: string[]; onSelect: (value: string) => void }> = ({
  onSelect,
  options
}) => {
  interface Option {
    label: string;
    value: string;
  }
  const selectOptions: Option[] = options.map((item) => {
    return {
      value: item,
      label: item
    };
  });
  const handleSelectChange = (option: Option | null) => {
    if (option != null) {
      onSelect(option.value);
    }
  };

  return (
    <div className='selector'>
      <Select options={selectOptions} onChange={handleSelectChange} />
    </div>
  );
};

export default RoverSelector;
