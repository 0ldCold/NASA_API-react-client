import React, { FC, useState, useEffect, useCallback } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const RoverSelector: FC<{
  options: string[];
  onSelect: (value: string) => void;
}> = ({ onSelect, options }) => {
  const [selectItem, setSelectItem] = useState<string>(options[0]);

  const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
    if (newValue != null) {
      setSelectItem(newValue);
    }
  };

  const memoOnSelect = useCallback(onSelect, [selectItem]);

  useEffect(() => {
    memoOnSelect(selectItem);
  }, [memoOnSelect, selectItem]);

  return (
    <ToggleButtonGroup value={selectItem} exclusive onChange={handleChange}>
      {options.map((name) => (
        <ToggleButton key={name} value={name}>
          {name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default RoverSelector;
