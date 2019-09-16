import React, {Component} from "react";
import Header from "./component/Header";
//import Main from "./component/Main";
import Sidebar from "./component/Sidebar";
import MainList from "./component/MainList";
import {data} from "./dataList";
import MainDetail from "./component/MainDetail";
import "./css/Main.css";
// import MainList from "./component/MainList";
// import dataDetails from "./dataDetails";
 
export default class App extends Component{
    state ={
        data: data,
        pageIndex: 1,
        say: 0
    }
    thisIndex = (say) => {
        this.setState({
            pageIndex: 0,
            say: say
        })
            
        
    }
    displayPage = (index) => {
        switch(index){
            default:
            case 1:
            return (<MainList data={this.state.data} thisIndex={this.thisIndex}/>)
            case 0:
            return (<MainDetail id={this.state.id} say={this.state.say}/>)
        }
    }
    
    
    render(){
        
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="containerr">
                    <Sidebar />
                        <div className="main-container">
                        {this.displayPage(this.state.pageIndex)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
