import React ,{useState , useEffect} from "react";

import Layout from "../Layout/Layout";
import Sarbarg from "../components/Sarbarg/Sarbarg";
import PublishStatus from "../components/PublishStatus/PublishStatus";
// import { DatePicker } from "jalali-react-datepicker";
import "./singleNews.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


const SingleNews = (props) => {
    const [newsInfo , setNewsInfo] = useState([
        // {newsTitle : "" , newsText : "" , newsImage : ""},
    ]);
    const [newsView , setNewsView] = useState([

    ])
    const [fullDate , setFullDate] = useState("")
    const [time , setTime] = useState("")
    const {id} = useParams()
    let timeCheck = null
    // console.log(id)
    useEffect(() => {
        const apiUrl = `https://backendtest.ecommerce.gov.ir/news_api/news/${
            id
        }`;
        const token = '13f34a15e523785deece406a856834068c3d1add';
    
        axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then(response => {
            // setNewsInfo(response.data.results.filter(item=> item.main_image !== null))
            setNewsInfo(response.data)
            setFullDate(response.data.date_published.split("T")[0])
            timeCheck = response.data.date_published.split("T")[1]
            setTime(timeCheck.split(".")[0])
            console.log(response.data)
            // console.log(response.data.results)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } , [])
    useEffect(() => {
        const apiUrl = `https://backendtest.ecommerce.gov.ir/views_api/`;
        const token = '13f34a15e523785deece406a856834068c3d1add';
    
        axios.post(apiUrl,{
            type : "n",
            object_id : `${id}`
        } ,{
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then(response => {
            // console.log(response.data)
            setNewsView(response.data)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } , [])
    // const date = newsInfo.date_published.split("T")
    //  console.log(date)
    return(
        <Layout>
           <Sarbarg sarbargTitle={newsInfo.slug}/>
           <div className="news__main__article">
             <div className="news__main__article__holder">
                 <h1>{newsInfo.slug}</h1>
                 <img src={newsInfo.main_image?.thumbnail}/>
                <div dangerouslySetInnerHTML={{__html:newsInfo.body}}/>
                <PublishStatus 
                    publishView={newsView.total_views} 
                    publishNumber={id} 
                    publishDate={fullDate} 
                    publishTime={time} 
                    publishUrl={`https://loc/news/${id}`}
                    />
                <div className="news__main__back__to__page">
                        <Link to={'/'}>بازگشت به صفحه ی اصلی</Link>
                </div>
             </div>
             
           </div>
        </Layout>
    );
}
export default SingleNews;