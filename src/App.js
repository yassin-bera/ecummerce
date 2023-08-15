import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Layout from "./Layout/Layout";
import Assistance from "./Assistance";
import Sakhtar from "./Sakhtar";
import Suggestion from "./Suggestion";
import Main from "./Main";
import SingleNews from "./Pages/singleNews";
import Chart from "./Chart";
import AllNews from "./AllNews";
// import Tostify from "./components/Tostify/Tostify";
import MizKhedmat from "./MizKhedmat";
const App = (props) =>{

  return(
      <Routes>
        <Route path="/assistance" element={<Assistance/>}/>
        <Route path="/sakhtar" element={<Sakhtar/>}/>
        <Route path="/suggestion" element={<Suggestion />} />
        <Route path="/" element={<Main />} />
        <Route path="/news/:id" element={<SingleNews />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/miz" element={<MizKhedmat/>} />
      </Routes>
    )

}
export default App;



