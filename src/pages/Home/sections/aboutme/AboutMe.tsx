import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledAboutMe = styled("div")`
  background-image: linear-gradient(-45deg, #171717 0%, #171717 25%, #2b2b2b 51%, #171717 100%);
  height: 75vh;
  display: flex;
  align-items: center;
`;

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <img />
                <header>
                    <Typography variant="h4" color="white">Sobre Mim</Typography>
                </header>
                <Typography color="white" mt={2}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;