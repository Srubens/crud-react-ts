import Layout from "@components/Layout"
import Tabela from "@components/Tabela"
import Botao from "@components/Botao"
import Formulario from "@components/Formulario"
import useClientes from "@hooks/useClientes"

const Home = () => {

  const { 
    cliente, 
    clientes, 
    tabelaVisivel,
    exibirTabela,
    novoCliente, 
    selecionarCliente, 
    excluirCliente,
    salvarCliente
  } = useClientes()

  return(
    <div className={`
      bg_home
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
      `} >
      <Layout titulo="Cadastro de Usúarios" >
        { tabelaVisivel ? (
          <>
            <div className="flex justify-end" >
              <Botao 
              className={`mb-4 bg-gradient-to-r from-green-400 to-green-700 `} 
              cor="green"
              onClick={novoCliente}
               >Novo Cliente</Botao>
            </div>
            <Tabela
            clientes={clientes}
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ): (
          <Formulario 
          cliente={cliente}
          cancelado={ () => exibirTabela() }
          clienteMudou={salvarCliente}
           />
        ) }
      
      </Layout>
    </div>
  )
}

export default Home
