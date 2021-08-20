import React from "react"

function SubSidebar(props) {
    let {caracteristicas} = props;

    return (<div>
		{caracteristicas.map((caracteristica,index)=>{
			return <li key={index} className="nav-item">
				<a className="nav-link collapsed" href="/">
				<i className={`fas fa-fw ${caracteristica.icon}`}></i>
				<span>{caracteristica.title}</span>
			</a>
		</li>})}
		</div>
    )
}

export default SubSidebar;