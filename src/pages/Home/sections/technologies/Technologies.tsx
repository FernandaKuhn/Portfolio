import { Grid, styled, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import JS from "../../../../assets/images/javascript.png";
import ReactLogo from "../../../../assets/images/react.png";
import Native from "../../../../assets/images/native.png";
import MaterialUI from "../../../../assets/images/materialUI.png";
import CSS from "../../../../assets/images/CSS.png";
import HTML from "../../../../assets/images/html.png";
import Node from "../../../../assets/images/node.png";
import TypeScript from "../../../../assets/images/typescript.png";
import Angular from "../../../../assets/images/angular.png";
import Docker from "../../../../assets/images/docker.png";
import Flutter from "../../../../assets/images/flutter.png";

const StyledTech = styled("div")`
  background-image: linear-gradient(-45deg, #171717 0%, #171717 25%, #2b2b2b 51%, #171717 100%);
  padding: 4rem 4rem;
  color: #fbfbfb;
  user-select: none;
`;

const StyledTitle = styled(Typography)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const TechCard = styled(Box)`
  background-color: #2f2f2f;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: #3b3b3b;
  }
`;

const TechImage = styled("img")`
  width: 28px;
  height: 28px;
`;

const TechText = styled(Typography)`
  font-size: 1rem;
  font-weight: 500;
`;

export const Technologies = () => {
    const techs = [
        { name: "JavaScript", icon: JS },
        { name: "React.js", icon: ReactLogo },
        { name: "TypeScript", icon: TypeScript },
        { name: "Node.js", icon: Node },
        { name: "Angular", icon: Angular },
        { name: "Docker", icon: Docker },
        { name: "Material UI", icon: MaterialUI },
        { name: "React Native", icon: Native },
        { name: "Flutter", icon: Flutter },
        { name: "HTML", icon: HTML },
        { name: "CSS", icon: CSS },
    ];

    return (
        <StyledTech>
            <StyledTitle>Tecnologias</StyledTitle>
            <Grid container spacing={3} justifyContent="center">
                {techs.map((tech, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <TechCard>
                                <TechImage src={tech.icon} alt={`${tech.name} logo`} />
                                <TechText>{tech.name}</TechText>
                            </TechCard>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </StyledTech>
    );
};
