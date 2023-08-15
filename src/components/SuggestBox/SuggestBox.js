import React  , {useState , useEffect} from "react";
import "./SuggestBox.css";
import SuggestBtn from "../SuggestBtn/SuggestBtn";
import Input from "../Input/Input";
import axios from "axios";
import Tostify from "../Tostify/Tostify";
import { toast } from 'react-toastify';


const SuggestBox = (props) => {
    const [error , setError] = useState([])
    const [selectSuggest , setSuggestSelect] = useState(true)
    const [selectCrim , setSelectCrim] = useState(false)
    const selectSuggestHandler = () => {
        setSuggestSelect(!selectSuggest)
        setSelectCrim(!selectCrim)
    }
    const selectCrimHandler = () => {
        setSelectCrim(!selectCrim)
        setSuggestSelect(!selectSuggest)
    }
    const [postInfo , setPostInfo] = useState({
        name : "" , subject : "" ,
        email : "" , phone : "" , 
        message : "" , type : "",
        appendices : {
            file : ""
        }
    })
    postInfo.type = selectSuggest ? "co" : "cr";
    // const x = selectSuggest ? "co" : "cr";
    // console.log(x);
    const inputChangeHandler = (event) => {
        const { name, value } = event.target;
        // console.log(value, name)
        setPostInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const fileInputChangeHandler = (event) => {
        const file = event.target.files[0];
        setPostInfo((prevInfo) => ({
            ...prevInfo,
            appendices: {
                file: file
            }
        }));
    };

    const sendRequestHandler = async () => {
        const apiUrl = 'https://backendtest.ecommerce.gov.ir/contact_us_api/complaints/';
        const token = "13f34a15e523785deece406a856834068c3d1add";

        try {
            const formData = new FormData();
            formData.append('file', postInfo.appendices.file);
            formData.append('name', postInfo.name);
            formData.append('subject', postInfo.subject);
            formData.append('email', postInfo.email);
            formData.append('phone', postInfo.phone);
            formData.append('message', postInfo.message);
            formData.append('type', postInfo.type);

            const response = await axios.post(apiUrl, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.response.data);
            const translate = {
                'email': "ایمیل",
                'phone': "شماره تلفن",
                'message': "متن پیام",
                'file': "فایل",
                'name': "نام",
                'subject': "موضوع",
            }
            if(error.response.data){
                const key = Object.keys(error.response.data)[0];
                const value = error.response.data[key];
                toast.error(`${translate[key]} : ${value}`, {
                    position: toast.POSITION.TOP_LEFT
                });
            }
            
            setError(error.response.data);
        }
    };


    return (
 
        
        <div className="suggest__box">
            {/* <div>
                {error.map((err) => {
                    return <Tostify errText={err[0]}/>
                })}
            </div> */}
           {/* <Tostify errText={"rughreughreughuregherughreughruegh"}/> */}
            <div className="suggest__top__div">
                <SuggestBtn btnStyle={`suggestBtnStyle ${selectSuggest ? "cr" : ""}`} SuggestBtnText={"پیشنهادات"} selectBtn={selectSuggestHandler}/>
                <SuggestBtn btnStyle={`complaintBtnStyle ${selectCrim ? "co" : ""}`} SuggestBtnText={"شکایات"} selectBtn={selectCrimHandler}/>
            </div>
            <from className="suggest__input">
                <Input inputStyle={"suggest__name__input"} type={"text"} Placeholder={"نام و نام خانوادگی"} onChange={inputChangeHandler} name={"name"}/>
                <Input inputStyle={"suggest__title__input"} type={"text"} Placeholder={"عنوان"} onChange={inputChangeHandler} name={"subject"}/>
                <Input inputStyle={"suggest__rayaname__input"} type={"text"} Placeholder={"رایانامه"} onChange={inputChangeHandler} name={"email"}/>
                <Input inputStyle={"suggest__rayaname__input"} type={"text"} Placeholder={"تلفن همراه"} onChange={inputChangeHandler} name={"phone"}/>
                <Input inputStyle={"suggest__descript__input"} type={"text"} Placeholder={"شرح تفضیلی"} onChange={inputChangeHandler} name={"message"}/>
                <div className="upload">
                    <label className="lable" for="upload">بارگذاری مستندات</label>
                    <p></p>
                </div>
                <Input inputStyle={"suggest__send__input"} type={"button"} value={"ارسال"} onClick={sendRequestHandler}/>
                <Input inputStyle={"suggest__upload__input"} type={"file"} id={"upload"} onChange={fileInputChangeHandler} name={"file"}/>
            </from>
        </div>
    )
}
export default SuggestBox;