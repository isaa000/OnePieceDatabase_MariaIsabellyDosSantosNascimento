import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Personagens from "./pages/Personagens"
import Erro404 from "./pages/Erro404"
import Menu from "./components/Menu"


const App = () => {
  return(
    <body>
    <div className="caixa-p">
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/personagens" element={<Personagens/>}/>
      <Route path="*" element={<Erro404/>}/>
    </Routes>

    </BrowserRouter>
    </div>
    </body>
  ) 
}
export default App