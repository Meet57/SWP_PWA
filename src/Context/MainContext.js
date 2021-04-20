// eslint-disable-next-line
import React, { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line
import firebase from '../firebase'

export const MainContext = createContext()

export const MainContextProvider = (props) => {
    // eslint-disable-next-line
    const [state, setState] = useState([])
    let {name,mode,motor,upper,lower} = state

    useEffect(() => {
        firebase.firestore()
        .collection('Tanks').doc('1')
        .onSnapshot((snapshot)=> {
            setState(snapshot.data())
        })
        console.log("useeffect")
    },[])

    const changeMotor = () => {
        let mo;
        if(motor==='1'){
            mo = '0';
        }else{
            mo = '1';
        }
        firebase.firestore()
        .collection('Tanks').doc('1')
        .update({
            motor : mo
        })
    }

    const changeMode = () => {
        let mo;
        if(mode==='1'){
            mo = '0';
        }else{
            mo = '1';
        }
        firebase.firestore()
        .collection('Tanks').doc('1')
        .update({
            mode : mo
        })
    }

    return (
        <MainContext.Provider value={{
            name,mode,motor,upper,lower,changeMotor,changeMode
        }}>
            {props.children}
        </MainContext.Provider>
    )
}