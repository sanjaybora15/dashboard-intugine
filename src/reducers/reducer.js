
const iState = {
    data:[{_id:1,dataList:'Loading'}]
}

const Fetchreducer = (state=iState,action) => {
    switch(action.type){
        case 'FETCH_DATA' : return {
            ...state,
            dataList:action.payload
        }
        default: return state
    }
}

export default Fetchreducer