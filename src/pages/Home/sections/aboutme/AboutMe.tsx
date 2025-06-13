import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../../assets/images/avatarcelular.png";

const StyledAboutMe = styled("div")`
  background-color: #3d3d3dec;
  min-height: 75vh;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  color: #fbfbfb;
  user-select: none;
  cursor: default;
`;

const StyledImg = styled("img")`
  width: 100%;
  max-width: 90%;
  padding-left: 1rem;
  border-bottom: 1px solid #6b6b6b;
  box-shadow: 0 0 12px #5e5e5e,;
`;

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={7}>
                        <Typography variant="h3" component="h2" textAlign="center"
                            fontWeight="bold"
                            pb={4}
                            fontSize="clamp(2rem, 5vw, 3.5rem)">
                            Sobre Mim
                        </Typography>
                        <Typography mt={2} fontSize="1.2rem">
                            Sou analista de sistemas há 4 anos, com experiência em liderança de equipe, planejamento estratégico e desenvolvimento de soluções, incluindo a estilização de dashboards com CSS.
                        </Typography>
                        <Typography mt={2} fontSize="1.2rem">
                            Atualmente faço pós-graduação em Front-End Engineer e tenho me aprofundado em arquitetura de interfaces, design system, Docker, AWS e outras tecnologias correlacionadas.
                        </Typography>

                        <Typography mt={2} fontSize="1.2rem">
                            Já participei de projetos com React, React Native, Angular, Node.js, TypeScript e Material UI, colaborando em times e desenvolvendo habilidades tanto técnicas quanto de trabalho em grupo.
                        </Typography>

                        <Typography mt={2} fontSize="1.2rem">
                            Gosto de criar interfaces funcionais, acessíveis e com identidade. Estou sempre buscando evoluir e me atualizar para entregar experiências cada vez melhores.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={5} display="flex" justifyContent="center">
                        <StyledImg src={Avatar} alt="Avatar" />
                    </Grid>
                </Grid>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;
