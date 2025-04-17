import { styled, Typography } from "@mui/material";


const Footer = () => {

    const Footer = styled('div')`
    background-color: #171717;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    justify-content: center;
    padding-top: 10px;
    width: 100%;
    color: #fff;
   `;


    return (
        <>
            <Footer>
                <Typography>@Fernandakuhn</Typography>
            </Footer>
        </>
    )
}

export default Footer;