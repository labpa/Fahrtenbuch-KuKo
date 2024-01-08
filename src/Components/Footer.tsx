import React, {FC} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom";

const Footer : FC = () => {

    return(
        <div className={"container-sm"}>
            <footer className="page-footer font-small blue pt-4 border bg-dark">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Fahrtenbuch</h5>
                            <p>Informationen über das Fahrtenbuch</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Fahrtenbuch</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/home">Fahrtenbuch</a></li>
                                <li><a href="/liste">Liste</a></li>

                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">About</h5>
                            <ul className="list-unstyled">
                                <li><a href="/contact">Kontakt</a></li>
                                <li><a href="/impressum">Impressum</a></li>
                                <li><a href="/test">Test</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2024 Copyright:
                    <a href="https://github.com/labpa"> Labpa</a>
                </div>

            </footer>


        </div>
    )
}
export default Footer;