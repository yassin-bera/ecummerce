import React from "react";
import Sarbarg from "./components/Sarbarg/Sarbarg";
import Layout from "./Layout/Layout";
import "./Chart.css"
const Chart = (props) => {
    return(
     <Layout>
        <Sarbarg sarbargTitle={"چارت سازمانی"}/>
        <div className="chart__main__container">
            <img src="https://test1.ecommerce.gov.ir/_next/static/media/%D8%B3%D8%A7%D8%AE%D8%AA%D8%A7%D8%B1%20%D8%B3%D8%A7%D8%B2%D9%85%D8%A7%D9%86%DB%8C.e436f85e.png"/>
        </div>
     </Layout>
     );
}
export default Chart;