import { useEffect, useState } from "react";
import getCategories from "../API/getCategories";

const useGetCategories =()=>{
    const [categories, setCategories] = useState([]);

    useEffect(async()=>{
        const categoriesReponse = await getCategories();
        if(categoriesReponse.status === 1) {
            setCategories(categoriesReponse.data.items?.splice(0,10))
        }
    },[])
    
    return categories
}

export default useGetCategories;