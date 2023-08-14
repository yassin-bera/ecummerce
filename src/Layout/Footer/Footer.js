import React from "react";
import "./Footer.css";
import map from "../../assets/Screenshot 2023-07-26 145829.png"
import iran from "../../assets/iran flag.e361d297.png"
import wifi from "../../assets/wifi.png"
import soroush from "../../assets/Soroush-Logo-LimooGraphic.e0381acf.png"
import bale from "../../assets/bale-pngrepo-com.514c82e5.png"
import image1 from "../../assets/1.png"
import image2 from "../../assets/2.png"
import image4 from "../../assets/4.png"
import image5 from "../../assets/5.png"
import image6 from "../../assets/6.png"
import image7 from "../../assets/7.png"
import copy from "../../assets/Logo copy.b8825475.png"
const Footer = (props) => {
    return(
        <footer className="footer">
            <section className="main__footer">
                <div className="footer__first__line">
                    <div className="footer__image__container">
                        <img src={map} className="footer__image"/>
                    </div>
                    <div className="contact__container">
                        <span className="footer__title">تماس با ما</span>
                        <p>تهران , بلوار کشاورز , خیابان شهید نادری ,جنب کوچه حجت دوست ,پلاک 15 ,مرکز توسعه تجارت الکترونیکی</p>
                        <p>021-41031000</p>
                        <p>021-88955952</p>
                        <p>info@ecommerce.gov.ir</p>
                    </div>
                    <div className="access__container">
                        <span className="footer__title">دسترسی سریع</span>
                        <p>سامانه شفافیت مرکز</p>
                        <p>اخبار و اطلاعیه‌ها</p>
                        <p>میزخدمت الکترونیکی</p>
                        <p>مزایده و مناقصه</p>
                        <p>پرسش‌های متداول</p>
                    </div>
                    <div className="center__container">
                        <span className="footer__title">سامانه های مرکزی</span>
                        <p>سامانه جامع تجارت ایران</p>
                        <p>سامانه تدارکات الکترونیکی دولت (ستاد)</p>
                        <p>نماد اعتماد الکترونیکی</p>
                        <p>مرکز دولتی صدور گواهی الکترونیکی ریشه</p>
                        <p>مرکز صدور گواهی الکترونیکی میانی عام</p>
                    </div>
                </div>
                <div className="footer__input">
                    <div className="right__button">
                        <span>تماس با ما</span>
                        <span>نقشه سایت</span>
                        <div className="lan__btn">
                            <span>فارسی</span>
                            <img src={iran}/>
                        </div>
                    </div>
                    <div className="left__button">
                        <div className="input__container">
                            <button className="news__btn">عضویت در خبرنامه</button>
                            <input placeholder="example@gmail.com"/>
                        </div>
                        <div className="icons__container">
                            <div className="icons__box">
                                <img src={wifi}/>
                            </div>
                            <div className="icons__box">
                                <img src={soroush}/>
                            </div>
                            <div className="icons__box">
                                <img src={bale}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter__container">
                    <div>
                        <span>بازدید این صفحه:</span>
                        <span>390359</span>
                    </div>
                    <div>
                        <span>بازدید امروز :</span>
                        <span>2556</span>
                    </div>
                    <div>
                        <span>کل بازدید :</span>
                        <span>130439</span>
                    </div>
                    <div>
                        <span>بازدید کنندگان انلاین:</span>
                        <span>1</span>
                    </div>
                    <div>
                        <span>نوع مرورگر کاربر:</span>
                        <span>کروم</span>
                    </div>
                    <div>
                        <span>اخرین بروزرسانی :</span>
                        <span>1401/5/20</span>
                    </div>
                </div>
                <div className="end__footer">
                    <img src={copy}/>
                    <span className="footer__end__text">
                    طراحی و پیاده سازی توسط مرکز توسعه تجارت الکترونیکی 1400
                    </span>
                    <div className="end__footer__icons">
                        <img src={image1} className="image__end__footer"/>
                        <img src={image2} className="image__end__footer"/>
                        <img src={image4} className="image__end__footer"/>
                        <img src={image5} className="image__end__footer"/>
                        <img src={image6} className="image__end__footer"/>
                        <img src={image7} className="image__end__footer"/>
                    </div>
                </div>
            </section>
        </footer>
    );
}
export default Footer;