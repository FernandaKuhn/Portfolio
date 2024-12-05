import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/perfil-fefa.jpeg";
import { Button, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledHero = styled.div`
  background-color: black;
  height: 100vh;
`;

const StyledImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} >
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid item xs={12} md={8} >
              <Typography color="primary" variant="h1" textAlign="center">Fernanda Kuhn</Typography>
              <Typography color="primary" variant="h2" textAlign="center">Desenvolvedora Front-End!</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <LinkedInIcon />
                    LinkedIn
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          Hero
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
