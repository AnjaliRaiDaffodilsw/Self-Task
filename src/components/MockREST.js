import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function MockREST() {
    return (
        <>
            <div className = "tab-content py-5 menu">
                <div className = "tab-pane active" aria-expanded = "true">
                    <h3 style={{color: "gray",fontSize:"0.8rem"}}>Mock REST</h3>
                    <p style={{color: "gray",fontSize:"0.7rem"}}>Custom written mock REST</p>
                </div>
            </div>
        </>
    )
}

export default MockREST
