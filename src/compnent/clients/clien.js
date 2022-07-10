import React , {Component} from "react";
import "./client.css";
import $ from "jquery"
import axios from "axios";
class Client extends Component {
    state = {
        header:{},
        bodyleft:[],
        bodyRightIm:{},
    }
    componentDidMount() {
        axios.get("./js/data.json").then(head => {
            this.setState({header:head.data.Clients.header})
        })
        axios.get("./js/data.json").then(bodyL => {
            this.setState({bodyleft:bodyL.data.Clients.body.left})
        })
        axios.get("./js/data.json").then(bodyRightImage => {
            this.setState({bodyRightIm :bodyRightImage.data.Clients.body.right.image})
        })
    }

    render() {
        const {header} = this.state;
        const {bodyleft} = this.state;
        const infoLeft = bodyleft.map((body) =>{
            return(
                <div key={body.id}>
                    <div className="rel col-lg-12">
                            <h5>{body.title}</h5>
                            <p className="date">{body.date}</p>
                            <p className="job">{body.job}</p>
                            <p className="num float-end">{body.number}</p>
                    </div>
                </div>
            )
        })
        const {bodyRightIm} = this.state;
                $(".client .rel").click(function () { 
                    $(".client .rel").removeClass("active");
                    $(this).addClass("active");
                })
        return(
            <div className="client container pt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1>{header.title}</h1>
                        <img src={header.image} alt="" />
                        <p>{header.body}</p>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="row">
                            {infoLeft}
                        </div>
                    </div>
                    <div className="info col-lg-6 col-sm-12">
                        <div className="img-bottom">
                            <img src={bodyRightIm.text} alt="" />
                            <img src={bodyRightIm.user} alt="" />
                        </div>
                        <div className="text">
                            <p className="write">Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta</p>
                            <section className="word">
                                <p>David Martino</p>
                                <p>CEO of David Company</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Client;