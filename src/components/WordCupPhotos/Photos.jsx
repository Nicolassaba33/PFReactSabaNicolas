import "./Photos.css";
import { Card, CardMedia } from "@mui/material";

const Photos = ({ photo }) => {
  return (
    <div className="photo-container">
      <Card class sx={{ maxWidth: 1200 }}>
        <CardMedia
          sx={{ height: 680 }}
          image={photo.Imagen}
          title={photo.Titulo}
        />
      </Card>
    </div>
  );
};

export default Photos;
