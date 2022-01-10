import React, { useEffect, useRef } from "react";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import RoverSelector from "components/custom/RoverSelector";
import RoverNames from "entities/RoverNames";
import { getManifest } from "api/missionManifests";
import ManifestInfo from "components/custom/ManifestInfo";
import RandomPhoto from "components/custom/RandomPhoto";
import store from "store/index";
import { useAppSelector } from "utils/hooks/useAppSelector";
import manifestSetAction from "store/actions/manifest";
import useAppDispatch from "utils/hooks/useAppDispatch";

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
  const manifest = useAppSelector((state) => state.manifest);
  const dispatch = useAppDispatch();

  const handleSelector = (roverName: string) => {
    getManifest(roverName).then((apiResp) => {
      dispatch(manifestSetAction(apiResp));
    });
  };

  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      handleSelector(RoverNames[0]);
    }
  });

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
              {manifest.name}
            </Typography>
            <ManifestInfo roverManifest={manifest} />
            <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
              <RoverSelector options={RoverNames} onSelect={handleSelector} />
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
            <RandomPhoto roverManifest={manifest} />
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
