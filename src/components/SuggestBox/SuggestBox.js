import React  , {useState} from "react";
import "./SuggestBox.css";
import SuggestBtn from "../SuggestBtn/SuggestBtn";
import Input from "../Input/Input";
const SuggestBox = (props) => {
    const [select , setSelect] = useState(false)
    const selectHandler = () => {
        setSelect(!select)
    }
    return (
        <div className="suggest__box">
            <div className="suggest__top__div">
                <SuggestBtn btnStyle={`suggestBtnStyle ${select ? "select__active2" : ""}`} SuggestBtnText={"پیشنهادات"} selectBtn={selectHandler}/>
                <SuggestBtn btnStyle={`complaintBtnStyle ${select ? "select__active" : ""}`} SuggestBtnText={"شکایات"} selectBtn={selectHandler}/>
            </div>
            <from className="suggest__input">
                <Input inputStyle={"suggest__name__input"} type={"text"} Placeholder={"نام و نام خانوادگی"}/>
                <Input inputStyle={"suggest__title__input"} type={"text"} Placeholder={"عنوان"}/>
                <Input inputStyle={"suggest__rayaname__input"} type={"text"} Placeholder={"رایانامه"}/>
                <Input inputStyle={"suggest__rayaname__input"} type={"text"} Placeholder={"تلفن همراه"}/>
                <Input inputStyle={"suggest__descript__input"} type={"text"} Placeholder={"شرح تفضیلی"}/>
                <div className="upload">
                    <label className="lable" for="upload">بارگذاری مستندات</label>
                    <p></p>
                </div>
                <Input inputStyle={"suggest__send__input"} type={"button"} value={"ارسال"}/>
                <Input inputStyle={"suggest__upload__input"} type={"file"} id={"upload"}/>
            </from>
        </div>
    )
}
export default SuggestBox;