import {FC} from "react";
import {useAppSelector} from "../../app/hooks";
import {Link, NavLink, Outlet} from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProtectedRoute : FC = () => {
    const {userinfo} = useAppSelector((state)=> state.auth);

    if(!userinfo){
        return(
            <div className={"bs-body-bg"}>
                <div className={"container-sm justify-content-center"}>
                    <div className={"d-flex justify-content-center"}>
                        <div className={"row"}>
                            <div className={"g-2 mb-3"}>
                                <h1>Sie sind derzeit nicht angemeldet.</h1>
                            </div>
                        </div>
                    </div>

                    <div className={"d-flex justify-content-center"}>
                        <div className={"row"}>
                            <div className={"g-2 mb-3"}><span>Zum Betrachten dieser Seite ist eine Anmeldung erforderlich.</span></div>
                        </div>
                    </div>

                    <div className={"d-flex justify-content-center"}>
                        <div className={"row"}>
                            <div className={"g-2 mb-3"}>
                                <Link to={"/login"}>
                                    <Button variant={"outline-dark"}>
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <Outlet/>
}

export default ProtectedRoute;