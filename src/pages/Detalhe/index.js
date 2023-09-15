import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../Services/Api";
import { IoPlayForward, IoLink, IoLogoYoutube} from "react-icons/io5"
import "./detalhes.css"
import { Link } from "react-router-dom";



// -> tv/1396

function Detalhe(){
   const { id } = useParams()
   const [serie, setSeries] = useState([])
  
    useEffect(() => {
        async function loadDetail(){
            try {
              let response = await API.get(`tv/${id}`, {
                  params: {
                     api_key: "6d60d1c19385d5a548fe9a5653c88a26",
                     language: "pt-BR"
                  }
                                   
               })
               console.log(response.data)   
               setSeries(response.data)


            } catch (err) {
                console.log("erro ao buscar " + err)
            }  
          
        }

        loadDetail()


    },[])


    
 return(
    <div className="container-detail-background">
          
          <span className="detail-tagline">
            <IoPlayForward className="play-icon"/> 
            <h2>{serie.tagline}</h2>   
            </span>  

        <div className="container-details" key={serie.id}>
             <article className="detail">
                    <img src={`https://image.tmdb.org/t/p/original/${serie.poster_path}`} alt={serie.original_name}/>    
            
              </article>       

              <section className="detail-section">
                    <h2>Plot</h2>
                    <p>{serie.overview}</p>

                   <aside>
                     <h2>Gênero</h2>
                         <ul>
                             {serie.genres && serie.genres.map((genero) => (
                                 <li key={genero.id}>{genero.name}</li>
                             ))}
                                           
                         </ul>   
                    </aside> 

                    <h2>Episódios: {serie.number_of_episodes}</h2>
                    <h2>Temporadas: {serie.number_of_seasons}</h2>

                    <nav className="nav">
                       <Link to={`/temporadas/${serie.id}`}><IoLink className="icon-link"/>Temporadas</Link> 
                       <Link to={`https://youtube.com/results?search_query=${serie.name} oficial Trailer`}><IoLogoYoutube className="icon-youtube"/>Trailer</Link>        
                    </nav> 
              </section>

            
      
        </div>         
    </div>

    )
}

export default Detalhe;

