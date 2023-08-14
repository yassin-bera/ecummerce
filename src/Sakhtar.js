import React , {useState} from "react";
import PersonTask from "./components/PersonTask/PersonTask";
import Layout from "./Layout/Layout"
import Sarbarg from "./components/Sarbarg/Sarbarg"
import TextBox from "./components/TextBox/TextBox";
import Manager from "./components/Manager/Manager";
import "./Sakhtar.css"
const Sakhtar = ()=>{
  const [taskInfo , setTaskInfo] = useState([
    {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A7%D9%85%DB%8C%D9%86%20%DA%A9%D9%84%D8%A7%D9%87%D8%AF%D9%88%D8%B2%D8%A7%D9%86.02848642.png" , person: "امین کلاهدوزان" , title : "رئیس مرکز توسعه تجارت الکترونیک",
    task :["حراست","مرکز داده بخش بازرگانی"]
    },
    {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%81%D8%B1%D8%B4%D8%A7%D8%AF%20%D8%B2%D8%A7%D9%87%D8%AF.ad1a128d.png" , person : "فرشاد زاهد" , title : "دفتر ریاست و روابط عمومی" ,
    task : ["رئیس ارزیابی عملكرد و پاسخگویی به شكایات (مركز توسعه تجارت الكترونیكی)"]
    },
    {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B9%D9%84%DB%8C%D8%B1%D8%B6%D8%A7%20%D8%AC%D8%A7%D9%88%DB%8C%D8%AF%20%D8%B9%D8%B1%D8%A8%D8%B4%D8%A7%D9%87%DB%8C.25444158.png" , person : "علیرضا جاوید عربشاهی" , title : "دفتر برنامه ریزی، پایش و مطالعات راهبردی" ,
    task : ["گروه برنامه‌ریزی" , "گروه مطالعات و پژوهش‌های راهبردی"]
    },
    {image :  "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B9%D9%84%DB%8C%D8%B1%D8%B6%D8%A7%20%D9%82%D8%B1%D8%A8%D8%A7%D9%86%20%D8%B2%D8%A7%D8%AF%D9%87.2c1b736a.png" , person : "حمیدرضا قربان زاده" , title : "معاونت توسعه منابع انسانی و امور پشتیبانی" ,
    task : ["معرفی معاونت" , "دفتر نوسازی و تحول اداری" , "اداره کل امور اداری" , "اداره کل امور مالی و ذیجسابی" ]
    },
    {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B1%D8%B6%D8%A7%20%D8%AC%D9%88%D8%A7%D8%AF%DB%8C%20%D9%86%DB%8C%D8%A7.eba3507b.png" , person : "رضا جوادی نیا" , title : "معاونت زیرساخت کلید عمومی و امنیت اطلاعات تجاری" ,
    task : ["مرکز معرفی" , "مرکز دولتی صدور گواهی الکترونیکی ریشه" , "مرکز صدور گواهی الکترونیکی میانی عام دفاتر ثبت نام صدور گواهی الکترونیکی دیجیتال" , "دفتر امنیت فضای تبادل اطلاعات تجاری (افتات)"]
    },
    {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%85%D8%AD%D9%85%D8%AF%D8%AC%D9%88%D8%A7%D8%AF%20%D9%87%D8%A7%D8%AF%DB%8C.a0441165.png", person : "محمدجواد‌هادی" , title : "معاونت تسهیل تجاری و توسعه کاربردها" ,
    task : ["معرفی","دفتر بسترسازی تسهیل تجاری" ,"دفتر توسعه کاربردها","دفتر استاندارها و توسعه همكاری های بین الملل" , "دفتر آموزش و ترویج"]
    }
  ])
  const [mangerInfo , setMangerInfo] = useState([
    {managerName : ""  , ManagerTitle : "مدیر سامانه صدور گواهی الکترونیکی ریشه"},
    {managerName : "آرش عسگری"  , ManagerTitle : "مدیر سامانه تدارکات الکترونیکی دولت (ستاد)"},
    {managerName : "فاطمه جعفری"  , ManagerTitle : "مدیر سامانه معاون مرکز میانی عام"},
    {managerName : "فردوس حاتمی"  , ManagerTitle : "سرپرست اجرایی سامانه نماد اعتماد الکترونیکی"},
    {managerName : "ندا مصطفوی"  , ManagerTitle : "مدیر فنی سامانه اینماد"},
  ])
    return(
    <Layout>
      <Sarbarg sarbargTitle={"ساختار سازمانی مرکز توسعه تجارت الکترونیکی"}/>
      <div className="Sakhtar__conatiner">
        <div className="sakhtar__box">
            {taskInfo.map((item)=>{
                 return(
                    <PersonTask image={item.image} person={item.person} title={item.title} task={item.task}/>
                 );
            })}
        </div>
      </div>
      <TextBox text={"در ساختار تشکیلاتی مرکز، دو کارگروه، یک شورا و یک کمیته مستقل طراحی شده است که عموم برنامه‌ریزی‌های کلان و سیاستگذاری‌ها در حوزه تجارت الکترونیکی توسط آنها انجام می شود. سه معاونت تسهیل تجاری و توسعه کاربردها، معاونت زیرساخت کلید عمومی و امنیت اطلاعات تجاری و معاونت توسعه منابع انسانی و امور پشتیبانی نیز جهت انجام وظایف تخصصی و همچنین پشتیبانی منابع انسانی و تجهیزات در نظر گرفته شده است."} src={"../egfuerewfwe.png"}/>
     <div className="manger__box__container">
        <div className="System__management__grid">
          {mangerInfo.map((item)=>{
            return(
              <Manager managerName={item.managerName} managerTitle={item.ManagerTitle}/>
            )
          })}
        </div>
     </div>
    </Layout>
  );
}
export default Sakhtar