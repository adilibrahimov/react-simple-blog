import React, {Component} from "react";
import "../css/Sidebar.css";
class Sidebar extends Component {
    render(){
        return(
            <div className="sidebar">
                <div className="sidebar-container">
                    <div className="photo">
                        <img src="img/denali.jpg" className="image" alt="denali"/>
                    </div>
                    <div className="image-botton-text">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </div>
                    <hr />

                    <div>
                        <h5>Featured Posts</h5>
                        <p className="text-p">
                            Overlaid the jeepers usellesly much excluding
                        </p>
                        <p className="text-p">
                            According a fuunliliy until preset or arogant will cherfull
                        </p>
                    </div>

                    <hr />

                    <div>
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>
                    <div className="built">
                        BUILT WITH WEBFLOOV
                    </div>
                </div>
            </div>
        )
    }
}
export default Sidebar