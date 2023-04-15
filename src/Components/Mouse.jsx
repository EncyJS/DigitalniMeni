import React from "react";

const Mouse = () => {
    return(
        <div className="mouse">
                <div className="mouse-scroll">
                    <div className="wheel"></div>
                </div>
                <div className="arrows">
                        <span className="arrow-one a1"></span>
                        <span className="arrow-two a2"></span>
                        <span className="arrow-three a3"></span>
                    </div>
            </div>
    )
}

export default Mouse;