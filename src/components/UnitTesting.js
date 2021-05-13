import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function UnitTesting() {
    return (
        <>
            <div className="tab-content py-5 menu">
                <div className="tab-pane active" aria-expanded="true">
                    <h3 style={{ color: "gray", fontSize: "0.8rem" }}>Unit Testing</h3>
                    <ul>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Jest
                        </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Enzyme
                        </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}> 
                            Nock
                        </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Expect assertion
                        </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Code coverage
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UnitTesting
