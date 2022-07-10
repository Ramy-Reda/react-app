import React from "react";
import "./pricing.css"
import axios from "axios";
class pricing extends React.Component {
    state= {
        priceHeading: [],
        priceBody: [],
    }
    componentDidMount() {
        axios.get("./js/data.json").then(headingData => {
            this.setState({priceHeading:headingData.data.pricing.header})
        })
        axios.get("./js/data.json").then(headingBody => {
            this.setState({priceBody : headingBody.data.pricing.body})
        })
    }
    render() {
        const {priceHeading} = this.state;
        const headingList = priceHeading.map(items =>{
            return (
                        <div key={items.id} className= "heading col-lg-12 text-center">
                            <p className="h1">{items.title}</p>
                            <img src={items.imageHeading} alt=""/>
                            <p className="headBody">{items.body}</p>
                        </div>
            )
        })
        const {priceBody} = this.state;
        const bodyList = priceBody.map((price) => {
            return(
                    <div key={price.id} className="box mb-4 text-center p-5 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <img className="imgTop" src={price.topImage} alt="" />
                    <pre className="price">{price.price}</pre>
                    <pre className="h4 titlePrice">{price.title}</pre>
                    <img src={price.image} alt="" />
                    <p>{price.text}</p>
                    <p>{price.option}</p>
                    <p>{price.option2}</p>
                    <p>{price.option3}</p>
                    <p>{price.option4}</p>
                    <p>{price.option5}</p>
                    <p>{price.optionInline}</p>
                    <button className="btn bg-transparent rounded-pill border border-2 border-primary p-2 fw-bold text-primary m-4 hov" >{price.button}</button>
                    <img className="imgbottom" src={price.bottom} alt="" />
                </div>
            )
        })
        return (
            <div id="pricing" className="container">
                <div className="row">
                    {headingList}
                    {bodyList}
                </div>
            </div>
        )
    }
}

export default pricing