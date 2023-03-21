import { useState } from "react";
import './styles.css'

function Contato (){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')

    function sendEmail(e){
      e.preventDefault();

      if(name === '' || email === '' || text === ''){
        alert("*Preencha todas as informações*")
        return;
      }

      alert("CONCLUÍDO")
    }

    return(<div className="containerContato">
    <h1 className="title">Contato</h1>

    <form className="form" onSubmit={sendEmail}>
      <ul>
        <ul>
          <input 
        className="inform"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
        </ul>
       <ul>
      <input 
        className="inform"
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      </ul>
      <ul>
      <textarea
        className="textarea"
        placeholder="Digite sua mensagem..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      </ul>
      </ul>
      <div> 
      <input className="buttonContato" type="submit" value="Enviar" />
    </div>
    </form>

  </div>
);

}

export default Contato