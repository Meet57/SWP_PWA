import React from 'react'

export const Footer = () => {
    return (
        <div className="feature">
            <div className="tank-capacity">
                <div className="tc"><h2>Tank Capacity</h2></div>
                <img src="./Images/motor.png" height={50} width={60} alt="Motor" />
                <h1>200Lts</h1>
            </div>
            <div className="motor-capacity">
                <div className="mc"><h2>Motor capacity</h2></div>
                <img src="./Images/Tank.png" height={50} width={60} alt="Tank" />
                <h1>20000wh</h1>
            </div>
        </div>
    )
}
