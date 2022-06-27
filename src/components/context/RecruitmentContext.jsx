import { createContext,useReducer } from "react";

import { recruitmentReducer } from "./recruitmentReducer";
export const RecruitmentContext = createContext();


const RecruitmentContextProvider = ({children})=>{
    const initialState = {
        recruitmentLists:[]
    }
    const [state,dispatch] = useReducer(recruitmentReducer,initialState)

    const addList = (list)=>{
        return dispatch({
            type:"ADD_LIST",
            payload:list
        })
    }
    const deleteList = (index)=>{
        console.log(index);
        return dispatch({type:"DELETE_LIST",payload:index})
    }
    const editList = (list,id)=>{
        console.log(list,id);
        return dispatch({type:"EDIT_LIST",payload:{list,id}})
    }
    const changeStatus = (id,bool)=>{
        return (dispatch({type:"CHANGE_STATUS",payload:{id,bool}}))
    }

    return (
       <RecruitmentContext.Provider value={
        {lists:state.recruitmentLists,addList,deleteList,editList,changeStatus}
        }>
        {children}
       </RecruitmentContext.Provider> 
    )
}
export default RecruitmentContextProvider