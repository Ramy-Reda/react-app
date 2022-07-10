import React from "react";
import './signe.css';
import $ from "jquery";
class Signe extends React.Component {
    componentDidMount() {
        $(".eye-hide").click(function (e) { 
            $(".pass").attr("type", "text");
            $(this).hide();
            $(".eye-show").show();
        });
        $(".eye-show").click(function (e) { 
            $(".pass").attr("type", "password");
            $(this).hide();
            $(".eye-hide").show();
        });
    }
    handleChange = (n) => {
        if (n.target.value.length <= 10) {
            document.querySelector(".pass").style.color = "red";
            document.querySelector(".alert").style.display = "block";
        } else {
            document.querySelector(".pass").style.color = "black";
            document.querySelector(".alert").style.display = "none";
        }
    }
    render() {
                return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <form className="mt-5" >
                            <input name="name" className="d-block form-control mb-3 name" type="text" placeholder="Your Name"/>
                            <input name="email" className="d-block form-control mb-3 email" type="email" placeholder="Your Email"/>
                            <input onInput={this.handleChange} name="password" className="d-block form-control mb-3 pass" type="password" placeholder="password"/>
                            <div class="alert alert-danger" style={{display: 'none'}} role="alert">
                                A simple danger alert—check it out!
                            </div>
                            <i className="fa-solid fa-eye eye-show"></i>
                            <i className="fa-solid fa-eye-slash eye-hide"></i>
                            <input className="d-block form-control mb-3 bg-success fw-600 text-white fs-4" type="submit" value="sende" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signe