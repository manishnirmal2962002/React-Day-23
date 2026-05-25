//-------------------------(React Router Dom)-------------------------------------------------------------------------

// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import Home from './Home'
// import About from './About'
// import PageNotFound from './PageNotFound';


// const App = () => {
//   return (
//     <>
//   <BrowserRouter>
//    <Link to="/">Home</Link> <br /><br />              {/*  smootlly next page mey ja sakte hai  without reload kiye hoye*/}
//   <Link to="/About">About</Link> <br /><br />

//  <Routes>
//     <Route path ="/" element={<Home />} />
//     <Route path ="/about" element={<About />} />
//     <Route path ="/*" element={<PageNotFound />} />

//   </Routes>
//   </BrowserRouter>
//     </>
//   )
// }
// export default App

//-------------------------------Using Param---------------------------------------------------------------------------import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import User from "./Users";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/user/:id/6" element={<User />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

//===============================(27/04/2026)==================================================================
//---------------------PROPS DRILLING START--------------------------------------------------------------------
// import React from 'react'
// import ChildA from './ChildA'

//  const App = () => {
//   let name = "Manish Nirmal"
//   return (
//     <>
//     <h1>hello React </h1>
//     <ChildA name= {name}/>
//     </>
//   )
// }
// export default App

//===================================(27/04/2026)======================================================
//-----------------------------------UseContext-----------------------------------------------------

// import React, { createContext } from 'react'
// import ChildA from './ChildA'

// const data = createContext() 
// const App = () => {
//   let name = "Manish Nirmal"
//   return (
//     <>
//     <h1>hello React </h1>
//   <data.Provider value={name}>
//     <ChildA/>
//   </data.Provider>
//     </>
//   )
// }
// export default App
// export {data}

//===================================(27/04/2026)======================================================
//-----------------------------------CUSTOM Hooks-----------------------------------------------------

// import React, { createContext } from 'react'

// import Counter from './Counter'

// const data = createContext() 
// const App = () => {
//   return (
//     <>
//    <Counter/>
//     </>
//   )
// }
// export default App

//===================================(28/04/2026)======================================================
//-----------------------------------UseCallback Function----------------------------------------------

// import React, {Profiler, useCallback, useState } from 'react'
// import ChildA from './ChildA'


//  const App = () => {
//   const [add, setAdd] = useState (0)
//   const [count,setCount] = useState(0)
// let learn = useCallback(() =>{
//   //code
// },[count])
//    return (
//     <>
//     <ChildA learn = {learn}count = {count}/>
//     <h1>Addition: {add}</h1>
//     <button onClick={()=>setAdd (add+1)}>Addition</button>

//     <h2>count: {count}</h2>
//     <button onClick={()=>setCount (count+2)}>Addition</button>
//     </>
//   )
// }
// export default App

//============================(28/04/2026)=======================================================================
//----------------------------(Start Redux )-------------------------------------------------------------

import React from 'react'
import Profile from './Profile'

const App = () => {
  return (
    <Profile/>
  )
}
export default App

