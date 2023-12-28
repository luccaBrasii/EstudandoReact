import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {



    return (
        props.colaborador.length > 0 ?
        <section className='time' style={{ backgroundColor: props.corSecundaria }} >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>

            <div className='colaboradores'>
                {props.colaborador.map(colaborador =>
                    <Colaborador
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={props.corPrimaria}
                    />)}
            </div>
        </section >
        : ''
    )
}

export default Time