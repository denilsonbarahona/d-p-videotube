import { useState } from "react";

const initialState = {
    category:"0",
    playlist: [],
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

    return {
        state, 
        selectedCategory,
        setPlayList
    }
}


export default useInitialState;