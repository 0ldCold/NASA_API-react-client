import React, { FC } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Manifest from "entities/Manifest";

const GridItem: FC<{ text: string; value: string }> = ({ text, value }) => {
  return (
    <>
      <Grid item xs={8}>
        <Typography variant='h5' align='left' color='text.secondary' paragraph>
          {text}
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant='h5' align='left' color='text.secondary' paragraph>
          {value}
        </Typography>
      </Grid>
    </>
  );
};

const ManifestInfo: FC<{ roverManifest: Manifest }> = ({ roverManifest }) => {
  return (
    <Grid container columnSpacing={1} rowSpacing={1}>
      <GridItem text="The Rover's launch date from Earth:" value={roverManifest.launch_date} />
      <GridItem text="The Rover's landing date on Mars:" value={roverManifest.landing_date} />
      <GridItem text="The Rover's mission status:" value={roverManifest.status} />
      <GridItem
        text='The most recent Martian sol from which photos exist:'
        value={roverManifest.max_sol.toString()}
      />
      <GridItem
        text='The most recent Earth date from which photos exist:'
        value={roverManifest.max_date}
      />
      <GridItem
        text='Number of photos taken by that Rover:'
        value={roverManifest.photos.length.toString()}
      />
    </Grid>
  );
};

export default ManifestInfo;
