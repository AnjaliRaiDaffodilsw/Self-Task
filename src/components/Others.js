import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Others() {
    return (
        <>
            <div className="tab-content py-5 menu">
                <div className="tab-pane active" aria-expanded="true">
                    <h3 style={{ color: "gray", fontSize: "0.8rem" }}>Others</h3>
                    <ul>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Redux
                    </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Redux Form
                    </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Lodash
                    </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            React Bootstrap Table
                    </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Font Awesome (for icons)
                    </li>
                        <li style={{ color: "gray", fontSize: "0.7rem" }}>
                            Hot Module Replacement (HMR)
                    </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Others
