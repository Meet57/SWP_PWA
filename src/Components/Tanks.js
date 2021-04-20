import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContext'
import { Tank1 } from './Tank1'
import { Tank2 } from './Tank2'

export const Tanks = () => {
    const {name} = useContext(MainContext)

    return (
        <>
            <header>
                <h2>{name}</h2>
            </header>
            <section className="battery">
                <Tank1 />
                <Tank2 />
            </section>
        </>
    )
}
