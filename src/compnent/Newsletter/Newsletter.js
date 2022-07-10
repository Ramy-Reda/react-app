import React from "react";
import "./newsletter.css"
import axios from "axios";
class Newsletter extends React.Component {
state={
    News:{},
}
    componentDidMount(){
        axios.get("./js/data.json").then( data => {
            this.setState({News:data.data.newsLetter})
        })
    }
render() {
    const {News} = this.state;
        return (
                <div id="newsLetter" className="container-fluid">
                    <div className="row">
                        <div className="new col-lg-12">
                            <p className="h1 text-center text-white">
                                {News.title}
                            </p>
                        </div>
                        <div className="col-lg-12 text-center mt-3">
                            <input type="text" className="me-5"  placeholder="Email"/>
                            <button className="btn btn bg-transparent rounded-pill border border-1 border-white p-2 fw-bold text-white">
                                Subscribe Now
                            </button>
                        </div>
                        <div className="col-lg-12">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-xs-12 mt-4 text-white">
                                        <h1>Contact Us</h1>
                                        <ul className="list-unstyled">
                                            <li className="mt-2">ramyreda88809@Gmail.com</li>
                                            <li className="mt-2">01025066564</li>
                                            <li>rrss202@yahoo.com</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-xs-12 mt-4 text-white">
                                        <h1>About Us</h1>
                                        <ul className="list-unstyled">
                                            <li className="mt-2">Home</li>
                                            <li className="mt-2">Services </li>
                                            <li className="mt-2">About</li>
                                            <li className="mt-2">estimonials</li>
                                            <li className="mt-2">Pricing</li>
                                            <li className="mt-2">About</li>
                                            <li className="mt-2">Testimonials</li>
                                            <li className="mt-2">Pricing</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-xs-12 mt-4 text-white">
                                        <h1>Useful Links</h1>
                                        <ul className="list-unstyled">
                                            <li className="mt-2">Free Apps</li>
                                            <li className="mt-2">App Engine </li>
                                            <li className="mt-2">programing</li>
                                            <li className="mt-2">Development</li>
                                            <li className="mt-2">App news</li>
                                            <li className="mt-2">App Dev Team</li>
                                            <li className="mt-2">digitel web</li>
                                            <li className="mt-2">Normal Apps</li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-3 col-xs-12 mt-4 text-white">
                                        <h1>About Our Company</h1>
                                        <ul className="list-unstyled">
                                            <li className="mt-2">ENG/Ramy Reda</li>
                                            <li className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</li>
                                        </ul>
                                    </div>  
                                </div>
                            </div>
                            <div className="col-lg-12 text-center mt-5 text-white fw-bold fs4 my-5">
                                Copyright © 2022 ENG/Ramy reda. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Newsletter