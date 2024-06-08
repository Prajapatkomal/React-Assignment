
import { useReducer, useState } from 'react'
import './App.css'

const initialState = {name:'',establishment_year:'',address:{building:'',street:"", city:{name:'',locality:{pincode:'',landmark:''}},state:'', coordinates: { latitude:'', longitude:'' }},  courses_offered: [
  { course_name: 'arts', value: '' },
  { course_name: 'commerce', value: '' },
  { course_name: 'science', value: '' }
]}

function formStateReducer(state,action){
  switch(action.type){
    case 'NAME' : return {...state,name:action.payload}
    case 'ESTABLISHMENT_YEAR' : return {...state,establishment_year:action.payload}
    case 'BUILDING' : return {...state,address:{...state.address, building: action.payload}}
    case 'STREET' :  return {...state,address:{...state.address, street: action.payload}}
    case 'CITYNAME' : return{...state,address:{...state.address,city:{...state.address.city, name: action.payload}}}
    case 'PINCODE' : return{...state,address:{...state.address,city:{...state.address.city, locality:{...state.address.city.locality,pincode: action.payload}}}}
    case 'LANDMARK' :  return{...state,address:{...state.address,city:{...state.address.city, locality:{...state.address.city.locality,landmark: action.payload}}}}
    case 'STATE' : return {...state,address:{...state.address,state: action.payload}}
    case 'LATITUDE' : return {...state,address:{...state.address,coordinates:{...state.address.coordinates,latitude:action.payload}}}
    case 'LONGITUDE' :  return {...state,address:{...state.address,coordinates:{...state.address.coordinates,longitude:action.payload}}}
    case 'UPDATE_COURSE':
      var updatedCourses = state.courses_offered.map((course, index) =>
        index === action.payload.index ? { ...course, value: action.payload.value } : course
      );
      return { ...state, courses_offered: updatedCourses }
    case 'RESET' : return initialState
    default : throw Error('invalid action type')
   
    
  }
}



function App() {
  const[formState,dispatch] = useReducer(formStateReducer, initialState)
  const [error, setError] = useState(null);

  const handleDispatch = (action) => {
    try {
      dispatch(action);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError(error.message);
    }
  };



  return (
    <div id='box'>
 <div>
       <p>College Form Data </p>
      Name:      <input value={formState.name} onChange={(e)=>dispatch({type:'NAME', payload: e.target.value})}/>  <br/>
      Establishment_year: <input value={formState.establishment_year}  onChange={(e)=>dispatch({type:'ESTABLISHMENT_YEAR', payload: e.target.value})}/> <br/>
      Building:   <input value={formState.address.building}  onChange={(e)=>dispatch({type:'BUILDING', payload: e.target.value})}/> <br/>
      Street:     <input value={formState.address.street} onChange={(e)=>dispatch({type:'STREET', payload: e.target.value})}/> <br/>
      City Name:   <input value={formState.address.city.name}  onChange={(e)=>dispatch({type:'CITYNAME', payload: e.target.value})}/> <br/>
      Pincode:     <input value={formState.address.city.locality.pincode}  onChange={(e)=>dispatch({type:'PINCODE', payload: e.target.value})}/> <br/>
      Landmark:    <input value={formState.address.city.locality.landmark}  onChange={(e)=>dispatch({type:'LANDMARK', payload: e.target.value})}/> <br/>
      State:      <input value={formState.address.state}  onChange={(e)=>dispatch({type:'STATE', payload: e.target.value})}/> <br/>
      Latitude:  <input value={formState.address.coordinates.latitude}  onChange={(e)=>dispatch({type:'LATITUDE', payload: e.target.value})}/> <br/>
      Longitude:  <input value={formState.address.coordinates.longitude}  onChange={(e)=>dispatch({type:'LONGITUDE', payload: e.target.value})}/> <br/>
      {formState.courses_offered.map((course, index) => (
          <div key={course.course_name}>
            {course.course_name.charAt(0).toUpperCase() + course.course_name.slice(1)}:
            <input
              value={course.value}
              onChange={(e) => dispatch({ type: 'UPDATE_COURSE', payload: { index, value: e.target.value } })}
            />
          </div>
        ))}
     <button onClick={() => handleDispatch({ type: 'RESET' })}>Reset</button>
     { <p>Error: {error}</p>}
 </div>

 
<div>
    <p>Entered Details</p>
   <h1> Name :- {formState.name}  </h1>
   <h1>Establishment_year:- {formState.establishment_year} </h1>
    <h1> Address:- </h1>
    <h2>building : {formState.address.building} </h2>
    <h2>street : {formState.address.street}</h2>
    <h2>City : {formState.address.city.name}</h2>
     <h3>Locality: Pincode -{formState.address.city.locality.pincode} , Landmark -{formState.address.city.locality.landmark} </h3>
     <h2>State :{formState.address.state}</h2>
     <h3>Coordinates : Latitude -{formState.address.coordinates.latitude}, Longitude- {formState.address.coordinates.longitude}</h3>
     <h1>Course_offered :- </h1>
  
     {formState.courses_offered.map((course, index) => (
          <h2 key={index}>
            {course.course_name }: {course.value}
          </h2>
        ))}
    

              
</div>
    </div>

  )
}

export default App


