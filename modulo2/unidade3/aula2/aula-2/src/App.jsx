import { BrowserRouter, Route, Routes } from "react-router-dom"
import PageHome from "./pages/PageHome"
import PageSobre from "./pages/PageSobre"
import Header from "./components/Header"
import Ways from "./routes"

function App() {

  return (
    <>
      {/* <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/sobre" element={<PageSobre/>} />
        </Routes>
      </BrowserRouter> */}
      
      <Ways/>

    </>
  )

}

export default App
