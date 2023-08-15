import React from "react";
import Layout from "./Layout/Layout";
import Sarbarg from "./components/Sarbarg/Sarbarg";
import Table from "./components/Table/Table";
import "./MizKhedmat.css";
const MizKhedmat = (props) => {
    return (
        <Layout>
            <Sarbarg sarbargTitle={"میز خدمت الکترونیکی"}/>
            <div className="mizKhedmat__container">
                <Table/>
            </div>
        </Layout>
    );
}

export default MizKhedmat;