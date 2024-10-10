import { useState } from 'react'
import './CampoTexto.css'
//arrowFunction syntax mais usada 
//Nomes de Componentes devem estar sempre em Capital Letters


const CampoTexto = (props) => {

const placeholderModificada = `${props.placeholder}...`

//const [valor,setvalor] =useState ('')


const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value)
  //  console.log(valor)
}


    //html goes in
 return(
<div className="campo-texto"> 
    <label >{props.label}</label>
    <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio}  placeholder={placeholderModificada} />
</div>

 )

}

export default CampoTexto