import { Grid, Container, Typography } from "@mui/material";
import Sponsors from "./Sponsors";
import "./Sponsors.css";
const SponsorsList = ({ sponsors }) => {
  return (
    <div className="SponsorsList">
      <div className="sponsors">
        <Container maxWidth="lg">
          <Typography variant="h5" className="titleSponsors">
            OFFICIAL SPONSORS, SUPPORTERS & SUPPLIERS
          </Typography>
          <Grid container spacing={1} className="gridSponsors">
            {sponsors.map((sponsor) => (
              <Sponsors sponsor={sponsor} key={sponsor.id} />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default SponsorsList;
