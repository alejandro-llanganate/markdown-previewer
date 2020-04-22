import React from 'react';
import './App.scss';
import Header from './componentes/Header/Header'
import Editor from './componentes/Editor/Editor'
import Previewer from './componentes/Previewer/Previewer'

const textoInicial = 
`# Proyecto de React

## MARKDOWN PREVIEWER
### Otro título más
  
Código de una línea: \`<div></div>\`

\`\`\`
class App extends React.Component {
  state = {
    input: textoInicial
  }
}
\`\`\`
  
Texto en **ngrilla**,  _italic_ y **_ambas_**
, ~~tachón~~.

También hay [links](https://es.reactjs.org/docs/dom-elements.html) y
> Citas: Markdown es un lenguaje de marcado ligero creado por John Gruber que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida

Tablas:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- Listas
  - Level 2
     - Level 3
        - Level 4


1. lista 
1.lista
1. lista
- item
* item

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)
`

class App extends React.Component {
  
  state = {
    input: textoInicial
  }
  
  changeInput = (event) => {
    this.setState({input: event.target.value})
  }


  render(){
    const MARKDOWN = window.marked(this.state.input, {breaks: true});
    return (
      <div className="App">
        <Header nombreProyecto="Markdown Previewer" />
        <div className="container">
          <Editor inputUser={this.state.input} change={this.changeInput} />
          <Previewer text={MARKDOWN}  />
        </div>
      </div>
    );
  }
}

export default App;
