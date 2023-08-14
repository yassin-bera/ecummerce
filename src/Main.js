import React ,{useState , useEffect} from "react";

import "./Main.css"
import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./Layout/Layout";
import SuggestBtn from "./components/SuggestBtn/SuggestBtn";
import IconBox from "./components/IconBox/IconBox";
import SamaneBox from "./components/SamaneBox/SamaneBox";
import SliderIcon from "./components/SliderIcon/SliderIcon";
import axios from "axios";
import SliderImage from "./components/SliderImage/SliderImage";
import Counter from "./components/Counter/Counter";
import Divider from "./components/Divider/Divider";
import {Link} from "react-router-dom";
const Main = (props) => {

    const [counter , setCounter] = useState([
        {counterNumber : 1752069 , counterText : "تعداد معاملات سامانه ستاد" , counterImage : "https://test1.ecommerce.gov.ir/_next/static/media/setad.affe8a85.png" , counterBase : 0},
        {counterNumber : 14864001 , counterText : "حجم ریالی معاملات سامانه ستاد" , counterImage : "https://test1.ecommerce.gov.ir/_next/static/media/setad.affe8a85.png" , counterBase : 0},
        {counterNumber : 5089095 , counterText : "تعداد گواهی های الکترونیکی صادر شده" , counterImage : "https://test1.ecommerce.gov.ir/_next/static/media/govahi.b571e4b0.png" , counterBase : 0},
        {counterNumber : 143768 , counterText : "تعداد نماد تجارت الکترونیکی صادر شده" , counterImage : "https://test1.ecommerce.gov.ir/_next/static/media/enamad.95800b3b.png" , counterBase : 0}
        
    ]);
    const images = [
        "https://frontendtest.ecommerce.gov.ir/media/uploaded_files/banner-final.jpg",
        "https://frontendtest.ecommerce.gov.ir/media/uploaded_files/banner-final-2.jpg",
    ];
    const [infoBox , setInfoBox] = useState([
        {boxText : "قوانین مقررات و دستورالعمل ها" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%82%D9%88%D8%A7%D9%86%DB%8C%D9%86%20%D9%88%20%D9%85%D9%82%D8%B1%D8%B1%D8%A7%D8%AA.0ad20d2d.png" , BoxLink : ""},
        {boxText : "پرسش های متداول" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA%20%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84.7d0fb214.png" , BoxLink : "/"},
        {boxText : "سامانه های شفافیت" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D8%B4%D9%81%D8%A7%D9%81%DB%8C%D8%AA.9dde7f23.png"},
        {boxText : "میزخدمت الکترونیکی" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%85%DB%8C%D8%B2%20%D8%AE%D8%AF%D9%85%D8%AA%20%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%DA%A9.3b981d88.png" , BoxLink : "suggestion"},
        {boxText : "اخبار و اطلاعیه ها" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1%20%D9%88%20%D8%A7%D8%B7%D9%84%D8%A7%D8%B9%DB%8C%D9%87%E2%80%8C%D9%87%D8%A7.49bfcfec.png" , BoxLink : "/allnews"},
        {boxText : "ساختار سازمانی" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D8%AE%D8%AA%D8%A7%D8%B1.19aa851d.png" ,BoxLink : "/sakhtar"},
        {boxText : "استراتژی و ماموریت" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%DA%98%DB%8C%20%D9%88%20%D9%85%D8%A7%D9%85%D9%88%D8%B1%D8%AA.db99337a.png" },
        {boxText : "بیانیه ی حریم خصوصی" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A8%DB%8C%D8%A7%D9%86%DB%8C%D9%87%20%D8%AD%D8%B1%DB%8C%D9%85%20%D8%AE%D8%B5%D9%88%D8%B5%DB%8C.f19ef7d0.png"},
        {boxText : "مناقصه و مزایده" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%85%D9%86%D8%A7%D9%82%D8%B5%D9%87%20%D9%88%20%D9%85%D8%B2%D8%A7%DB%8C%D8%AF%D9%87.8875c1aa.png"},
        {boxText : "بروز رسانی وبسایت" , boxIcon : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A8%D8%B1%D9%88%D8%B2%D8%B1%D8%B3%D8%A7%D9%86%DB%8C%20%D9%88%D8%A8%D8%B3%D8%A7%DB%8C%D8%AA.9b9d0c8a.png"},
    ]);
    const [newsInfo , setNewsInfo] = useState([
       
    ]);
    const [sliderIcon , setSliderIcon] = useState([
        {sliderIconSrc : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D8%B5%D8%AF%D9%88%D8%B1%20%DA%AF%D9%88%D8%A7%D9%87%DB%8C%20%D8%A7%D9%84%DA%A9%D9%86%D8%B1%D9%88%D9%86%DB%8C%20%D8%B1%DB%8C%D8%B4%D9%87.8de136fc.png" , sliderIconText:"سامانه صدور گواهی الکترونیکی ریشه"},
        {sliderIconSrc : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B5%D8%AF%D9%88%D8%B1%20%DA%AF%D9%88%D8%A7%D9%87%DB%8C%20%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%20%D8%B9%D8%A7%D9%85.9e67de71.png" , sliderIconText:"سامانه صدور گواهی الکترونیکی میانی عام"},
        {sliderIconSrc : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D8%AA%D8%AF%D8%A7%D8%B1%DA%A9%D8%A7%D8%AA%20%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%20%D8%AF%D9%88%D9%84%D8%AA.1a03c6a2.png" , sliderIconText:"سامانه تدارکات الکترونیکی دولت (ستاد)"},
        {sliderIconSrc : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%86%D9%85%D8%A7%D8%AF%20%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA%20%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C.ea758de8.png" , sliderIconText:"سامانه نماد تجارت الکترونیکی"},
        {sliderIconSrc : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D9%85%D8%A7%D9%86%D9%87%20%D8%B1%D8%B3%DB%8C%D8%AF%DA%AF%DB%8C%20%D8%A8%D9%87%20%D8%B4%DA%A9%D8%A7%DB%8C%D8%A7%D8%AA.12169058.png" , sliderIconText:"سامانه درگاه یکپارچه شکایات"},
    ])   
    const [count, setCount] = useState("0");
    // /////// //////////////////////////////////
  
    // useEffect(() => {
    //     let start = 0;
    // // first three numbers from props
    //     const end = counter.counterNumber;
    //   if (start === end) return;
    //   let totalMilSecDur = 2;
    //   let incrementTime = (totalMilSecDur / end) * 1000;
    //   let timer = setInterval(() => {
    //     start += 1;
    //     setCount(start)
    //     if (start === end) clearInterval(timer)       
    //   }, incrementTime);
    // }, [])
   
   
    useEffect(() => {
        const apiUrl = 'https://backendtest.ecommerce.gov.ir/news_api/news/?type=ne';
        const token = '13f34a15e523785deece406a856834068c3d1add';
    
        axios.get(apiUrl, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        })
        .then(response => {
            // setNewsInfo(response.data.results.filter(item=> item.main_image !== null))
            setNewsInfo(response.data.results.slice(0 , 3))
            // console.log(response.data.results)
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }, [])
    
    console.log(newsInfo)
    return(
        <Layout> 
            <div className="main__slider">
                   <div className="slider__Holder">
                        <SliderImage images={images} />
                   </div>
            </div>
            <div id='app'></div>
            <Divider dividerTopText={"اخبار و اطلاعیه‌ها"} dividerBottomText={"در این بخش میتواند کلیه اخبار مربوط به توسعه تجارت الکترونیکی را بخوانید"}/>
            <div className="row__maker__flex">
                <SuggestBtn btnStyle={"news__archive__btn"} SuggestBtnText={"آرشیو اخبار"} BtnLink="/allnews"/>
            </div>
            <div className="Main__card__news">
             {newsInfo.map((item)=>{
                    return <NewsCard newsImage={item.main_image?.thumbnail || "https://frontendtest.ecommerce.gov.ir/media/uploaded_files/etelaeyeJaalENamad14010922_2292_jxugOlb.jpg"} newsTitle={item.slug} newsId={item.id}/>
             })}
            </div>
            <Divider dividerTopText={"شاخص‌های کلیدی عملکرد مرکز"}/>
            <div className="Main__counter">
                <div className="Main__counter__nested">
                    {counter.map((item)=>{
                        return <Counter counterNumber={item.counterNumber} counterText={item.counterText} counterImage={item.counterImage}/>
                    })}
                </div>
            </div>
            <Divider dividerTopText={"سامانه‌های مرکز توسعه تجارت الکترونیکی"} dividerBottomText={"پوشش کامل نیازهای تجارت الکترونیکی شما در سامانه‌های مرکز"}/>
            <div className="icon__slider__container">
                <div className="icon__slider__container__nested">
                    {sliderIcon.map((item)=>{
                        return <SliderIcon sliderIconSrc={item.sliderIconSrc} sliderIconText={item.sliderIconText}/>
                    })}
                </div>
            </div>
            <div className="samane__suggest">
                <SamaneBox 
                    samaneBoxTitle={"سامانه ثبت پیشنهادات و ایده‌ها"}
                    samaneBoxText={"با عنایت به رسالت مرکز توسعه تجارت الکترونیکی که همانا ساماندهی و رفع موانع تجارت الکترونیکی کشور است و با عنایت به اینکه کشور عزیزمان در زمره کشورهای پیشرو در این حوزه است، از کلیه فعالان و صاحبنظران تجارت الکترونیکی، فناوری اطلاعات و سایر فرهیختگان گرامی تقاضا می‌شود چنانچه ایده‌ای درخصوص بهبود خدمات مرکز دارید از طریق لینک زیر اقدام فرمایید. بدیهی است که حریم خصوصی پیشنهادها و ایده‌های شما حفظ خواهد شد."}
                    samaneImg={"https://test1.ecommerce.gov.ir/_next/static/media/Layer%207.85927d31.png"}
                />
            </div>
            <Divider dividerTopText={"دسترسی مفید"} dividerBottomText={"هر آنچه می خواهید در مورد مرکز توسعه تجارت الکترونیکی بدانید"}/>
            <div className="icons__box__holder">
                    <div className="main__grid__container">
                        {infoBox.map((item)=>{
                           return <IconBox IconText={item.boxText} IconSrc={item.boxIcon} BoxLink={item.BoxLink}/>
                        })}
                    </div>
            </div>
        </Layout>
    );
}
export default Main;