import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import Detalhe from "./pages/Detalhe";
import Temporada from "./pages/Temporada";
import Header from "./Component/Header";
import Erro from "./pages/Erro";


function RoutesApp(){
    
     return(


        <BrowserRouter>
             <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/detalhes/:id" element={<Detalhe/>}/>
                <Route path="/temporadas/:id" element={<Temporada/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
          
         </BrowserRouter>

 

      )


}


export default RoutesApp;


