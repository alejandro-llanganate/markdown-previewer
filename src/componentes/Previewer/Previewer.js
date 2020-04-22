import React from 'react'
import './_previewer.scss'


const Previewer = props => (
    <div className="previewer">
    <div className="previewer-titulo">
       <img className="logo" src="https://d33wubrfki0l68.cloudfront.net/cce87b74a290f321f582cb56a12007343ff2d77e/bb9e6/img/glyph.png" alt="logotipo FreeCodeCamp"/> <label> Previewer </label>
    </div>
    <div 
        id="preview" 
        className="previewer-area" 
        dangerouslySetInnerHTML={{__html: props.text}}
    >
    </div>
    </div>
)

export default Previewer