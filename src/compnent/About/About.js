import React, {Component} from "react";
import "./About.css";
import axios from "axios";
class About extends Component{
    state = {
        headingAbout:[],
        bodyLeft:[],
        bodyRight:[]
    }
    componentDidMount(){
        axios.get('js/data.json').then( test => {
            this.setState({headingAbout: test.data.about.headingAbout})
        })
        axios.get('js/data.json').then( bodyL => {
            this.setState({bodyLeft : bodyL.data.about.des.left})
        } )
        axios.get('js/data.json').then( bodyR => {
            this.setState({bodyRight : bodyR.data.about.des.right})
        })
    }

    render(){
        const {headingAbout} = this.state;
        const head = headingAbout.map(h => {
            return (
                <div key={h.id} className="top ">
                    <h1>{h.title}</h1>
                    <img src={h.imageHeading} alt="" />
                    <p>{h.body}</p>
                </div>
            )
        })
        const {bodyLeft} = this.state;
        const body = bodyLeft.map(left => {
            return(
                    <div  className="des col-lg-6 col-md-6 col-sm-12 col-xs-12" key={left.id}>
                        <h6>{left.link}</h6>
                        <p>{left.text}</p>
                    </div>
            )
        })
        const {bodyRight} = this.state;
        const right = bodyRight.map(item => {
            return(
                <div key={item.id}>
                    <img className="bottom img-fluid" src={item.bottom} alt=""/>
                    <img className="top img-fluid" src={item.top} alt=""/>
                </div>
            )
        })
        return (
            <div id="about" className="container-fluid mt-3">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        {head}
                        <div className="row">
                            {body}
                            <div className="lo col-lg-12 col-md-12 col-sm12">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eismod tempor idunte ut labore et dolore adipiscing magna</p>
                                <button>
                                    start 14-free matrial
                                </button>
                                <p>*No Credit Card Required</p>
                            </div>
                        </div>
                    </div>
                    <div className="right col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        {right}
                    </div>
                </div> 
            </div>
        )
    }
}

export default About