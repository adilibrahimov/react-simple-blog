import React, {Component} from "react";
import "../css/Header.css";
export class Header extends Component {
    render() {
        return (
            <nav>
                <div className="container">
                <div className="daneli"><a href="/" class="daneli-text">Daneli</a></div>
                <div className="menu">
                <ul >
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
                </div>
            </nav>
        );
    }
}
export default Header