import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageSobre from "../pages/PageSobre";
import PageLayout from "../layouts/PageLayout";
import PageNotFound from "../pages/PageNotFound";
import PageLogada from "../pages/PageLogada";

const Ways = () => {

  let estaLogado = true;

  return (
    <>
        <BrowserRouter>
            <Routes>

                {
                  estaLogado ? (
                    <Route path="/" element={<PageLogada/>}/>
                  ) : (
                    <Route path="/" element={<PageLayout />} >

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
