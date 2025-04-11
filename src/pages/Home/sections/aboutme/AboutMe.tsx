import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../../assets/images/avatarFront.png";

const StyledAboutMe = styled("div")`
  background-color: #3d3d3dec;
  height: 75vh;
  display: flex;
  align-items: center;
  color: #fbfbfb;
`;
const StyledImg = styled("img")`
  width: 30%;
  border-radius: 10%;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 12px #c5c5c5, 0 0 12px #c5c5c5, 0 0 12px #c5c5c5;
  margin: 0 auto;
`;

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <Container>
                <StyledImg src={Avatar} alt="Avatar" />
                <header>
                    <Typography variant="h4">Sobre Mim</Typography>
                </header>
                <Typography mt={2}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </Container>
        </StyledAboutMe>
    );
};

export default AboutMe;