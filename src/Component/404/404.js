import React, {Component} from "react";

class pageNotFound extends Component {
      render() {
        return (
            <div>
                <section className="pt-100 pb-100">
                    <div className="container">
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6 banner-left">
                                <h1>404</h1>
                                <h2>Page not found</h2>
                            </div>
                            <div className="col-lg-6 col-md-6 banner-right">
                                {/*<img className="img-fluid" src={require('../img/404.png')} alt=""/>*/}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}


export default pageNotFound;