import React, {Component} from "react";
import "../css/Main.css";
import Sidebar from "./Sidebar";
import MainList from "./MainList";
import {data} from "../dataList";
import MainDetail from "./MainDetail";
class Main extends Component {
    state={
        data: data
    }

    render(){
        return(
            <div className="container">
                <div className="containerr">
                    <Sidebar />
                    <div className="main-container">
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Main