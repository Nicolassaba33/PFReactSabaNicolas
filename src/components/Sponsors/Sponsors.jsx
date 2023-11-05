import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, Grid } from "@mui/material";
import "./Sponsors.css";
const Sponsor = ({ sponsor }) => {
  return (
    <div className="Sponsors">
      <Grid item xs={50} className="gridSponsors">
        <Card className="cardSponsors">
          <CardActionArea>
            <CardMedia
              component="img"
              image={sponsor.Imagen}
              className="imgSponsor"
            />
          </CardActionArea>
        </Card>
      </Grid>
    </div>
  );
};

export default Sponsor;
