import { Outlet } from "react-router-dom"
import Header from "../../components/Header"

const PageLayout = (props) => {
    return (
        <>
            <Header logar={props.functionLogar} />
            <Outlet />
        </>
    )
}

export default PageLayout