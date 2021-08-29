import React, { Component } from "react"
import "./personaje.css"

class personaje extends Component{
    constructor(props){
        super(props)
        this.state={
            imagen: props.image,
            alt: props.alt,
            nombre: props.name,
           /*  esto es lo nuevo */
          viewMore: false,
          vista: "ver más",
          color: false
        }
    }

    viewMore(evento){
        if (this.state.viewMore){ /* no es necesario igualarlo a tru o false porque es precisamente lo que espera el if, en este caso es true */
            this.setState({
                viewMore: false,
                vista: "ver más"
            }, /* ()=>{ 
             alert(this.state.viewMore)
            }) */
            /* este callback se hace porque set state es asiconronico por lo que necesita del callback para mostrar la forma correcta */
            )
        }
        else{
            this.setState({
                viewMore: true,
                vista: "ver menos"
            })
        }
       
    }

    colorear(){
        if(this.state.color){
            this.setState({
                color:false
            })
        }
        else{
            this.setState({
                color:true
            })
        }
    }

    render(){
        return(
            <React.Fragment> 


                <div className="contenedor" >
                <div  className="character-card" id={this.state.color ? "active":""} onDoubleClick={()=>this.colorear()}>
                    <img className="imagenpersonaje" src={`${this.props.image}`} alt={`${this.props.alt}`} />
                    <h4>{this.props.name}</h4>
                    <p>Character description: </p>
                    <p className={this.state.viewMore ? "":"hide"}>extra</p>
                    <p className="more" onClick={(evento)=>this.viewMore(evento)}>{this.state.vista}</p>
                </div>
            </div>
        
        </React.Fragment> 
        
        )
    }
}
/* condicion ? valor verdadero : valor falso, esto es un if ternario
 */
export default personaje