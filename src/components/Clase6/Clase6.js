import React, { Component } from "react";
class Clase6 extends Component{   
    constructor(props){
        super(props)
        this.state={
            nombre: props.nombre,
            precio: props.precio,
            color: "gris"
/*             nombre: "Adrian",
            arr: [1,2,3,4,5,6],
            obj:{existe:true} esto representa que es un objeto, puede terner cualquier valor*/
        }
    }
    cambiarPrecio(){
        //this.state.precio = 500 no puedo cambiar un valor usando una iguadad, se tiene que usar un método
        this.setState({
            precio: this.state.precio + 10
        })
    }

    changeColor(evt){
        console.log(evt.target.value);
        this.setState({
            color: evt.target.value
        })
    }

    render(){
        return(
            <div>
                <p>Props: {this.props.nombre} - State: {this.state.nombre}</p>
                <button onClick={()=>this.cambiarPrecio()}>sumar 10</button> {/* para cambiar el objeto si hay que usar arrow */}
                <input onChange={(evt)=>this.changeColor(evt)}></input>
                <p>Props: {this.props.precio} - State: {this.state.precio}</p>
                <p> State: {this.state.color}</p>
                
            </div>
        
        )
    }
}
export default Clase6