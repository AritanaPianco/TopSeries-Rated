import "./header.css"
import { Link } from "react-router-dom";



function Header(){
     return(

        <header className="header">
            <h1 className="header-title">TopSeriesRated</h1>
    
            <nav className="header-link">
                <Link to="/">Home</Link>    
            </nav>
        </header>
     )     

}

export default Header;