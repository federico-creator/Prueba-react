import React, { Component } from "react";
/* let color = "amarillo" */ /* este color no estaba en ningun lado, despues lo vamos a obtener por props */
class Clase6copy extends Component{
    /* saludar(obj){
        const {nombre, edad}=obj
        alert(`Bienvenido al sitio ${nombre} con edad ${edad} años`)
    }
    imprimir(){
        console.log("Hola a todos");
    }

    cambiarColor(color){
        console.log(color);
    } */
    render(){
        return(
            <div>
                <p>hola mundo</p>
                {/* <button onClick ={()=>this.saludar({nombre: "sebi", edad: 21})}>Click</button>
                <button onClick={this.imprimir}>Imprimir</button>
                <button onClick ={()=>this.cambiarColor(color)}>Color</button> */}
            </div>
        
        )
    }
}
export default Clase6copy