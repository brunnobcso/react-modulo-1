import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter'
import Nav from './components/Nav/Nav'
import Title from './components/Title/Title'
import FormContato from './components/FormContato/FormContato'
import ListaContato from './components/ListaContato/ListaContato'

class App extends Component { 

  constructor(props) {
    super(props)

    // Adicionado ao state
    this.state = {
      data: [
        { id: 1, name: "Joao", email: "joao@ex.com.br", subject: "angular", msg: "Gostaria de saber mais sobre o AngularJS..." },
        { id: 2, name: "Maria", email: "maria@ex.com.br", subject: "react", msg: "Gostaria de saber mais sobre o Reac..." },
        { id: 3, name: "Pedro", email: "pedro@ex.com.br", subject: "vue", msg: "Gostaria de saber mais sobre o VueJS..." },
      ]
    }; 

    this.handleContactSubmit = this.handleContactSubmit.bind(this);
  }

  handleContactSubmit(contact) {
    var newContact = this.state.data.concat([ contact ]);
    console.log(newContact);
    this.setState({ data: newContact });
  }

  render() {
    const menuLinks = [
      ['Home', 'index.html'],
      ['Contato', 'contato.html'],
      ['Sobre', 'sobre.html']
    ]

    return (
      <div className="App">
        <Nav brandContent="React" menuLinks={menuLinks} />
        <Title>
          <span>Meu Primeiro Componente</span>
          sub-titulo
        </Title>
        <Counter initialCount={5} color="red" />
        <FormContato onContactSubmit={ this.handleContactSubmit } nextIdNumber={ this.state.data.length + 1 } />

        <ListaContato data={ this.state.data } />
      </div>
    );
  }

}

export default App;