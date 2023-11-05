import { Grid, Container } from "@mui/material";
import Noticias from "./Noticias";

const NoticiasList = ({ noticias }) => {
  return (
    <div className="NoticiasList">
      <div className="news">
        <Container maxWidth="lg">
          <Grid container spacing={2} className="gridNews">
            {noticias.map((news) => (
              <Noticias news={news} key={news.id} />
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default NoticiasList;
