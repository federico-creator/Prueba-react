import React from "react"
import "./personaje.css"

let personaje = (props) =>{
    let {carac } = props;
    console.log(carac);
    return(
        <React.Fragment> 

        {carac.map((characteristic,index)=>{return(
            <div className="contenedor" >
             <div className="character-card">
                 <img className="imagenpersonaje" src={`${characteristic.image}`} alt={`${characteristic.alt}`} />
                 <h4>{characteristic.name}</h4>
                 <p>Character description: </p>
                 <a href="/">Ver más</a>
             </div>
         </div>
        )})}
       
       </React.Fragment> 
       
    )
}


export default personaje