import { Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { reducer } from '../../main';

export const Calificion=({vote_average}:{vote_average:number})=>{
    const [value, setValue] = useState(0);

    useEffect(()=>{
        setValue(vote_average/2)
})
    return (
      <Box component="fieldset" mb={3} borderColor="transparent" className="contentCalification">
        <Typography component="legend">Popularity</Typography>
        <Rating
          name="Popularity"
          value={value}
          onChange={(event:any, newValue:any) => {
            setValue(newValue);
          }}
          readOnly
        />
      </Box>
    )
}