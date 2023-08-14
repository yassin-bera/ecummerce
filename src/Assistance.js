import React , {useState} from "react";
import Layout from "./Layout/Layout";
import Divider from "./components/Divider/Divider";
import Sarbarg from "./components/Sarbarg/Sarbarg";
import Duty from "./components/Duty/Duty";
import Person from "./components/Person/Person";
import "./Assistance.css"

const Assistance = () => {
    const [duty , setDuty] = useState([
        {number: "۱" , title: "برنامه ریزی، ارائه راهکارها، پشتیبانی و نظارت به منظور ارائه تسهیلات و حمایت از ایجاد و توسعه زیرساخت های امنیتی توسعه تجارت الکترونیکی"},
        {number: "۲" , title: "ارائه خدمات صدور گواهی الکترونیکی کشور"},
        {number: "۳" , title: "ارتقاء دانش داخلی و فناوری های مورد استفاده روز جهان و آگاهی از فعالیت های خرابکارانه امنیتی به منظور پیشگیری از تهدیدات آینده از طریق ارائه راهکارها، استانداردها و قوانین مورد نیاز به مراجع ذیصلاح"},
        {number: "۴" , title: "انجام وظایف دبیرخانه شورای سیاستگذاری گواهی الکترونیکی"},
        {number: "۵" , title: "انجام وظایف مرکز دولتی صدور گواهی الکترونیکی ریشه"},
        {number: "۶" , title: "بررسی و احراز شرایط لازم وصلاحیت متقاضیان ایجاد مراکز میانی و صدور مجوز برای آنها"},
        {number: "۷" , title: "حصول اطمینان از عملکرد صحیح مراکز میانی"},
        {number: "۸" , title: "انجام وظایف مرکز صدور گواهی الکترونیکی میانی عام (بازرگانی)"},
        {number: "۹" , title: "ارائه خدمات صدور گواهی الکترونیکی برای متقاضیان در تمام حوزه های کاربردی توسط مرکز میانی عام"},
        {number: "۱۰" , title: "سیاستگذاری، کنترل کیفیت، پیشگیری و ارائه راهکارهای واکنشی امنیت تجارت الکترونیکی"},
        {number: "۱۱" , title: "نظارت و بازرسی بر زیرساخت های حیاتی امنیت تجارت الکترونیکی"},
        {number: "۱۲" , title: "ارائه پیشنهاد تدوین مقررات و آئین نامه های مربوط به مراجع ذی صلاح"}
    ]);
    const [managerInfo , setManager] = useState([
        {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%A7%D9%85%DB%8C%D9%86%20%DA%A9%D9%84%D8%A7%D9%87%D8%AF%D9%88%D8%B2%D8%A7%D9%86.02848642.png" , phone : "۰۲۱-۴۱۰۳۱۱۰۱" , name : "امین کلاهدوزان" , dutyPerson : "رئیس مرکز توسعه تجارت الکترونیکی"},
        {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%81%D8%B1%D8%B4%D8%A7%D8%AF%20%D8%B2%D8%A7%D9%87%D8%AF.ad1a128d.png", phone :"۰۲۱-۴۱۰۳۱۱۰۲" , name : "فرشاد زاهد" , dutyPerson : "مدیر کل دفتر ریاست و روابط عمومی"},
        {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B9%D9%84%DB%8C%D8%B1%D8%B6%D8%A7%20%D9%82%D8%B1%D8%A8%D8%A7%D9%86%20%D8%B2%D8%A7%D8%AF%D9%87.2c1b736a.png", phone :"۰۲۱-۴۱۰۳۱۲۰۱" , name : "حمیدرضا قربانزاده", dutyPerson: "معاون توسعه منابع انسانی و پشتیبانی"},
        {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%85%D8%AD%D9%85%D8%AF%D8%AC%D9%88%D8%A7%D8%AF%20%D9%87%D8%A7%D8%AF%DB%8C.a0441165.png", phone : "۰۲۱-۴۱۰۳۱۳۰۱", name : "محمد جواد‌هادی" , dutyPerson : "معاون تسهیل تجاری و توسعه کاربرد‌ها"},
        {image : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%B1%D8%B6%D8%A7%20%D8%AC%D9%88%D8%A7%D8%AF%DB%8C%20%D9%86%DB%8C%D8%A7.eba3507b.png", phone : "۰۲۱۴۱۰۳۱۴۰۱", name : "رضا جوادی نیا" , dutyPerson : "معاون زیر ساخت کلید عمومی و امنیت اطلاعات تجاری"},
    ])
    return(
        <Layout>
           <Sarbarg sarbargTitle={"معاونت زیرساخت کلید عمومی و امنیت اطلاعات تجاری"}/>
           <div className="text__container">
             <div>
                <p className="text">معاونت زیرساخت کلید عمومی و امنیت اطلاعات تجاری نقش مهم و کلیدی در توسعه زیرساخت‌های امنیتی تجارت الکترونیکی دارد. سامانه تدارکات الکترونیکی دولت (ستاد)، مرکز دولتی صدور گواهی الکترونیکی ریشه، مرکز دولتی صدور گواهی الکترونیکی میانی عام و دفتر امنیت فضای تبادل اطلاعات تجاری (افتات) زیر نظر این معاونت فعالیت می کنند. دفتر امنیت فضای تبادل اطلاعات تجاری (افتات) در سال 1396 در مرکز توسعه تجارت الکترونیکی تشکیل شده و تا پیش از آن به عنوان بخشی از مرکز دولتی صدور گواهی الکترونیکی ریشه فعالیت می‌ کرده است. فعالیت‌های مبتنی بر تحقیق و توسعه این دفتر از سال 1392 با تدوین استانداردهای ملی در حوزه زیرساخت کلید عمومی شروع شده است. یکی از خدمات چهارگانه مرکز توسعه تجارت الکترونیکی که در سال 1395 در هیئت مقررات‌زدایی وزارت اقتصاد مورد تصویب قرار گرفت، صدور گواهی تأییدیه تجهیزات زیرساخت کلید عمومی است که بر این اساس محصولات مختلف نرم‌افزاری و سخت‌افزاری مورد استفاده در زیرساخت کلید عمومی، در صورت رعایت ضوابط و استانداردهای مربوطه موفق به اخذ این گواهی تأییدیه از مرکز توسه تجارت الکترونیکی خواهند شد.</p>
            </div>
           </div>
           <Divider dividerTopText={"معاونت زیرساخت کلید عمومی و امنیت اطلاعات تجاری"} dividerBottomText={"اهم وظایف"}/>
            <div className="duty__center">
                {duty.map((item , index) => {
                    return(
                        <Duty number={item.number} title={item.title}/>
                    )
                })}
            </div>
            <Divider dividerTopText={"راه‌های ارتباطی مدیران مرکز"} dividerBottomText={"راه‌های ارتباطی رئیس و معاونین مرکز توسعه تجارت الکترونیکی"}/>
            <div className="managers__container">
                {managerInfo.map((item)=>{
                  return(
                    <Person name={item.name} phone={item.phone} image={item.image} dutyPerson={item.dutyPerson}></Person>
                  )
                })}
            </div>
        </Layout>
       );
};
export default Assistance;