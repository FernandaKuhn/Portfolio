import { AppBar, MenuItem, styled } from "@mui/material";


const NavBar = () => {

    const StyledToolbar = styled('div')`
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    box-shadow: 0 0 2px #d17104, 0 0 2px #d17104, 0 0 2px #d17104;
   `;

    const StyledMenuItem = styled(MenuItem)`
    font-weight: bold; 
    letter-spacing: 1px;
   `;

    return (
        <>
            <AppBar position="absolute" >
                <StyledToolbar  >
                    <StyledMenuItem >Sobre mim</StyledMenuItem>
                    <StyledMenuItem>Tecnologias</StyledMenuItem>
                    <StyledMenuItem>Projetos</StyledMenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar;