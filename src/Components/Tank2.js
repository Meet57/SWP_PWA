import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'


export const Tank2 = () => {
    const { lower } = useContext(MainContext)

    return (
        <div className="main">
            <div className="water" id="water" style={{ height: lower + '%' }}>

            </div>
            <div className="level" id="level">
                {lower} %
            </div>
        </div>
    )
}
