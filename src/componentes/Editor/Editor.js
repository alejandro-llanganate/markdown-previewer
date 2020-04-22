import React from 'react'
import './_editor.scss'


const Editor = props => (
    <div className="editor">
    <div className="editor-titulo">
       <img className="logo" src="https://d33wubrfki0l68.cloudfront.net/cce87b74a290f321f582cb56a12007343ff2d77e/bb9e6/img/glyph.png" alt="logotipo FreeCodeCamp"/> <label> Editor </label>
    </div>
    <textarea 
        id="editor" 
        value={props.inputUser} 
        className="editor-area" 
        onChange={props.change}/>
    </div>
)

export default Editor