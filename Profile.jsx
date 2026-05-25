
// const Profile = ()=>{
//     return(
//         <>
//         <h1>Hello Sir</h1>
//         </>
//     )
// }
// export default Profile

//===============================(29/04/2026)============================================================
//-------------------------------(Start Redux)-----------------------------------------------------------
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

// const Profile = () => {
//     useSelector((state)=>
//     console.log(state))

    const Profile = () => {
    let {name,age,status} = useSelector((state)=>{
        return state;
    })

    const dispatch = useDispatch()

    const updateAge = (age)=>{
        dispatch({type:"UPDATE_AGE",payload:age})
    }

  return (
    <>
    <div>Profile Component call......!!</div>
    <h2>Name: {name}</h2>
    <h2>Age:{age}</h2>
    <h2>Status:{status}</h2>

    <button onClick={()=>updateAge(40)}>Update-Age</button>
    </>
  )
}
export default Profile
