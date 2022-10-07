import "./CSS/geralstyle.css";
import Cadastro from "./Componentes/cadastro-e-login/cadastro";
import Cabecalho from "./Componentes/header/index";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Carrossel from "./Componentes/main/index";
import Rodape from "./Componentes/footer/index";
import Perfil from "./Componentes/perfil/index";
import ComoFunciona from "./Componentes/como_funciona/index";
import Doacoes from "./Componentes/doacoes/index";
import Login from "./Componentes/cadastro-e-login/login";
import FaleConosco from "./Componentes/fale_conosco/index";
import SobreNos from "./Componentes/sobre_nos/index";
import HistInicio from "./Componentes/sobre_nos/historia_de_inicio/index";
import Parceiros from "./Componentes/cad-parceiros/index";
import DoeLeite from "./Componentes/doeleite/index";
import Programas from "./Componentes/programas/index";
import Transparencia from "./Componentes/transparencia/index";
import TermsConds from "./Componentes/termosecondicoes";

function App() {
  return (
    <div>
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" exact element={<Carrossel />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/comofunciona" element={<ComoFunciona />} />
          <Route path="/faleconosco" element={<FaleConosco />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/historiadeinicio" element={<HistInicio />} />
          <Route path="/parceiros" element={<Parceiros />} />
          <Route path="/doeleite" element={<DoeLeite />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/termosecondicoes" element={<TermsConds/>}/>
        </Routes>
        <Rodape />
      </Router>
    </div>
  );
}

export default App;
