import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from  'react-redux'
import userReducer from './userReducer'

//----------start Redux Toolkit------(29/04/2026)------------------------
// const initialState = {
//     name:"Manish",
//     age:24,
//     status:"developer"
// }

const store = configureStore({
    reducer: userReducer
})

// const store = configureStore({
//     reducer:(state)=>{
//         return state
//     },
//     preloadedState: initialState
// })
//--------------------------------------------------

createRoot(document.getElementById('root')).render(

    <Provider store = {store}>
    <App/>
    </Provider>
)
