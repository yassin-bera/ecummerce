import React from "react";
import "./Table.css";
const Table = (props) => {
    return (
         <section className="table__container table margin">
            <table>
               <thead>
                 <tr>
                    <th rowspan="2">
                        <p>ردیف</p>
                    </th>
                    <th colSpan="2">
                        <p>عنوان خدمت</p>
                    </th>
                    <th rowspan="2">
                            <p>نحوه<br/>ارائه خدمت</p>
                    </th>
                    <th rowspan="2">
                        <p>راهنمای<br/>استفاده از<br/>خدمات</p>
                    </th>
                    <th rowspan="2">
                         <p>شناسنامه<br/>زیرخدمت</p>
                    </th>
                    <th rowspan="2">
                        <p>لینک<br/>صفحه<br/>دریافت<br/>خدمات</p>
                    </th>
                    <th rowspan="2">
                        <p>سوالات متداول</p>
                    </th>
                    <th rowspan="2">
                        <p>توافقنامه<br/>سطح خدمت</p>
                    </th>
                    <th rowspan="2">
                        <p>نظرسنجی</p>
                    </th>
                    <th rowspan="2">
                        <p>شماره تماس و نام<br/>واحد پاسخگوی زیرخدمت</p>
                    </th>
                </tr>
                <tr>
                <th>
                <p>عنوان<br/>خدمت کلان</p>
                </th>
                <th>
                <p>عنوان زیرخدمت</p>
                </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th rowspan="5">
                <p>۱</p>
                </th>
                <th rowspan="5">
                <p>ارائه انواع <br/>گواهی‌های <br/>الکترونیکی</p>
                </th>
                <th>
                <p>صدور گواهی<br/>امضای دیجیتال<br/>اشخاص حقیقی<br/></p>
                </th>
                <th>
                <p>غیرحضوری</p>
                </th>
                <th>
                <button>
                <p>
                    <a href="https://www.gica.ir/portal/index?80">
                        <span>مشاهده</span>
                    </a>
                </p>
                </button>
                </th>
                <th>
                <button>
                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011561100">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://www.gica.ir/portal/index?65">
                <span>ورود</span>
                </a>
                </button>
                </th>
                <th rowspan="5">
                <button>
                <a href="https://www.gica.ir/portal/index?79">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://ecommerce.gov.ir/uploads/9.pdf">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <div>
                <button>نظرسنجی</button>
                </div>
                </th>
                <th rowspan="5">
                <p>مرکز میانی عام<br/>تلفن : ۰۲۱۹۱۰۱۷۰۲۰<br/>۰۲۱۴۱۰۳۱۴۰۱</p>
                </th>
                </tr>
                <tr>
                <th>
                <p>صدور گواهی<br/>مهر سازمانی<br/>اشخاص حقوقی</p>
                </th>
                <th>
                <p>غیرحضوری</p>
                </th>
                <th>
                <button>
                <a href="https://www.gica.ir/portal/index?80">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011561101">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://www.gica.ir/portal/index?66">
                <span>ورود</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://ecommerce.gov.ir/uploads/10.pdf">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <div> 
                <button>نظرسنجی</button>
                </div>
                </th>
                </tr>
                <tr>
                <th>
                <p>صدور گواهی SSL</p>
                </th>
                <th>
                <p>غیرحضوری</p>
                </th>
                <th>
                <button>
                <a href="https://www.gica.ir/portal/index?80">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011561102">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://www.gica.ir/portal/index?69">
                <span>ورود</span>
                </a>
                </button>
                </th>
                <th>
                <button>
                <a href="https://ecommerce.gov.ir/uploads/11.pdf">
                <span>مشاهده</span>
                </a>
                </button>
                </th>
                <th>
                <div>
                 <button>نظرسنجی</button>
                 </div>
                 </th>
                 </tr>
                 <tr>
                 <th>
                 <p>صدور گواهی پست<br/>الکترونیکی امن</p>
                 </th>
                 <th>
                 <p>غیرحضوری</p>
                 </th>
                 <th>
                 <button>
                 <a href="https://www.gica.ir/portal/index?80">
                 <span>مشاهده</span>
                 </a>
                 </button>
                 </th>
                 <th>
                 <button>
                 <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011561103">
                 <span>مشاهده</span>
                 </a>
                 </button>
                 </th>
                 <th>
                 <button>
                 <a href="https://www.gica.ir/portal/index?67">
                 <span>ورود</span>
                 </a>
                 </button>
                 </th>
                 <th>
                 <button>
                 <a href="https://ecommerce.gov.ir/uploads/12.pdf">
                 <span>مشاهده</span>
                 </a>
                 </button>
                 </th>
                 <th>
                 <div>
                  <button>نظرسنجی</button>
                  </div>
                  </th>
                  </tr>
                  <tr>
                  <th>
                  <p>صدور گواهی امضای کد</p>
                  </th>
                  <th>
                  <p>غیرحضوری</p>
                  </th>
                  <th>
                  <button>
                  <a href="https://www.gica.ir/portal/index?80">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011561104">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://www.gica.ir/portal/index?68">
                  <span>ورود</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://ecommerce.gov.ir/uploads/13.pdf">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <div> 
                  <button>نظرسنجی</button>
                  </div>
                  </th>
                  </tr>
                  <tr>
                  <th>
                  <p>۲</p>
                  </th>
                  <th>
                  <p>ارائه تاییدیه مهر زمانی</p>
                  </th>
                  <th>
                  <p>-</p>
                  </th>
                  <th>
                  <p>غیرحضوری</p>
                  </th>
                  <th>
                  <button>
                  <a href="https://www.gica.ir/portal/APP_Client/UserFiles/File/TSA.mp4">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011563000">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://www.gica.ir/portal/index?70">
                  <span>ورود</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://www.rca.gov.ir/FAQ_3415.html">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <button>
                  <a href="https://ecommerce.gov.ir/uploads/14.pdf">
                  <span>مشاهده</span>
                  </a>
                  </button>
                  </th>
                  <th>
                  <div>
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   <th>
                   <p>مرکز میانی عام<br/>تلفن: 02191017020<br/>02141031401</p>
                   </th>
                   </tr>
                   <tr>
                   <th rowspan="2">
                   <p>۳</p>
                   </th>
                   <th rowspan="2">
                   <p>ارائه مجوزهای فعالیت مراکز صدور گواهی الکترونیکی</p>
                   </th>
                   <th>
                   <p>صدور مجوز مرکز میانی تابعه</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button><a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                    <span>مشاهده</span>
                    </a>
                    </button>
                    </th>
                    <th>
                        <button>
                            <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011564100">
                                <span>مشاهده</span>
                            </a>
                                </button>
                                </th>
                                <th>
                                    <button>
                                        <a href="http://www.rca.gov.ir/%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%85%D8%B1%D8%A7%DA%A9%D8%B2-%D9%85%DB%8C%D8%A7%D9%86%DB%8C_3315.html">
                                            <span>ورود</span>
                                        </a>
                                            </button>
                                            </th>
                                            <th rowspan="2">
                                                <button>
                                                    <a href="https://www.rca.gov.ir/FAQ_3415.html">
                                                        <span>مشاهده</span>
                                                        </a>
                                                        </button>
                                                        </th>
                                                        <th>
                                                            <button>
                                                                <a href="https://ecommerce.gov.ir/uploads/1_303_17_1.pdf">
                                                                    <span>مشاهده</span>
                                                                    </a>
                                                                    </button>
                                                                    </th>
                                                                    <th>
                                                                        <div> 
                                                                            <button>نظرسنجی</button>
                                                                            </div>
                                                                            </th>
                                                                            <th rowspan="2">
                                                                                <p>مرکز دولتی صدور گواهی الکترونیکی ریشه تلفن:<br/>02141031452<br/>02141031401</p>
                                                                                </th>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th>
                                                                                        <p>صدور مجوز فعالیت مراکز میانی صدور گواهی الکترونیکی</p>
                                                                                        </th>
                                                                                        <th>
                                                                                            <p>غیر حضوری</p>
                                                                                            </th>
                                                                                            <th>
                                                                                                <button>
                                                                                                    <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                                                                                                        <span>مشاهده</span>
                                                                                                        </a>
                                                                                                        </button>
                                                                                                        </th>
                                                                                                        <th>
                                                                                                            <button>
                                                                                                                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011564101">
                                                                        <span>مشاهده</span>
                                                                        </a>
                                                                        </button>
                                                                        </th>
                                                                        <th>
                                                                            <button>
                                                                                <a href="http://www.rca.gov.ir/%D8%B1%D8%A7%D9%87-%D8%A7%D9%86%D8%AF%D8%A7%D8%B2%DB%8C-%D9%85%D8%B1%D8%A7%DA%A9%D8%B2-%D9%85%DB%8C%D8%A7%D9%86%DB%8C_3315.html">
                                                                                    <span>ورود</span>
                                                                                    </a>
                                                                                    </button>
                                                                                    </th>
                                                                                    <th>
                                                                                        <button>
                                                                                            <a href="https://ecommerce.gov.ir/uploads/2.pdf">
                                                                                                <span>مشاهده</span>
                                                                                                </a>
                                                                                                </button>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <div>
                                                                                                         <button>نظرسنجی</button>
                                                                                                         </div>
                                                                                                         </th>
                                                                                                         </tr>
                                                                                                         <tr>
                                                                                                            <th>
                                                                                                                <p>۴</p>
                                                                                                                </th>
                                                                                                                <th>
                                                                                                                    <p>صدور مجوز فعالیت دفتر ثبت نام گواهی الکترونیکی</p>
                                                                                                                    </th>
                                                                                                                    <th>
                                                                                                                        <p>-</p>
                                                                                                                        </th>
                                                                                                                        <th>
                                                                                                                            <p>غیرحضوری</p>
                                                                                                                            </th>
                                                                                                                            <th>
                                                                                                                                <button>
                                                                                                                                    <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                                                                                                                                        <span>مشاهده</span>
                                                                                                                                        </a>
                                                                                                                                        </button>
                                                                                                                                        </th>
                                                                                                                                        <th>
                                                                                                                                            <button>
                                                                                                                                                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011565000">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://www.gica.ir/portal/index?78">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://www.rca.gov.ir/FAQ_3415.html">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/15.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   <th>
                   <p>مرکز میانی عام<br/>تلفن: 02191017020<br/>02141031401</p>
                   </th>
                   </tr>
                   <tr>
                   <th rowspan="4">
                   <p>۵</p>
                   </th>
                   <th rowspan="4">
                   <p>ارائه خدمات به کسب و کارهای اینترنتی</p>
                   </th>
                   <th>
                   <p>صدور مجوز نماد اعتماد الکترونیکی</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://enamad.ir/About">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011566100">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://reg.enamad.ir/Panel">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th rowspan="3">
                   <button>
                   <a href="https://enamad.ir/Faq">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/18.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   <th rowspan="3">
                   <p>نماد اعتماد الکترونیکی تلفن:<br/>021 54604000</p>
                   </th>
                   </tr>
                   <tr>
                   <th>
                   <p>بررسی تخلفات و نظارت برکسب و کارهای اینترنتی</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://enamad.ir/About">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011566102">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://reg.enamad.ir/Panel">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th><button>
                   <a href="https://ecommerce.gov.ir/uploads/18.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                    <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   </tr>
                   <tr>
                   <th>
                   <p>رتبه بندی کسب و کارهای دارای نماد اعتماد الکترونیکی</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://enamad.ir/About">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                    <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011566103">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://reg.enamad.ir/Panel">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/18.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   </tr>
                   <tr>
                   <th>
                   <p>شناسایی و احراز مشتریان کسب وکارهای الکترونیکی</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/emta14000810.mp4">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                    <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011566104">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecsw.ir/ui/#/dashboard">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://enamad.ir/Faq">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/18.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   <th>
                   <p>سامانه امتا تلفن:<br/>۸۸۱۷۷۳۰۰</p>
                   </th>
                   </tr>
                   <tr>
                   <th rowspan="4">
                   <p>۶</p>
                   </th>
                   <th rowspan="4">
                   <p>ارائه گواهی‌های تأییدیه تجهیزات زیرساخت کلید عمومی کشور</p>
                   </th>
                   <th>
                   <p>صدور گواهی تاییدیه الگوریتم زیرساخت کلید عمومی کشور</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011567100">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://www.rca.gov.ir/?part=menu&amp;inc=menu&amp;id=96">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th rowspan="4">
                   <button>
                   <a href="https://www.rca.gov.ir/FAQ_3415.html">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/3.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div> 
                   <button>نظرسنجی</button>
                   </div>
                   </th>
                   <th rowspan="4">
                   <p>دفتر افتات<br/>تلفن:<br/>02141031452<br/>02141031401</p>
                   </th>
                   </tr>
                   <tr>
                   <th>
                   <p>صدور گواهی تاییدیه پودمانهای رمزنگاشتی زیرساخت کلید عمومی کشور</p>
                   </th>
                   <th>
                   <p>غیرحضوری</p>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011567101">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://www.rca.gov.ir/?part=menu&amp;inc=menu&amp;id=96">
                   <span>ورود</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <button>
                   <a href="https://ecommerce.gov.ir/uploads/4.pdf">
                   <span>مشاهده</span>
                   </a>
                   </button>
                   </th>
                   <th>
                   <div>
                    <button>نظرسنجی</button>
                    </div>
                    </th>
                    </tr>
                    <tr>
                    <th>
                    <p>صدور گواهی تاییدیه سامانه‌های صدور و مدیریت گواهی الکترونیکی</p>
                    </th>
                    <th>
                    <p>غیرحضوری</p>
                    </th>
                    <th>
                    <button>
                    <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                    <span>مشاهده</span>
                    </a>
                    </button>
                    </th>
                    <th>
                    <button>
                    <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011567102">
                    <span>مشاهده</span>
                    </a></button>
                    </th>
                    <th>
                    <button>
                    <a href="https://www.rca.gov.ir/?part=menu&amp;inc=menu&amp;id=96">
                    <span>ورود</span>
                    </a>
                    </button>
                    </th>
                    <th>
                    <button>
                    <a href="https://ecommerce.gov.ir/uploads/1_303_91_5.pdf">
                    <span>مشاهده</span>
                    </a>
                    </button>
                    </th>
                    <th>
                    <div>
                     <button>نظرسنجی</button>
                     </div>
                     </th>
                     </tr>
                     <tr>
                        <th>
                     <p>صدور گواهی تاییدیه نرم افزارهای زیرساخت کلید عمومی کشور</p>
                     </th>
                     <th>
                     <p>غیرحضوری</p>
                     </th>
                     <th>
                     <button>
                     <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                    <button>
                     <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011567103">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                     <button>
                     <a href="https://www.rca.gov.ir/?part=menu&amp;inc=menu&amp;id=96">
                     <span>ورود</span>
                     </a>
                     </button>
                     </th>
                     <th>
                     <button>
                     <a href="https://ecommerce.gov.ir/uploads/1_303_67_6.pdf">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                     <div> 
                     <button>نظرسنجی</button>
                     </div>
                     </th>
                     </tr>
                     <tr>
                     <th rowspan="3">
                     <p>۷</p>
                     </th>
                     <th rowspan="3">
                     <p>مدیریت نظام تدارکات الکترونیکی دولت</p>
                     </th>
                     <th>
                     <p>مدیریت مزایده‌های الکترونیک دولت</p>
                     </th>
                     <th>
                     <p>غیرحضوری</p>
                     </th>
                     <th>
                     <button>
                     <a href="https://www.setadiran.ir/setad/cms/education">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                     <button>
                     <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=10011568100">
                     <span>مشاهده</span></a></button></th><th><button>
                     <a href="https://eauc.setadiran.ir/eauc/subscriberDispatch.action">
                     <span>ورود</span>
                     </a>
                     </button>
                     </th>
                     <th rowspan="3">
                     <button>
                     <a href="https://www.setadiran.ir/setad/cms/faq">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                     <button>
                     <a href="https://ecommerce.gov.ir/uploads/24.pdf">
                     <span>مشاهده</span>
                     </a>
                     </button>
                     </th>
                     <th>
                        <div>
                      <button>نظرسنجی</button>
                      </div>
                      </th>
                      <th rowspan="3">
                      <p>سامانه تدارکات الکترونیکی دولت<br/>تلفن:<br/>0211456</p>
                      </th>
                      </tr>
                      <tr>
                      <th>
                      <p>مدیریت معاملات جزئی و متوسط الکترونیک دولت</p>
                      </th>
                      <th>
                      <p>غیرحضوری</p>
                      </th>
                      <th>
                      <button>
                      <a href="https://www.setadiran.ir/setad/cms/education">
                      <span>مشاهده</span>
                      </a>
                      </button>
                      </th><th>
                      <button>
                      <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=10011568101">
                      <span>مشاهده</span>
                      </a>
                      </button>
                      </th>
                      <th>
                      <button>
                      <a href="https://eproc.setadiran.ir/eproc/entry.do">
                      <span>ورود</span>
                      </a>
                      </button>
                      </th>
                      <th>
                      <button>
                      <a href="https://ecommerce.gov.ir/uploads/25.pdf">
                      <span>مشاهده</span>
                      </a>
                      </button>
                      </th>
                      <th>
                      <div>
                       <button>نظرسنجی</button>
                       </div>
                       </th>
                       </tr>
                       <tr>
                       <th>
                       <p>مدیریت مناقصات الکترونیک دولت</p>
                       </th>
                       <th>
                       <p>غیرحضوری</p>
                       </th>
                       <th>
                       <button>
                       <a href="https://www.setadiran.ir/setad/cms/education">
                       <span>مشاهده</span>
                       </a>
                       </button>
                       </th>
                       <th>
                       <button>
                       <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=10011568102">
                       <span>مشاهده</span>
                       </a>
                       </button>
                       </th>
                       <th>
                        <button>
                       <a href="https://etend.setadiran.ir/etend/index.action">
                       <span>ورود</span>
                       </a>
                       </button>
                       </th>
                       <th>
                       <button>
                       <a href="https://ecommerce.gov.ir/uploads/26.pdf">
                       <span>مشاهده</span>
                       </a>
                       </button>
                       </th>
                       <th>
                       <div> 
                        <button>نظرسنجی</button>
                        </div>
                        </th>
                        </tr>
                        <tr>
                            <th>
                                <p>۸</p>
                                </th>
                                <th>
                                    <p>مشاوره و آموزش در حوزه تجارت الکترونیک</p>
                                    </th>
                                    <th>
                                        <p>-</p>
                                        </th>
                                        <th>
                                            <p>غیرحضوری</p>
                                    </th>
                                    <th>
                                        <button>
                                            <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                                        <span>مشاهده</span>
                                        </a>
                                        </button>
                                        </th>
                                        <th>
                                            <button>
                                            <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=18051569000">
                                                <span>مشاهده</span>
                                                </a>
                                                </button>
                                                </th>
                                                <th>
                                                    <button>
                                                    <a href="https://www.rca.gov.ir/%D9%85%D8%B4%D8%A7%D9%88%D8%B1%D9%87-%D9%88-%D8%A7%D9%85%D9%88%D8%B2%D8%B4-%D8%AF%D8%B1-%D8%AD%D9%88%D8%B2%D9%87-%D8%AA%D8%AC%D8%A7%D8%B1%D8%AA-%D8%A7%D9%84%DA%A9%D8%AA%D8%B1%D9%88%D9%86%DB%8C%DA%A9_3319.html">
                                                        <span>ورود</span>
                                                        </a>
                                                        </button>
                                                    </th>
                                                    <th>
                                                        <button>
                                                            <a href="https://www.rca.gov.ir/FAQ_3415.html">
                                                                <span>مشاهده</span>
                                                                </a>
                                                                </button>
                                                                </th>
                                                                <th>
                                                                    <button>
                                                                        <a href="https://ecommerce.gov.ir/uploads/8.pdf">
                                                                            <span>مشاهده</span>
                                                                            </a>
                                                                            </button>
                                                                            </th>
                                                                            <th>
                                                                                <div> 
                                                                                    <button>نظرسنجی</button>
                                                                                    </div>
                                                                                    </th>
                                                                                    <th>
                                                                                        <p>مرکز دولتی صدور گواهی الکترونیکی ریشه<br/>تلفن:<br/>02141031452<br/>02141031401</p>
                                                                                        </th>
                                                                                        </tr>
                                                                                        <tr>
                                                                                            <th>
                                                                                                <p>۹</p>
                                                                                                </th>
                                                                                                <th>
                                                                                                    <p>پاسخ به استعلامات تجارت</p>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <p>پاسخ به استعلام وضعیت گواهی الکترونیکی</p>
                                                                                                        </th>
                                                                                                        <th>
                                                                                                            <p>غیرحضوری</p>
                                                                                                            </th>
                                                                                                            <th>
                                                                                                                <button>
                                                                                                                    <a href="https://www.gica.ir/portal/APP_Client/UserFiles/File/OCSP.mp4">
                                                                                                                        <span>مشاهده</span>
                                                                                                                        </a>
                                                                                                                        </button>
                                                                                                                        </th>
                                                                                                                        <th>
                                                                                                                            <button>
                                                                                                                                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13011975107">
                                                                                                                                    <span>مشاهده</span>
                                                                                                                                    </a>
                                                                                                                                    </button>
                                                                                                                                    </th>
                                                                                                                                    <th>
                                                                                                                                        <button>
                                                                                                                                            <a href="https://www.gica.ir/portal/index?portal=Portal&amp;Page=71&amp;lang=fa">
                                                                                                                                                <span>ورود</span>
                                                                                                                                                </a>
                                                                                                                                                </button>
                                                                                                                                                </th>
                                                                                                                                                <th>
                                                                                                                                                    <button>
                                                                                                                                                        <a href="https://ecommerce.gov.ir/uploads/16.pdf">
                                                                                                                                                            <span>مشاهده</span>
                                                                                                                                                            </a>
                                                                                                                                                            </button>
                                                                                                                                                            </th>
                                                                                                                                                            <th>
                                                                                                                                                                <button>
                                                                                                                                                                    <a href="https://ecommerce.gov.ir/uploads/16.pdf">
                                                                                                                                                                        <span>مشاهده</span>
                                                                                                                                                                        </a>
                                                                                                                                                                        </button>
                                                                                                                                                                        </th>
                                                                                                                                                                        <th>
                                                                                                                                                                            <div>
                                                                                                                                                                                 <button>نظرسنجی</button>
                                                                                                                                                                                 </div>
                                                                                                                                                                                 </th>
                                                                                                                                                                                 <th>
                                                                                                                                                                                    <p>مرکز میانی عام<br/>تلفن:<br/>02191017020<br/>02141031401</p>
                                                                                                                                                                                    </th>
                                                                                                                                                                                    </tr>
                                                                                                                                                                                    <tr>
                                                                                                                                                                                        <th>
                                                                                                                                                                                            <p>۱۰</p>
                                                                                                                                                                                            </th>
                                                                                                                                                                                            <th>
                                                                                                                                                                                                <p>بازرسی و نظارت بر عملکرد مراکز میانی</p>
                                                                                                                                                                                                </th>
                                                                                                                                                                                                <th>
                                                                                                                                                                                                    <p>-</p>
                                                                                                                                                                                                    </th>
                                                                                                                                                                                                    <th>
                                                                                                                                                                                                        <p>غیرحضوری</p>
                                                                                                                                                                                                        </th>
                                                                                                                                                                                                        <th>
                                                                                                                                                                                                            <button>
                                                                                                                                                                                                                <a href="https://ecommerce.gov.ir/uploads/irpki.rar">
                                                                                                                                                                                                                    <span>مشاهده</span>
                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                    </th>
                                                                                                                                                                                                                    <th>
                                                                                                                                                                                                                        <button>
                                                                                                                                                                                                                            <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13012037000">
                                                                                                                                                                                                                                <span>مشاهده</span>
                                                                                                                                                                                                                                </a>
                                                                                                                                                                                                                                </button>
                                                                                                                                                                                                                                </th>
                                                                                                                                                                                                                                <th>
                                                                                                                                                                                                                                    <button>
                                                                                                                                                                                                                                        <a href="http://www.rca.gov.ir/%D8%A8%D8%A7%D8%B2%D8%B1%D8%B3%DB%8C-%D9%88-%D9%86%D8%B8%D8%A7%D8%B1%D8%AA-%D8%A8%D8%B1-%D8%B9%D9%85%D9%84%DA%A9%D8%B1%D8%AF-%D9%85%D8%B1%D8%A7%DA%A9%D8%B2-%D9%85%DB%8C%D8%A7%D9%86%DB%8C_3318.html">
                                                                                                                                                                                                                                            <span>ورود</span>
                                                                                                                                                                                                                                            </a>
                                                                                                                                                                                                                                            </button>
                                                                                                                                                                                                                                            </th>
                                                                                                                                                                                                                                            <th>
                                                                                                                                                                                                                                                <button>
                    <a href="https://www.rca.gov.ir/FAQ_3415.html">
                    <span>مشاهده</span>
                    </a>
                    </button>
                    </th>
                    <th>
                        <button>
                            <a href="https://ecommerce.gov.ir/uploads/1_303_84_7.pdf">
                                <span>مشاهده</span>
                                </a>
                                </button>
                                </th>
                                <th>
                                    <div>
                                         <button>نظرسنجی</button>
                                         </div>
                                         </th>
                                         <th>
                                            <p>مرکز دولتی صدور گواهی الکترونیکی ریشه<br/>تلفن:<br/>02141031452<br/>02141031401</p>
                                            </th>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <p>۱۱</p>
                                                    </th>
                                                    <th>
                                                        <p>بازرسی و نظارت بر عملکرد دفاتر ثبت نام صدور گواهی الکترونیکی</p>
                                                        </th>
                                                        <th>
                                                            <p>-</p>
                                                            </th>
                                                            <th>
                                                                <p>غیرحضوری</p>
                                                                </th>
                                                                <th>
                                                                    <button>
                                                                        <a href="https://www.gica.ir/portal/index?80">
                                                                            <span>مشاهده</span>
                                                                            </a></button>
                                                                            </th>
                                                                            <th>
                                                                                <button>
                                                                                    <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13012038000">
                                                                                        <span>مشاهده</span>
                                                                                        </a>
                                                                                        </button>
                                                                                        </th>
                                                                                        <th>
                                                                                            <button>
                                                                                                <a href="https://www.gica.ir/totalca/">
                                                                                                    <span>ورود</span>
                                                                                                    </a>
                                                                                                    </button>
                                                                                                    </th>
                                                                                                    <th>
                                                                                                        <button>
                                                                                                            <a href="https://www.gica.ir/portal/index?79">
                                                                                                                <span>مشاهده</span>
                                                                                                                </a>
                                                                                                                </button>
                                                                                                                </th>
                                                                                                                <th>
                                                                                                                    <button>
                                                                                                                        <a href="https://ecommerce.gov.ir/uploads/17.pdf">
                                                                                                                            <span>مشاهده</span>
                                                                                                                            </a>
                                                                                                                            </button>
                                                                                                                            </th>
                                                                                                                            <th>
                                                                                                                                <div>
                                                                                                                                     <button>نظرسنجی</button>
                                                                                                                                     </div>
                                                                                                                                     </th>
                                                                                                                                     <th>
                                                                                                                                        <p>مرکز میانی عام<br/>تلفن:<br/>02191017020<br/>02141031401</p>
                                                                                                                                        </th>
                                                                                                                                        </tr>
                                                                                                                                        <tr>
                                                                                                                                            <th>
                                                                                                                                                <p>۱۲</p>
                                                                                                                                                </th>
                                                                                                                                                <th>
                                                                                                                                                    <p>ارائه جایزه تجارت الکترونیک</p>
                                                                                                                                                    </th>
                                                                                                                                                    <th>
                                                                                                                                                        <p>-</p>
                                                                                                                                                        </th>
                                                                                                                                                        <th>
                                                                                                                                                            <p>غیرحضوری</p>
                                                                                                                                                            </th>
                                                                                                                                                            <th>
                                                                                                                                                                <button>
                                                                                                                                                                    <a href="https://enamad.ir/About">
                                                                                                                                                                        <span>مشاهده</span>
                                                                                                                                                                        </a>
                                                                                                                                                                        </button>
                                                                                                                                                                        </th>
                                                                                                                                                                        <th>
                                                                                                                                                                            <button>
                                                                                                                                                                                <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13012039000">
                                                                                                                                                                                    <span>مشاهده</span>
                                                                                                                                                                                    </a>
                                                                                                                                                                                    </button>
                                                                                                                                                                                    </th>
                                                                                                                                                                                    <th>
                                                                                                                                                                                        <button>
                                                                                                                                                                                            <a href="https://comp.enamad.ir/Panel">
                                                                                                                                                                                                <span>ورود</span>
                                                                                                                                                                                                </a>
                                                                                                                                                                                                </button>
                                                                                                                                                                                                </th>
                                                                                                                                                                                                <th>
                                                                                                                                                                                                    <button>
                                                                                                                                                                                                        <a href="https://enamad.ir/Faq">
                                                                                                                                                                                                            <span>مشاهده</span>
                                                                                                                                                                                                            </a>
                                                                                                                                                                                                            </button>
                                                                                                                                                                                                            </th>
                                                                                                                                                                                                            <th>
                                                                                                                                                                                                                <button>
                                                                                                                                                                                                                    <a href="https://ecommerce.gov.ir/uploads/21.pdf">
                                                                                                                                                                                                                        <span>مشاهده</span>
                                                                                                                                                                                                                        </a>
                                                                                                                                                                                                                        </button>
                                                                                                                                                                                                                        </th>
                                                                                                                                                                                                                        <th>
                                                                                                                                                                                                                            <div> 
                                                                                                                                                                                                                                <button>نظرسنجی</button>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                </th>
                                                                                                                                                                                                                                <th>
                                                                                                                                                                                                                                    <p>مرکز میانی عام<br/>تلفن:<br/>02154604000</p>
                                                                                                                                                                                                                                    </th>
                                                                                                                                                                                                                                    </tr>
                                                                                                                                                                                                                                    <tr>
                                                                                                                                                                                                                                        <th>
                                                                                                                                                                                                                                            <p>۱۳</p>
                                                                                                                                                                                                                                            </th>
                                                                                                                                                                                                                                            <th>
                                                                                                                                                                                                                                                <p>رسیدگی به شکایات حوزه تجارت الکترونیکی</p>
                                                                                                                                                                                                                                                </th>
                                                                                                                                                                                                                                                <th>
                                                                                                                                                                                                                                                    <p>-</p>
                                                                                                                                                                                                                                                    </th>
                                                                                                                                                                                                                                                    <th>
                                                                                                                                                                                                                                                        <p>غیرحضوری</p>
                                                                                                                                                                                                                                                        </th>
                                                                                                                                                                                                                                                        <th>
                                                                                                                                                                                                                                                            <button>
                                                                                                                                                                                                                                                                <a href="https://enamad.ir/About">
                                                                                                                                                                                                                                                                    <span>مشاهده</span>
                                                                                                                                                                                                                                                                    </a>
                                                                                                                                                                                                                                                                    </button>
                                                                                                                                                                                                                                                                    </th>
                                                                                                                                                                                                                                                                    <th>
                                                                                                                                                                                                                                                                        <button>
                                                                                                                                                        <a href="https://khadamat.mardom.ir/Service/Details?ServiceId=13012041000">
                                                                                                                                                            <span>مشاهده</span>
                                                                                                                                                            </a>
                                                                                                                                                            </button>
                                                                                                                                                            </th>
                                                                                                                                                            <th>
                                                                                                                                                                <button>
                                                                                                                                                                    <a href="https://comp.enamad.ir/Panel">
                                                                                                                                                                        <span>ورود</span>
                                                                                                                                                                        </a>
                                                                                                                                                                        </button>
                                                                                                                                                                        </th>
                                                                                                                                                                        <th>
                                                                                                                                                                            <button>
                                                                                                                                                                                <a href="https://enamad.ir/Faq">
                                                                                                                                                                                    <span>مشاهده</span>
                                                                                                                                                                                    </a>
                                                                                                                                                                                    </button>
                                                                                                                                                                                    </th>
                                                                                                                                                                                    <th>
                                                                                                                                                                                        <button>
                                                                                                                                                                                            <a href="https://ecommerce.gov.ir/uploads/22.pdf">
                                                                                                                                                                                                <span>مشاهده</span>
                                                                                                                                                                                                </a>
                                                                                                                                                                                            </button>
                                                                                                                                                                                            </th>
                                                                                                                                                                                            <th>
                                                                                                                                                                                                <div>
                                                                                                                                                                                                     <button>نظرسنجی</button>
                                                                                                                                                                                                     </div>
                                                                                                                                                                                                     </th>
                                                                                                                                                                                                     <th>
                                                                                                                                                                                                        <p>نماد اعتماد الکترونیکی<br/>تلفن:<br/>02154604000</p>
                                                                                                                                                                                                        </th>
                                                                                                                                                                                                        </tr>
                                                                                                                                                                                                        </tbody>
                                                                                                                                                                                                        </table>
         </section>

    );
}
export default Table;