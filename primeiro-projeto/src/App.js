import React from 'react';
import './index.css';



/*class App extends React.Component{

state = {
  nome: '',

}

modificarNome = (e) => {
  let nome = e.target.value;
  this.setState({
    nome: nome
  })
}
criaComboBox = () =>{
  const opcoes = ['Fulano', 'Ciclano'];
  const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return(
      <select>{comboBoxOpcoes}</select>
    )

}

  componentDidMount(){
    console.log('Executou o Componente didmount');
  }
  render(){
    console.log('Executou o Componente Render');

    const MeuComboBox = () =>  this.criaComboBox();

    return(

      <>
      <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>
      <h1>Hello {this.props.nome} e tenho {this.props.idade} anos </h1>
      <MeuComboBox />
      </>
    )
  }
}
*/



function App(props){


const modificaNome = (e) => {console.log(e.target.value)};



const criaComboBox = () =>{
  const opcoes = ['Fulano', 'Ciclano'];
  const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
    return(
      <select>{comboBoxOpcoes}</select>
    )

}


    const MeuComboBox = () => criaComboBox();

    return(

      <>
      <input type="text" className="texto-central" value={props.nome} onChange={modificaNome}></input>
      <h1>Hello {props.nome} e tenho {props.idade} anos </h1>
      <MeuComboBox />
      </>
    )
  }


export default App;
