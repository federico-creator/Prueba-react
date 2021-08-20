import React from "react"
import TopCard from "./TopCard/TopCard"

let Dashboard = () =>{
    let info = [{title:"Products in Data Base", color:"primary" ,icon:"clipboard-list", quantity:"135"},{title:"Amount in products", color:"success" ,icon:"dollar-sign" ,quantity:"$546.456"},{title:"Users quantity" ,color:"warning", icon:"user-check", quantity:"38"}]
    return(
        <div className="row">

					<TopCard characteristics={info} />
		</div>
    )
}


export default Dashboard