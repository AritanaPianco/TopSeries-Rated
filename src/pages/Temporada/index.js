import { useState,useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../../Services/Api";
import "./temporada.css"



function Temporada(){
     const [temporadas,setTemporadas] = useState([])
     const {id} = useParams()
  
    useEffect(() => {
         async function loadTemp(){
            try {
              let response = await API.get(`tv/${id}`, {
                   params: {
                      api_key: "6d60d1c19385d5a548fe9a5653c88a26",
                      language: "pt-BR"
                   }
                })
                setTemporadas(response.data.seasons)
                   
                
            } catch (err) {
                console.log("erro ao bsucar " + err)
            }
         }


         loadTemp()

    },[])    


    
     return(
         <div className="container-temp">
              <div className="temporadas">
                       {temporadas.map((temporada) => {
                            return(
                                <article key={temporada.id} className="temp-article">
                                    <article className="temp-article-img">
                                       <img src={`https://image.tmdb.org/t/p/original/${temporada.poster_path}`} alt={temporada.name} />                        
                                    </article>
    
                                    <aside className="temp-article-content">
                                          <h3>{temporada.name}</h3>
                                           <p>{temporada.overview}</p>
                                           <h3>Episódios: {temporada.episode_count}</h3>
                                        
                                    </aside>                                                                      
                                   
                                </article>  

                                )
                            })}    
                  

                       

              </div>
             
                <Link to={`/detalhes/${id}`}>See about</Link>
         </div>
     )
}

export default Temporada;