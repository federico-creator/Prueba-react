import React from 'react'

function TopCard(props) {
    let {characteristics} = props;

    return (<React.Fragment>
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

export default TopCard;