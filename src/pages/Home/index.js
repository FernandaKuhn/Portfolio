import './styles.css'
import Draw from '../img/draw.png'
import Logo from '../img/Front-End.png'



const Home = () => {
    return (
        <main className='containerHome'>
            <div>
                <img className='Draw' src={Draw} alt="desenho" />
                <div className='textHome'>
                    <h1>Olá, seja bem-vindo!</h1>
                    <h1>Meu nome é Fernanda!</h1>
                    <h4>Desenvolvedora Front-end</h4>

                </div>

                <div className='skills'>
                    <h1>Skills</h1>

                    <ul className='list'>
                        <img className='ilustration' src={Logo} alt="desenho" />
                        <ul className='item'>
                            <h2>JavaScript</h2>
                            <div className='progressJS'>
                            </div>
                        </ul>
                        <ul className='item'>
                            <h2>React.js</h2>
                            <div className='progressReact'>
                            </div>
                        </ul>
                        <ul className='item'>
                            <h2>HTML</h2>
                            <div className='progressHTML'>
                            </div>
                        </ul>
                        <ul className='item'>
                            <h2>CSS</h2>
                            <div className='progressCSS'>
                            </div>
                        </ul>
                    </ul>
                    <div>
                        <button className='buttonGit'>
                            GitHub
                        </button>
                    </div>
                </div>        
            </div>

        </main>
    )
}



export default Home