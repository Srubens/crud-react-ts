import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from '../core/Cliente'
import Botao from './Botao'

interface FormularioProps{
    cliente:Cliente
    clienteMudou?:(cliente:Cliente) => void
    cancelado?:() => void
}

const Formulario = (props:FormularioProps) =>{
    const id = props.cliente?.id 
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return(
        <div>
            { id ? 
            ( <Entrada 
                texto="Código" 
                valor={id}
                somenteleitura
                /> ): 
            false }
            <Entrada 
            texto="Nome"
            valor={nome}
            valorMudou={setNome}
             />
            <Entrada 
            texto="Idade"
            valor={idade}
            tipo="number"
            valorMudou={setIdade}
             />
             <div className='mt-7 flex justify-end' >
                 <Botao 
                 className={`
                 bg-gradient-to-r from-blue-400 to-blue-700
                 mb-4 mr-2
                 `} 
                 cor="blue"
                 onClick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}
                  >
                      { id ? 'Alterar': 'Salvar' }
                  </Botao>
                 <Botao 
                 className={`mb-4 bg-gradient-to-r from-gray-400 to-gray-700 `}
                 onClick={props.cancelado}
                  >
                      Cancelar
                  </Botao>
             </div>
        </div>
    )
}

export default Formulario