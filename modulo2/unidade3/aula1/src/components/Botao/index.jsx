const Botao = ({cor, titulo, onclick}) => {
    
    let btnCSS = {backgroundColor: cor, width: '100px'}

    return (
        <>
            <button 
                style={btnCSS}
                onClick={onclick}
            >   {titulo}
            </button>
        </>
    )
}

export default Botao