import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { getPhotosEndPoint } from "api/photosEndPoint";
import Manifest from "entities/Manifest";
import React, { useState, useEffect, useCallback } from "react";
import { getRandomInt, getArrayOfRandomUniqueInt } from "utils/utils";
import Photo from "entities/Photo";
import RoverPhotos from "entities/RoverPhotos";

const RandomPhoto: React.FC<{ roverManifest: Manifest }> = ({ roverManifest }) => {
  const photosQuantity = 9;
  const [photos, setPhotos] = useState<Photo[]>([]);

  const getRandomPhoto = async (manifest: Manifest): Promise<Photo[]> => {
    // Если фотографий в указанный марсианский день (Sol) меньше 9, то ищем по другому марсианскому дню
    // Повторяется пока не найдет нужный Sol
    // Но такое случается редко и зачастую данный цикл проходит только 1 раз
    let apiResp: RoverPhotos;
    do {
      const randomSol = getRandomInt(1, manifest.max_sol);
      // eslint-disable-next-line no-await-in-loop
      apiResp = await getPhotosEndPoint(manifest.name, randomSol);
    } while (apiResp.length < 9);
    const randUniqInts = getArrayOfRandomUniqueInt(0, apiResp.length - 1, photosQuantity);
    const photosSrc: Photo[] = [];
    randUniqInts.forEach((randomInt: number, index: number) => {
      photosSrc.push({
        key: index.toString(),
        imgSrc: apiResp[randomInt].img_src
      });
    });
    return photosSrc;
  };
  const memoGetRandomPhoto = useCallback(getRandomPhoto, [roverManifest]);

  useEffect(() => {
    if (roverManifest.name !== "") {
      memoGetRandomPhoto(roverManifest).then((result) => {
        setPhotos(result);
      });
    }
  }, [memoGetRandomPhoto, roverManifest]);

  const handleButtonView = (imgSrc: string) => {
    window.open(imgSrc);
  };

  return (
    <Grid container spacing={4}>
      {photos.map((photo) => (
        <Grid item key={photo.key} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <CardMedia component='img' sx={{}} image={photo.imgSrc} alt={photo.key} />
            <CardContent sx={{ flexGrow: 1 }}>
              {photo.heading != null && (
                <Typography gutterBottom variant='h5' component='h2'>
                  Heading
                </Typography>
              )}
              {photo.description != null && (
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              )}
            </CardContent>
            <CardActions>
              <Button size='small' onClick={() => handleButtonView(photo.imgSrc)}>
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RandomPhoto;
