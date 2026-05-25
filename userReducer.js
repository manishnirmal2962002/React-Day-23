const initialState = {
    name:"Manish",
    age:24,
    status:"developer"
}
export default(state=initialState,action)=>{
    if(action.type == "UPDATE_AGE"){
       return{
    ...state, age : action.payload
   }
  }
   return state
}
