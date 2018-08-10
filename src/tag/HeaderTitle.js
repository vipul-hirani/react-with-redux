import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class HeaderTitle extends Component {
    render() {
        return (
            <section className="about-banner">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                {this.props.headerText}
                            </h1>
                            <p className="text-white link-nav"><NavLink to="/">Home </NavLink>  <span className="lnr lnr-arrow-right"></span>  <NavLink to="#"> {this.props.headerText}</NavLink></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default HeaderTitle;