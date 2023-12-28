import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const digitou = (evento) => {
        props.alterado(evento.target.value)
    }

    return (
        <div className='Lista-suspensa'>
            <label>{props.label}</label>

            <select
                required={props.obrigatorio}
                onChange={digitou}
            >

                {props.itens.map((item) =>
                    <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )

}

export default ListaSuspensa