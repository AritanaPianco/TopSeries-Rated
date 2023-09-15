import { Link } from "react-router-dom";

function Erro(){
   return(
    <div className="erro">
          <h1>Erro</h1>
          <h2>Essa página não existe!</h2>

           <Link to="/">Voltar à página Home</Link>
    </div>
      
   )
}

export default Erro;