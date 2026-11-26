import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <>
        <h1>👩🏻‍💻Sistema Maria Tech💕</h1>
        <p>Estou desenvolvendo uma aplicação que consome 
            uma API do One Piece, e essa aplicação ela manipula <br/>
             estados e efeitos com uma filtragem de dados.</p>
        <p>O objetivo dessa aplicação é proporcionar uma experiência legal para os fãs do anime.</p>

        <Link to="/personagens">Clique aqui para acessar os personagens. </Link>
        </>
    )
}
export default Home;