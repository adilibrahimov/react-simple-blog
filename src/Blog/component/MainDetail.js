import React, {Component} from "react";
//import {dataDetails} from "../dataDetails";
import {data} from "../dataList";
export class MainDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataDetails: data
        }
    }
    render() {
        const say = this.props.say;
        const {img, title, category, explanation} = this.state.dataDetails[say];
        
        return(
            <div className="container">
                <img src={img} alt="daneli"/>
                <h1>{title}</h1>
                <div>{category}</div>
                <div>{explanation}</div>
            </div>
        )
    }
}
export default MainDetail