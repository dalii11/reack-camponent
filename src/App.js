import "./App.css";
import ProfilPoto from "./component/Profil/ProfilPoto";
import FullName from "./component/Profil/FullName";
import Address from "./component/Profil/Address";
import { Fragment } from "react";

function App() {
    return (
        <Fragment>
            <div className = "prof">
                <ProfilPoto />
                <FullName />
                <Address />
            </div>
        </Fragment>
    );
}

export default App;
