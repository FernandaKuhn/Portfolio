import {
    styled, Typography, Button, Card, CardContent, CardActions, CardMedia,
} from "@mui/material";
import bytebankweb from "../../../../assets/images/bytebankweb.png";
import histoleague from "../../../../assets/images/histoleague.png";
import bytebankmobile from "../../../../assets/images/bytebankmobile.png";
import spotigamer from "../../../../assets/images/spotigamer.jpg";
import seuestoqueonline from "../../../../assets/images/seu-estoque-online.png";


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

const projectsData = [
    {
        id: 1,
        title: "ByteBank",
        description: "Desenvolvido para um desafio da FIAP utilizando Next.js e React. A proposta foi construir uma aplicação baseada no design do Figma, implementando o Material UI, Node.Js e Docker. Além disso, o projeto inclui um servidor JSON local para simular uma API REST e um ambiente de desenvolvimento de componentes com Storybook.",
        image: bytebankweb,
        github: "https://github.com/dudscode/financeiro-tech-challenge",
        deploy: "https://www.linkedin.com/feed/update/urn:li:activity:7259685931937361920/",
    },
    {
        id: 2,
        title: "Seu Estoque Online",
        description: "Aplicação para gerenciamento de estoque, com back-end em Java (Spring Boot, JPA, H2) e front-end em React (TypeScript, Material UI, Axios). Permite cadastrar, alterar, excluir produtos e gerenciar estoque com dados de criação e atualização armazenados. A aplicação expõe uma API REST documentada com Swagger.",
        image: seuestoqueonline,
        github: "https://github.com/FernandaKuhn/seu-estoque-online",
        deploy: "",
    },
    {
        id: 3,
        title: "HistoLeague",
        description: "Um site desenvolvido com ReactJS, CSS Modules e JSON-Server, que apresenta de forma interativa a trajetória do Brasil em campeonatos de League of Legends. O projeto reúne dados históricos sobre participações, resultados e curiosidades das equipes brasileiras em competições internacionais.",
        image: histoleague,
        github: "https://github.com/seuusuario/projeto2",
        deploy: "https://histoleague.vercel.app/",
    },
    {
        id: 4,
        title: "ByteBank APP",
        description: "Desenvolvido para oferecer uma experiência moderna e intuitiva em dispositivos móveis, utilizando o ecossistema React Native com Expo. O projeto integra diversos recursos, como navegação avançada via Expo Router, formulários otimizados com React Hook Form e autenticação com Firebase. ",
        image: bytebankmobile,
        github: "https://github.com/dudscode/financeiro-tech-react-native",
        deploy: "",
    },
    {
        id: 5,
        title: "Spotify Gamer",
        description: "Uma aplicação feita com React, NodeJs e Json-server, com o objetivo de criar um espaço dedicado para gamers dentro do Spotify. Este espaço visa oferecer playlists elaboradas para diferentes momentos de jogos, podcasts de ajudas e curiosidades, e trilhas sonoras inesquecíveis. ",
        image: spotigamer,
        github: "https://github.com/FernandaKuhn/spotify-react",
        deploy: "",
    },
];

const Projects = () => {
    return (
        <StyledProjects>
            <Title>Projetos</Title>
            <CardsContainer>
                {projectsData.map((project) => (
                    <ProjectCard key={project.id}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={project.image}
                            alt={`Imagem do ${project.title}`}
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {project.title}
                            </Typography>
                            <Typography variant="body2">{project.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button
                                size="small"
                                variant="contained"
                                color="primary"
                                href={project.github}
                                target="_blank"
                            >
                                GitHub
                            </Button>
                            <Button
                                size="small"
                                variant="outlined"
                                color="secondary"
                                href={project.deploy}
                                target="_blank"
                            >
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