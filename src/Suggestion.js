import React , {useState} from "react";
import Layout from "./Layout/Layout"
import Sarbarg from "./components/Sarbarg/Sarbarg"
import ProposalItem from "./components/ProposalItem/ProposalItem";
import SuggestBox from "./components/SuggestBox/SuggestBox";
// import ShowErorr from "./components/ShowErorr/ShowErorr";
import "./Suggestion.css"
const Suggestion = (props) => {
    const [proposalInfo , setProposalInfo] = useState([
        {itemImage : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%AA%D9%84%D9%81%D9%86.e0634e95.png" , itemTitle : "تلفن" , itemNumber : "021-41031000"},
        {itemImage : "https://test1.ecommerce.gov.ir/_next/static/media/%D8%AF%D8%A8%DB%8C%D8%B1%D8%AE%D8%A7%D9%86%D9%87.f5b781b1.png" , itemTitle : "ایمیل" , itemNumber : "info@Ecommerce.gov.ir"},
        {itemImage : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%86%D9%85%D8%A7%D8%A8%D8%B1.aa5cb836.png" , itemTitle : "دبیرخانه" , itemNumber : "021-41031000"},
        {itemImage : "https://test1.ecommerce.gov.ir/_next/static/media/%D9%86%D9%85%D8%A7%D8%A8%D8%B1.aa5cb836.png" , itemTitle : "نمابر" , itemNumber : "021-41031000"},
    ])
    return (
    <Layout>
        <Sarbarg sarbargTitle={"سامانه ثبت پیشنهادات و شکایات"}/>
        {/* <div className="suggest__box__error">
        <div className="ShowErorr">
                {props.errorText.map((err) => {
                    <ShowErorr text={err}/>
                })}
            </div>
        </div> */}
        <div className="prop__items">
            <div className="prop__item__maker"> 
              {proposalInfo.map((item)=>{
                    return(
                        <ProposalItem itemImage={item.itemImage} itemTitle={item.itemTitle} itemNumber={item.itemNumber}/>
                    )
              })}
              </div>
        </div>
        <div className="suggest__container">
            <SuggestBox />
        </div>
    </Layout>
  );
}
export default Suggestion;