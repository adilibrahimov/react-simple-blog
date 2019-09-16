import React, {Component} from "react";
import "../css/MainList.css";
import Blog from "./Blog";
export class MainList extends Component {
    render(){
        const {data, thisIndex} = this.props;
        return(
            <React.Fragment>
            {
                data.map((data, i) => {
                    return(
                            <Blog key={data.id} data={data} thisIndex={thisIndex} i={i}/>
                    )
                })
            }
            
            </React.Fragment>
            
           
            
        )
    }
}
export default MainList