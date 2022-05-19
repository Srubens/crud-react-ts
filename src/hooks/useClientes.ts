import Cliente from "../core/Cliente"
import { useState, useEffect } from "react"
import ClienteRepositorio from "../core/ClienteRepositorio"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import useTabelaOuForm from "./useTabelaouForm"


export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {tabelaVisivel, formularioVisivel, exibirFormulario, exibirTabela} = useTabelaOuForm()

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    // const [visivel, setVisivel] = useState<'tabela'|'form'>('tabela')

    const obterTodos = () =>{
        repo.obterTodos().then(clientes =>{
        setClientes(clientes)
        exibirTabela()
        })
    }

    // repo.obterTodos().then(setClientes)
    useEffect(obterTodos,[])

    // const clientes = [
    //   new Cliente('Rubens Filipe', 27, '1'),
    //   new Cliente('Luciana Maria', 56, '2'),
    //   new Cliente('Elizeu Oliveira', 55, '3'),
    //   new Cliente('Lucas Podolski', 37, '4')
    // ]

    const selecionarCliente = (cliente: Cliente) =>{
        setCliente(cliente)
        exibirFormulario()
    }

    const excluirCliente = async (cliente: Cliente) =>{
        await repo.excluir(cliente)
        obterTodos()
        // console.log('Excluido ', cliente.nome)
    }

    const novoCliente = () =>{
        setCliente(Cliente.vazio())
        exibirFormulario()
    }
    
    const salvarCliente = async (cliente: Cliente) =>{
        await repo.salvar(cliente)
        obterTodos()
    }

    return{
        cliente,
        clientes,
        tabelaVisivel,
        exibirTabela,
        novoCliente, 
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        
    }

}