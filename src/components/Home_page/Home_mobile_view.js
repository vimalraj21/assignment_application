import React,{useEffect,useState} from "react";
import Mobile_view_live_bid from "./Live_bid/Mobile_view_live_bid"
import Mobile_view_more_info from "./More_info/Mobile_view_more_info";
import Mobile_view_popular_items from "./Popular_items/Mobile_view_popular_items";
import import_data from "../../js/database/import_data";
function Home_mobile_view(){
    const [data, setData] = useState([]);
    useEffect(() => {
        var fetch_data = import_data.dummy_data;
        setData(fetch_data);
        console.log(data);
        
    }, []);
    return(
        <>
        <Mobile_view_live_bid bid_data ={data}/>
        <Mobile_view_more_info/>
        <Mobile_view_popular_items bid_data ={data}/>
        </>
        
        
    )
}
export default Home_mobile_view;