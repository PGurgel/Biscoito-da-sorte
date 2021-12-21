import React, {Component} from "react";
import './estilos.css'

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      textoFrase:''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases=['Seu talento para o mundo dos negócios é evidente na sua personalidade.', 'Pare de procurar eternamente; a felicidade está bem ao seu lado.', 'Você é uma pessoa culta.'];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }
  
  render(){
    return(
      <div className="container">
        <img className="img" src={require('./assets/biscoito.png')}/>
        <Botao nome='Abrir Biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}
class Botao extends Component{
  render(){
    return(
      <>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </>
    );
  }
}

export default App;
