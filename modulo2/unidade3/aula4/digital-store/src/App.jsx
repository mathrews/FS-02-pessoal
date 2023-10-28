import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Ways from "./routes";
import "../public/digital.css";
import { PrimeReactProvider } from "primereact/api";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const App = () => {
    const [userInfo, setUserInfo] = useState({
        name: "David",
        isLogged: false,
        level: "admin",
    });

    return (
        <>
            <AuthContext.Provider value={{ userInfo, setUserInfo }}>
                <PrimeReactProvider>
                    <Ways />
                </PrimeReactProvider>
            </AuthContext.Provider>
        </>
    );
};

export default App;
