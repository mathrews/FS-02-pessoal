const PageLogada = (props) => {
    return (
        <>
            <h1>Você está logado</h1>
            <button onClick={props.functionLogout}>logout</button>
        </>
    )
}

export default PageLogada