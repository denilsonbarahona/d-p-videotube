import {APIBASE} from './API';
const KEY = process.env.APIKEY;

const getSearchList =async(search)=>{
    try {
        const rawPlayList = await fetch(`${APIBASE}search?maxResults=50&key=${KEY}&part=snippet, id&q=${search}&type=video`);
        const data = await rawPlayList.json();        
        return {status: 1 ,data:data};
    }catch (error){ 
        return {status: 0, data: "Error retriving the data", error: error}
    }
}


export default getSearchList;