import {APIBASE} from './API';
const KEY = process.env.APIKEY;

const getChannel=async(channelId)=>{
    try {
        const rawChannel = await fetch(`${APIBASE}channels?part=snippet&id=${channelId}&key=${KEY}`);
        const data = await rawChannel.json();
        return {status: 1, data:data};
    } catch (error) {
        return {status: 0, data: "Error retriving the data", error: error}
    }
}

export default getChannel;