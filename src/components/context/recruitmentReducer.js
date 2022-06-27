
export const recruitmentReducer = (state,action)=>{

    if(action.type==="ADD_LIST"){
        return {...state,recruitmentLists:[...state.recruitmentLists,action.payload]}
    }
    if(action.type==="DELETE_LIST"){
        return {recruitmentLists:state.recruitmentLists.filter((list,index)=>{
            if(index!==action.payload){
                return list
            }
        })}
    }
    if(action.type==="EDIT_LIST"){
        return {recruitmentLists:state.recruitmentLists.map((li,index)=>{
            if(action.payload.id===index){
                return action.payload.list
            }else{
                return li
            }
        })}
    }
    if(action.type==="CHANGE_STATUS"){
        return {recruitmentLists:state.recruitmentLists.map((list,index)=>{
            if(index===action.payload.id){
                return {...list,status:action.payload.bool}
            }
            return list
        })}
    }
    return state
}