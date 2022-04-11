import React, { useState } from "react";
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./Select.scss";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getIndex(value, arr, prop) {
  for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
          return i;
      }
  }
  return -1; //to handle the case where the value doesn't exist
}

function getStyles(list, selected, theme){

  return {
    fontWeight:
     getIndex(list,selected,"id") === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

 function MySelect(props) {
  const theme = useTheme();
  const [name, setName] = useState(props.default.id)
 

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    props.onChange(event.target.value)
  };
 
  return (
    <div>
      <FormControl className="select"
       sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{props.placeHolder}</InputLabel>
        <Select
        //  defaultValue={props.default.id} 
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={name}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {props.data.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={getStyles(props.data, name, theme)}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MySelect;