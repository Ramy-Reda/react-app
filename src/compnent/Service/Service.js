import React, { Component } from "react";
import "./service.css"
import axios from "axios";
class Service extends Component {
    state = {
        serviceTitles :[],
        serviceBody : [],
        imageLeft :[]
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => {
            this.setState({serviceTitles: res.data.service.serviceTitles})
        })
        axios.get('js/data.json').then(serb => {
            this.setState({serviceBody:serb.data.service.serviceBody})
        })
        axios.get('js/data.json').then((leftI) => {
            this.setState({imageLeft: leftI.data.service.imageLeft})
        })
    }
    render() {
        const {serviceTitles} = this.state;
        const serviceT = serviceTitles.map(param => {
            return(
                <div key={param.id}>
                    <img className="image1" src={param.image1} alt="img" />
                    <div className="heading">
                        <h2>{param.title}</h2>
                        <img className="image2" src={param.imageHeading} alt="img" />
                        <p>{param.body}</p>
                    </div>
                </div>
            )
        })

        const {serviceBody} = this.state;
        const body = serviceBody.map(servB => {
            return(
            <div className="box col-md-3 col-sm-12 col-xs-12 bg-light my-2" key = {servB.id}>
                <div className="icon">
                    <img className="img1" src={servB.icon} alt="img" />
                    <img className="img2" src={servB.iconHov} alt="img" />
                </div>
                <h4>{servB.title}</h4>
                <p>{servB.body}</p>
                <button> {servB.link} <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            )
        })
        return (
            <div>
                <div id="services" className="container">
                    <div className="row">
                        {serviceT}
                        {body}
                    </div>
                </div>
                <img className="float-start" src={this.state.imageLeft} alt="left" />
            </div>
        )
    }
}

export default Service