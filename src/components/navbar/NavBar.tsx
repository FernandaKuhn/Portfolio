import { AppBar, MenuItem, styled } from "@mui/material";
import { Link } from "react-scroll";
import orange from "D:/estudo/portifolio/Portfolio/src/assets/images/orange.png";

const NavBar = () => {
    const StyledToolbar = styled("div")`
    position: fixed;
    background-color: #3c3c3c7a;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    z-index: 999;
  `;

    const ScrollLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  `;

    const StyledMenuItem = styled(MenuItem)`
    font-weight: bold;
    letter-spacing: 1px;
  `;

    const Logo = styled("img")`
    height: 45px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    user-select: none;
  `;

    return (
        <AppBar position="absolute" elevation={0}>
            <StyledToolbar>
                <ScrollLink to="hero" smooth={true} duration={500} offset={-80}>
                    <Logo src={orange} alt="Logo Orange" />
                </ScrollLink>
                <ScrollLink to="aboutme" smooth={true} duration={500} offset={-80}>
                    <StyledMenuItem>Sobre mim</StyledMenuItem>
                </ScrollLink>
                <ScrollLink to="technologies" smooth={true} duration={500} offset={-80}>
                    <StyledMenuItem>Tecnologias</StyledMenuItem>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
                    <StyledMenuItem>Projetos</StyledMenuItem>
                </ScrollLink>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
