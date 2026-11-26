import { useEffect, useState } from "react";

const Personagens = ()=>{
    const [personagens, setPersonagens] = useState([]) 
    const [busca, setBusca] = ("")

    async function pesquisar() {
        const tratarApi = await fetch("http://localhost:3000/api/personagens")
        const dados = await tratarApi.json()
        console.log(dados.personagens)
        setPersonagens(dados.personagens)
    }   
    useEffect(()=> pesquisar, [])

    try {
        
    } catch (error) {
        console.log(error)
    }

    //const buscaFiltrada = personagens.filter((filtro)=> filtro.toLowerCase().includes(busca.toLowerCase()))
    return(
        <>
        <input value={busca} onChange={(e)=> setBusca(e.target.value)}/>
        <button onClick={pesquisar}>carregar</button>

        {personagens.map((p)=>(
            <div className="persona" key={p.id}>
                <br />
                <p>Nome:{p.nome}</p>
                <p>apelido:{p.apelido}</p>
                <p>tripulacao:{p.tripulacao}</p>
                <p>função:{p.funcao}</p>
                <p>fruta:{p.fruta}</p>
                <p>recompensa:{p.recompensa}</p>
                <p>origem:{p.origem}</p>
                <br />
            </div>
            
        ))}
        </>
    )
}
export default Personagens;