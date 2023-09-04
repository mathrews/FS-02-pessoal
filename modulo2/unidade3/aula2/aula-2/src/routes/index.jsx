import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSobre from "../pages/PageSobre";
import PageLayout from "../layouts/PageLayout";
import PageNotFound from "../pages/PageNotFound";
import PageLogada from "../pages/PageLogada";
import { useState } from "react";

const Ways = () => {
  
  const [estaLogado, setLogin] = useState(false);

  function setarLog() {
    return estaLogado ? setLogin(false) : setLogin(true)
  }
  
  return (
    <>
        <BrowserRouter>
            <Routes>
                {
                  estaLogado ? (
                    <Route path="/" element={<PageLogada functionLogout={setarLog}/>}/>
                    ) : (
                      <Route path="/" element={<PageLayout functionLogar={setarLog} />} >

                        <Route index element={<PageHome />}/>

                        <Route path="/sobre" element={<PageSobre />}/>

                      </Route>
                  )
                }

                <Route path="*" element={<PageNotFound />}/>
            </Routes>
        </BrowserRouter>
    </>
  );
};

export default Ways;