const Titulo = (props) =>{
  return(
    <div className={`
      flex flex-col justify-center
      `} >
      <h1 className="pl-5 py-2 text-2xl" >{props.children}</h1>
      <hr className="bg-purple-500 border-2 border-purple-500" />
    </div>
  )
}

export default Titulo
