import { useState } from 'react';
import Botao from '../Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {

    
    

    const [name, setName] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState ('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            name,
            cargo,
            imagem,
            time
        })
        setName('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (

        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do card do colaborador:</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Name" 
                placeholder="Digite seu Nome" 
                valor={name}
                aoAlterado={valor => setName(valor)} />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu Cargo" 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)} />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite o endereco da imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)} />
               <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                Criar Card
                </Botao>
                
                 
            </form>

        </section>

    )

}

export default Formulario