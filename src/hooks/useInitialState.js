import { useState } from "react";

const initialState = {
    category:"0",
    playlist: [],
    searchList: [],
}


const useInitialState =()=>{
    const [state, setState] = useState(initialState);
    const selectedCategory=(payload)=>{
        setState({
            ...state ,
            category: payload
        })
    }
    const setPlayList =(payload)=>{ 
        setState({
            ...state, 
            playlist:[...payload]
        })
    }

    const setSearchList =(payload)=>{
        setState({
            ...state, 
            searchList:[...payload]
        })
    }
    

    return {
        state, 
        selectedCategory,
        setPlayList,
        setSearchList
    }
}


export default useInitialState;