import React, {FC} from "react";
import {Link} from "react-router-dom";

const Footer : FC = () => {

    return(
        <div className={"container-sm"} data-bs-theme={"dark"}>
            <footer className="page-footer font-small text-white bg-dark pt-4">
                <div className="container-fluid text-left text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Fahrtenbuch</h5>
                            <p>Informationen über das Fahrtenbuch</p>
                            <p>Lernprojekt im Rahmen der Umschulung zum/r Fachinformatiker*in für Anwendungsentwicklung </p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0"/>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">Seiten</h5>
                            <ul className="list-unstyled">
                                <div>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><Link to={"/home"}>Fahrtenbuch</Link></li>
                                    <li><Link to={"/liste"}>Liste</Link></li>
                                </div>

                            </ul>
                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">
                            <h5 className="text-uppercase">About</h5>
                            <ul className="list-unstyled">
                                <li><Link to={"/test"} style={{color:"white"}}>Test</Link></li>
                                <li><Link to={"/contact"}>Kontakt</Link></li>
                                <li><Link to={"/impressum"}>Impressum</Link></li>
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