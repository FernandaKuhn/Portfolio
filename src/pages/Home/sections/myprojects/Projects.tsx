import { styled, Typography, Button, Card, CardContent, CardActions } from "@mui/material";

const StyledProjects = styled("div")`
  background-color: #3d3d3dec;
  min-height: 100vh;
  padding: 40px 20px;
  color: #fbfbfb;
  user-select: none;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 40px;
  text-align: center;
`;

const CardsContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(Card)`
  background-color: #505050;
  color: #fff;
  border-radius: 12px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const Projects = () => {
    return (
        <StyledProjects>
            <Title>Projetos</Title>
            <CardsContainer>
                {[1, 2, 3, 4].map((item) => (
                    <ProjectCard key={item}>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                Projeto {item}
                            </Typography>
                            futura imagem
                            <Typography variant="body2">
                                Descrição breve do projeto {item}.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="primary" href="link-repositorio" target="_blank">
                                Repositório
                            </Button>
                            <Button size="small" variant="outlined" color="secondary" href="link-deploy" target="_blank">
                                Deploy
                            </Button>
                        </CardActions>
                    </ProjectCard>
                ))}
            </CardsContainer>
        </StyledProjects>
    );
};

export default Projects;
