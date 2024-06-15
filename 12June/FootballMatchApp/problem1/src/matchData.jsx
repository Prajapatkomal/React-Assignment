import { useEffect, useState } from "react"
import { fetchError, fetchLoading, fetchSuccess, fetchdata } from "./redux/actionType"
import { useDispatch, useSelector } from "react-redux"


const MatchData = () => {

    const matchList = useSelector(state=>state.data)
    const dispatch = useDispatch()
   const [search1, setSearch1] = useState('')
   const [search2, setSearch2] = useState('')

 

useEffect(()=>{
    dispatch(fetchLoading())
    fetchdata()
    .then((res)=>{
        dispatch(fetchSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(fetchError())
    })
},[])




function searchTeam1(e){
  const value = e.target.value
  setSearch1(value)
   dispatch({type:'SEARCHTEAM1' , payload:search1})
   console.log(search1)
}


function searchTeam2(e){
  const value = e.target.value
  setSearch2(value)
   dispatch({type:'SEARCHTEAM2' , payload:search2})
   console.log(search2)
}

function togglefavourite(ind){
  dispatch({type:'TOGGLEFAVOURITE' , payload: ind})
}



// css added to App.css

  return (
    <div>
         <div>
         <h1>Football Match Data</h1>
         <h2>Search Match by Team Name...</h2>
         <input type='text'  placeholder="Type Team1 Name Here" onChange={searchTeam1}/>
         <input type='text'  placeholder="Type Team2 Name Here" onChange={searchTeam2}/>
           {matchList.isloading? 'loading...' :null}
         </div>
        
        <div id='box'>   
         {!matchList.isloading && !matchList.isError && matchList.data.map((el,ind)=>{
            return <ul key={ind}>
                 <h2>{el.competition}</h2> <br/>
                 Year:  {el.year} <br/>
                  Round:{el.round} <br/>
                 Team1: {el.team1}<br/>
                 Team2: {el.team2}<br/>
                 Team1goals :{el.team1goals}<br/>
                 Team2goals :{el.team2goals} <br/>
              
                 
                <button onClick={()=>togglefavourite(ind)}  style={{ backgroundColor: el.favourite?'green':'red' , color:'white', borderRadius:'10px', border:'1px solid white' ,}}>{el.favourite? 'favourite' :'Not favourite'}</button>
             
            </ul>

         })} 
      </div>


    </div>
  )
}
 
export default  MatchData