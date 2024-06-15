import axios from "axios"



const url = 'https://jsonmock.hackerrank.com/api/football_matches?page=2'

export const fetchLoading = ()=>{
    return {type:'LODING'}
}


export const fetchError = ()=>{
    return {type:'ERROR'}
}

export const fetchSuccess = (payload)=>{
    return {type:'SUCCESS', payload:payload}
}





export const fetchdata = ()=>{
return axios.get(url)
.then ((res)=>res.data)
.catch((err)=>err)
}