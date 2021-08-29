import React, {Component} from 'react'
class TopCard extends Component  {
    
    
    constructor(props){
        super(props)
        this.state={
            nombre: props.title,
            cantidad: props.quantity,
            color: props.color
        }
    }
    
    
    render(){
        let {characteristics} = this.props
        return(<React.Fragment>
            {console.log(characteristics)}
            {characteristics.map((characteristic,index)=>{return(
    
            
            <div key={index} className="col-md-4 mb-4">
                <div className={`card border-left-${characteristic.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${characteristic.color} text-uppercase mb-1`}>{characteristic.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{characteristic.quantity}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas fa-${characteristic.icon} fa-2x text-gray-300 topcard-icon`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )})}
    
            </React.Fragment>
        )
    }
    return 
}

export default TopCard;