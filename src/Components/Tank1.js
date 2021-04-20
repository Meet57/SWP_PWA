import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'


export const Tank1 = () => {
    // eslint-disable-next-line
    const { upper } = useContext(MainContext)
    return (
        <div className="main">
            <div className="water" id="water" style={{ height: upper + '%' }}>

            </div>
            <div className="level" id="level">
                {upper} %
            </div>
        </div>
    )
}
