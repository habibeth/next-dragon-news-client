import LatestNews from "@/components/ui/LatestNews/LatestNews";
import SideNav from "@/components/ui/SideNav/SideNav";
import { Box, Grid, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Box>
      <Container className="my-5">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <LatestNews />
          </Grid>
          <Grid item xs={4}>
            <SideNav></SideNav>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
