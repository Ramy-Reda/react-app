import React,{ Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './compnent/Nav/Nav';
import Index from "./compnent/Index/Index"
import Signe from './compnent/Signe/Signe';
class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signe" element={<Signe />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
