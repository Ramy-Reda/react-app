import React from "react";
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faApple, faGooglePlay} from "@fortawesome/free-brands-svg-icons";
import slide from "images/slider-dec.png"

const Home = () => {
    return (
        <div>
            <div className="container-fluid pt-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 im">
                        <div className="left">
                            <h2 className="fw-bold">Get The Latest App From App Stores</h2>
                            <p>Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.</p>
                            <div className="bu">
                                <button className="btn btn-primary rounded-pill text-white p-2fw-bold me-3 text-center">free quote <FontAwesomeIcon icon={faApple}></FontAwesomeIcon></button>
                                <button className="btn btn-primary rounded-pill text-white p-2fw-bold">free quote <FontAwesomeIcon icon={faGooglePlay} className=""></FontAwesomeIcon></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <img style={{border: "none"}} className="img-thumbnail rounded" src={slide} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home