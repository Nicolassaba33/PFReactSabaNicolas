import Photos from "./Photos";
import { Grid, Container, ImageList, ImageListItem } from "@mui/material";
import "./Photos.css";

const PhotosList = ({ photos }) => {
  return (
    <Container className="listPhotos">
      <Grid container className="gridPhotos">
        <ImageList
          sx={{ width: 1200, height: 2050 }}
          variant="quilted"
          cols={3}
        >
          {photos.map((photo) => (
            <Photos photo={photo} key={photo.id} />
          ))}
        </ImageList>
      </Grid>
    </Container>
  );
};

export default PhotosList;
