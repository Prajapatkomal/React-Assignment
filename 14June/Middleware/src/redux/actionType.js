
export const fetchDataLoading = 'FETCHDATALOADING'
export const fetchDataError = 'FETCHDATAERROR'
export const fetchDataSuccess ='FETCHDATASUCCESS'
export const sortDataAsc = 'SORTDATAASC'
export const sortDataDesc = 'SORTDATADESC'


const fetchLoading  =()=>{
    return {type:fetchDataLoading}
}

const fetchSuccess  =(data)=>{
    return {type:fetchDataSuccess,payload:data}
}


const fetchError  =()=>{
    return {type:fetchDataError}
}

 const url =' https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee'



export const fetchdata = ()=>async(dispatch)=>{

    try {
        dispatch(fetchLoading());
  
   const res = await fetch(url)
   const data = await res.json()
   dispatch(fetchSuccess(data.data))

    } catch (error) {
        dispatch(fetchError())
    }

}


