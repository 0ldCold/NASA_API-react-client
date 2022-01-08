import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Manifest, { getEmptyManifest } from "entities/Manifest";
import RoverSelector from "components/custom/RoverSelector";
import RoversName from "entities/RoversName";
import { getManifest } from "api/missionManifests";
import ManifestInfo from "components/custom/ManifestInfo";
import RandomPhoto from "components/custom/RandomPhoto";

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {"Copyright © "}
      <Link color='inherit' href='https://mui.com/'>
        Material-UI
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#aa593e"
    },
    secondary: {
      main: "#693118"
    },
    background: {
      paper: "#fba87e",
      default: "#fedbca"
    },
    action: {
      selectedOpacity: 0.2
    }
  }
});

const Main: React.FC = () => {
  const [roverManifest, setRoverManifest] = useState<Manifest>(getEmptyManifest());
  const handleSelector = (roverName: string) => {
    getManifest(roverName).then((apiResp) => {
      setRoverManifest(apiResp);
    });
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' color='inherit' noWrap>
            Mars rovers
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6
          }}
        >
          <Container maxWidth='md'>
            <Typography
              component='h1'
              variant='h2'
              align='center'
              color='text.primary'
              gutterBottom
            >
              {roverManifest.name}
            </Typography>
            <ManifestInfo roverManifest={roverManifest} />
            <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
              <RoverSelector options={RoversName} onSelect={handleSelector} />
            </Stack>
          </Container>
        </Box>
        <Box>
          <Container
            sx={{
              py: 8
            }}
            maxWidth='md'
          >
            {/* End hero unit */}
            <RandomPhoto roverManifest={roverManifest} />
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component='footer'>
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
};

export default Main;