import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faNavicon } from "@fortawesome/free-solid-svg-icons"
import $ from "jquery"

class Nav extends Component {
    componentDidMount(){
        $(".show").click(function () {
            $(this).hide()
            $(".list-items").show(400);
            $(".hide").show()
        });
        $(".hide").click(function () {
            $(this).hide()
            $(".list-items").hide(300);
            $(".show").show()
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 100 ) {
                $(".nav").css({background:"white"});
                
            } else{
                $(".nav").css({background:"transparent"});
            }
        })
    }
    render() {
        return (
            <div className="nav">
                <div className="container">
                <div className="row">
                    <div className="logo col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <h3>Eng/Ramy</h3>
                    </div>
                    <div className=" col-lg-9 col-md-0 col-sm-0 col-xs-0">
                        <ul className="list-items text-end list-unstyled">
                            <li className="item">
                            <Link to="/"> Home </Link>
                            </li>
                            <li className="item">
                                <a href="#services">Services</a>
                            </li>
                            <li className="item">
                                <a href="#about">About</a>
                            </li>
                            <li className="item">
                                <a href="#pricing">Pricing</a>
                            </li>
                            <li className="item">
                                <a href="#Newsletter">Newsletter</a>
                            </li>
                            <li className="item sign">
                                <Link style={{color: 'white'}} to="/signe"> Signe </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="res">
                            <div className="hide"> x </div>
                            <FontAwesomeIcon icon={faNavicon} className="show"></FontAwesomeIcon>
                </div>
            </div>
            </div>
        )
    }
} 

export default Nav