import {APIBASE} from './API';
const KEY = process.env.APIKEY;

const getPlayList =async(category)=>{
    try {
        const rawPlayList = await fetch(`${APIBASE}videos?part=id%2C%20snippet%2C%20contentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=${category}&maxResults=50&key=${KEY}`);
        const data = await rawPlayList.json();        
        return {status: 1 ,data:data};
    }catch (error){ 
        return {status: 0, data: "Error retriving the data", error: error}
    }
}


export default getPlayList;