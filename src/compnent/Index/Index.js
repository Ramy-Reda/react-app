import React,{ Component } from 'react';
import Home from './../Home/Home';
import Service from './../Service/Service';
import About from './../About/About';
import Client from "./../clients/clien"
import Pricing from './../Pricing/Pricing';
import Newsletter from './../Newsletter/Newsletter';
class Index extends Component{
    state={
        clientId:[]
    }
    render() {
        return (
        <div>
            <Home />
            <Service />
            <About />
            <Client/>
            <Pricing />
            <Newsletter />
        </div>
        );
    }
    }

export default Index;
