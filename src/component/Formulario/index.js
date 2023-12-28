import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react'


const Formulario = (props) => {


    function valida(e) {
        e.preventDefault()
        props.addColaborador({
            nome,
            cargo,
            imagem,
            time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('Programação')

    return (
        <section className='formulario'>
            <form onSubmit={valida}>
                <h2>Preencha os cards para cadastrar o colaborador</h2>

                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    alterado={valor => setNome(valor)}

                />

                <CampoTexto
                    obrigatorio={true}
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    label='Imagem'
                    placeholder='Digite o endereço da imagem'
                    alterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Time'
                    itens={props.time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>Enviar Form</Botao>
            </form>
        </section>
    )
}

export default Formulario