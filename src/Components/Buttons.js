import React, { useContext} from 'react'
import { MainContext } from '../Context/MainContext'

export const Buttons = () => {

    const {mode,motor,changeMotor,changeMode} = useContext(MainContext)

    return (
        <section className="buttons">
            <div className="manual">
                <label htmlFor="manual" className="text" >Manual</label>
                <label className="switch">
                    <input type="checkbox" name="mode" checked={mode === '1' ? true : false} onClick={changeMode} onChange={null} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="motor">
                <label htmlFor="motor" className="text">Motor</label>
                <label className="switch">
                    <input type="checkbox" name="motor" checked={motor === '1' ? true : false} onClick={changeMotor} onChange={null} />
                    <span className="slider round"></span>
                </label>
            </div>
        </section>
    )
}
