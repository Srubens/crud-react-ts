interface EntradaProps{
    texto:string
    tipo?: 'text' | 'number'
    valor: any
    somenteleitura?:boolean
    valorMudou?:(valor:any) => void
    className?:string
}

const Entrada = (props:EntradaProps) =>{
    return(
        <div className="flex flex-col mb-4" >
            <label className="mb-4" >
                {props.texto}
            </label>
            <input 
            type={props.tipo ?? 'text'} 
            value={props.valor}
            readOnly={props.somenteleitura}
            onChange={ e => props.valorMudou?.(e.target.value) }
            className={`
                border border-purple-500 rounded-lg
                focus:outline-none bg-gray-50
                px-4 py-2 focus:bg-white
            `}
            />
        </div>
    )
}

export default Entrada