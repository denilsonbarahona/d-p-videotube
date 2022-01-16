import {APIBASE} from './API';
const KEY = process.env.APIKEY;

const getCategories=async()=>{
    try {
        const rawChannel = await fetch(`${APIBASE}videoCategories?part=snippet&hl=en_US&regionCode=hn&key=${KEY}`);
        const data = await rawChannel.json();
        return {status: 1, data:data};
    } catch (error) {
        return {status: 0, data: "Error retriving the data", error: error}
    }
}

export default getCategories;