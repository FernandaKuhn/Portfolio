import { Grid, styled, Typography } from "@mui/material"

const StyledProjects = styled("div")`
background-color: #3d3d3dec;
  height: 75vh;
  display: flex;
  align-items: center;
  color: #fbfbfb;
  user-select: none;
  cursor: default;
`;

const Projects = () => {
    return (
        <StyledProjects>
            <Typography>Projetos</Typography>
            <Grid>
                <Typography>Projeto 1</Typography>
                <Typography>Projeto 1</Typography>
                <Typography>Projeto 1</Typography>
            </Grid>
        </StyledProjects>
    )
}

export default Projects;