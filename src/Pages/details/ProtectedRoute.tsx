import {FC} from "react";
import {useAppSelector} from "../../app/hooks";
import {NavLink, Outlet} from "react-router-dom";

const ProtectedRoute : FC = () => {
    const {userinfo} = useAppSelector((state)=> state.auth);

    if(!userinfo){
        return(
            <div>
                <h1>NICHT ANGEMELDET</h1>
            </div>
        )
    // }else {
    //     return (
    //         <div>
    //             <h1>ANGEMELDET</h1>
    //         </div>
    //     )
    }
    return <Outlet/>
}

export default ProtectedRoute;