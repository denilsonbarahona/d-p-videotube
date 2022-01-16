import { useEffect, useContext } from "react";
import getPlayList from "../API/getPlayList";
import getChannel from "../API/getChannel";
import AppContext from "../context/AppContext";


const ChannelInformation=(frontVideos)=>{
    const frontData = frontVideos.map(async item=> {
        const channel = await getChannel(item.snippet.channelId);
        if(channel.status === 1) { 
            item.channel = channel.data.items[0].snippet;            
        }else {
            item.channel = {}
        }

        return item;
    })
    return frontData;
}

const useGetPlayList =()=>{
    const {state,setPlayList} = useContext(AppContext); 

    useEffect(async()=>{
        getPlayList(state.category)
        .then(async response=>{
            if(response.status === 1) { 
              const DataWithChannel = await Promise.all( ChannelInformation(response.data.items) ); 
              setPlayList(DataWithChannel)
            } 
        })
        .catch(_=>{});
    },[state.category]);

}

export default useGetPlayList;
