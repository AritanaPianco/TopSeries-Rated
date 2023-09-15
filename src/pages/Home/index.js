import API from "../../Services/Api";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoStar} from "react-icons/io5"
import "./home.css"

//Search: tv/top_rated

function Home(){
    const [series, setSeries] = useState([])          
    const [value, setValue] = useState(true)  
    
    
    //didMount
     useEffect(() => {
          async function loadSeries(){
               await API.get("tv/top_rated",{
                   params: {
                        api_key: "6d60d1c19385d5a548fe9a5653c88a26",
                        language: "pt-BR", 
                        page: 1,
                   }
              })
              .then((response) => {
                 setSeries(response.data.results)   
                 setValue(false)
                 console.log(series)
                
              })
              .catch((err) => {
                 console.log("erro na busca " + err )
              })
          } 
          
          
          loadSeries()
   
    

     },[]) 





   
   if(value){
      return(
          <div>
              <h2>carregando series..</h2>
          </div>
      )
   }



     return(
     <div className="container-series">
         
         
         {series.map((serie) => {
             return(
                 <article key={serie.id} className="container-series-article">
                       
                       <img src={`https://image.tmdb.org/t/p/original/${serie.backdrop_path}`} alt={serie.name} />       
                       
                           <aside className="article-aside">
                              <div className="article-aside-rating">
                                 <IoStar className="star-icon"/>
                                  <h3>{serie.vote_average}</h3>
                              </div>


                             <h2>{serie.name}</h2>
                           </aside> 
                             
                             <Link to={`/detalhes/${serie.id}`}>You want to see more about?</Link>                  
                       
                 </article>   
     
             )
         })}           
         

     </div>        

     )

}


export default Home;