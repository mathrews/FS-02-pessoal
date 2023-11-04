import { useState } from "react";
import { AuthContext } from "./context/AuthContext";
import Ways from "./routes";
import "../public/digital.css";
import { PrimeReactProvider } from "primereact/api";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { QueryClientProvider } from "react-query";
import { queryClient } from "./service";


const App = () => {

    const [userInfo, setUserInfo] = useState({
        name: "David",
        isLogged: false,
        level: "admin",
    });

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthContext.Provider value={{ userInfo, setUserInfo }}>
                    <PrimeReactProvider>
                        <Ways />
                    </PrimeReactProvider>
                </AuthContext.Provider>
            </QueryClientProvider>
        </>
    );
};

export default App;
