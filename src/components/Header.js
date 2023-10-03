import React,{Component} from "react";
import SideBar from "./SideBar"
import Navigation from "./NavBar";
import Slider from "./Slider";

export default class Header extends Component{
    render(){
        return (
            <div className="container-fluid mb-5">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <SideBar/>
                    </div>
                    <div className="col-lg-9">
                        <Navigation/>
                        <Slider/>
                    </div>
                </div>
            </div>
           
        )
    }
}