import React from "react"
import Personaje from "./Personaje/personaje"
import "./Personajes.css"

let Personajes = () =>{
    let info =[{image:"/images/ahsoka.jpg", alt:"Ahsoka imagen" ,name:"Ahsoka"},{image:"/images/anakin.jpg", alt:"anakin imagen" ,name:"Anakin"},{image:"/images/batman.jpg", alt:"batman imagen" ,name:"Batman"},{image:"/images/capAmerica.jpg" ,alt:"capAmerica imagen" ,name:"Captain America"},
    {image:"/images/cell.jpg", alt:"cell imagen" ,name:"cell"},{image:"/images/hulkSmall.jpg" ,alt:"hulkSmall imagen", name:"Hulk"},{image:"/images/kyloRen.jpg", alt:"kyloRen imagen" ,name:"Kylo Ren"},
    {image:"/images/luke.jpg" ,alt:"luke imagen", name:"luke"},{image:"/images/obiWan.jpg", alt:"obiWan imagen", name:"Obi Wan"},{image:"/images/strange.jpg", alt:"strange imagen" ,name:"strange"},
    {image:"/images/superman.jpg", alt:"superman imagen", name:"superman"},{image:"/images/yoda.jpg" ,alt:"yoda imagen", name:"yoda"}]
    return(
        <div className="conteiner">

            {info.map((character,index) => { return(
                <Personaje image={character.image} alt={character.alt} name={character.name}/>
            )})}

					

		</div>
    )
}


export default Personajes