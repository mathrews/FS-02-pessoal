import Card from '../Card';
import './index.css';

const Lista = ({ children, titulo }) => {

    return (
        <>
            <h2>{titulo}</h2>
            <div className='listaDeCards'>
                {children}
            </div>
        </>
    )
}

export default Lista;