import React, {Component} from "react";
import "../css/MainList.css";
//import {Link} from "react-router-dom";
class Blog extends Component {
    render(){
        const {img, title, category, explanation} = this.props.data;
        const {thisIndex} = this.props;
        const i = this.props.i;
        return(
            
            
            <div >
                <div className="mainlist">
                    <div className="mainlist-border">
                        <img src={img} alt="denali"/>
                    </div>
                    
                    <div className="mainlist-text">
                        <h5>{title}</h5>
                        <p>{category}</p>
                        <p className="front-text">{explanation} <button onClick={() => thisIndex(i)}>Read More</button>
                        </p>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Blog