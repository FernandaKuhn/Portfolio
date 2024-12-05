import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/perfil-fefa.jpeg";
import { Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/styledbutton/StyledButton";
import orange from "../../../../assets/images/orange.png"




const StyledHero = styled.div`
  background-image: linear-gradient(-45deg, #171717 0%, #171717 25%, #2b2b2b 51%, #171717 100%);
  height: 100vh;
  display: flex;
  align-items: center;
  
`;

const StyledImg = styled.img`
  width: 80%;
  border-radius: 50%;
  border: 1px solid #d17104;
  box-shadow: 0 0 12px #d17104, 0 0 12px #d17104, 0 0 12px #d17104;
  margin: 0 auto;
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} display="flex" justifyContent="center">
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid>
            <Grid item xs={12} md={7} >
              <Typography color="secondary" variant="h1" textAlign="center" pb={2}>Fernanda Kuhn</Typography>
              <Typography color="secondary" variant="h3" textAlign="center">Desenvolvedora Front-End!<img src={orange} height={35} /> </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} >
                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                  <StyledButton onClick={() => alert("Iniciando download")}>
                    <DownloadIcon />
                    <Typography> Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={() => alert("Redirecionando para LinkedIn")}>
                    <LinkedInIcon />
                    <Typography> LinkedIn </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
