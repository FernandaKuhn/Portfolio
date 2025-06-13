import styled from "@emotion/styled";
import Avatar from "../../../../assets/images/eudesign.png";
import { Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/styledbutton/StyledButton";
import orange from "../../../../assets/images/orange.png"
import Zoom from "@mui/material/Zoom";




const StyledHero = styled.div`
  background-image: linear-gradient(-45deg, #171717 0%, #171717 25%, #2b2b2b 51%, #171717 100%);
  min-height: 100vh;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: default;
  box-sizing: border-box;
`;
const StyledImg = styled.img`
  width: 80%;
  margin: 0 auto;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Hero = () => {
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5} display="flex" justifyContent="center">
              <Zoom in={true} style={{ transitionDelay: '500ms' }}>
                <StyledImg src={Avatar} alt="Avatar" />
              </Zoom>
            </Grid>
            <Grid item xs={12} md={7} >
              <Typography
                color="secondary" variant="h1" textAlign="center" pb={2} sx={{ whiteSpace: "nowrap" }}>
                Fernanda Kuhn
              </Typography>
              <Typography color="secondary" variant="h3" textAlign="center">Desenvolvedora Web!<img src={orange} height={35} /> </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} >
                <Grid item xs={12} md={4} display="flex" justifyContent="center">

                  <StyledButton
                    onClick={() => window.open('../src/assets/curriculo.pdf', '_blank')}
                  >
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>

                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                    <div>
                      <StyledButton onClick={() => window.open("https://www.linkedin.com/in/fernandakuhn/", "_blank")}>
                        <LinkedInIcon />
                        <Typography> LinkedIn </Typography>
                      </StyledButton>
                    </div>
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
