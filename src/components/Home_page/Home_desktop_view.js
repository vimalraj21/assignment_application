import React,{useEffect,useState} from "react";
import Desktop_view_live_bid from "./Live_bid/Desktop_view_live_bid"
import Desktop_view_more_info from "./More_info/Desktop_view_more_info";
import Desktop_view_popular_items from "./Popular_items/Desktop_view_popular_items";
import import_data from "../../js/database/import_data";
function Home_desktop_view(){
    const [data, setData] = useState([]);
    useEffect(() => {
        var fetch_data = import_data.dummy_data;
        setData(fetch_data);
        console.log(data);
        
    }, []);
    return(
        <>
        <Desktop_view_live_bid bid_data ={data}/>
        <Desktop_view_more_info/>
        <Desktop_view_popular_items bid_data ={data}/>
        </>
        
        
    )
}
export default Home_desktop_view;