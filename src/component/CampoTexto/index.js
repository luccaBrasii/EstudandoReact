import './CampoTexto.css'

const CampoTexto = (props) => {


    const digitou = (evento) => {

        props.alterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder} onChange={digitou} value={props.valor} />
        </div>
    )
}

export default CampoTexto