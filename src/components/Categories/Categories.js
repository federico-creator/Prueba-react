import React from "react"

let Categories = () =>{
    let categories = [1,2,3,4,5,6]
    return(
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
                                <div className="card-body">
									<div className="row">
                                        {categories.map((category,index) => {return(
                                                <div className="col-lg-6 mb-4" key={index}>
                                                    <div className="card bg-info text-white shadow">
                                                        <div className="card-body">
                                                            {`Category 0${category}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
								</div>
							</div>
		</div>
    )
}


export default Categories