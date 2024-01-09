import React, {FC} from "react";
import {Link} from "react-router-dom";


const Footer : FC = () => {

    return(
        <div className={"container-sm"} data-bs-theme={"dark"}>
            <div className={"bg-body-tertiary"}>
                <footer className={"py-1 "}>
                    <ul className={"nav justify-content-center border-bottom pb-1 mb-1"}>
                        <li className={"nav-link "}> <Link className={"link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"} to={"/"}>Home</Link></li>
                        <li className={"nav-link"}> <Link className={"link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"} to={"/impressum"}>Impressum</Link></li>
                        <li className={"nav-link"}><Link className={"link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"} to={"contact"}>Kontakt</Link></li>
                    </ul>
                    <p className={"text-center text-body-secondary"}>© 2024 Copyright:
                        <a className={"link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"} href="https://github.com/labpa"> Labpa</a></p>
                </footer>
            </div>
        </div>
    )
}
export default Footer;