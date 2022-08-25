import { Rating } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export const Calificion = ({ vote_average }: { vote_average: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(vote_average / 2);
  }, []);
  return (
    <Box
      component="fieldset"
      mb={3}
      borderColor="transparent"
      className="contentCalification"
    >
      <Rating
        name="Popularity"
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
        }}
        sx={{ marginBottom: "1rem", fontSize: "1.3rem" }}
        readOnly
      />
    </Box>
  );
};
