import Botao from "../Botao";
import './index.css';

const Card = ({titulo, imagem, desc, categoria, lerMais = false}) => {
    return (
        <>
            <div className="card">
                <img src={imagem} alt={titulo} />
                <h3>{titulo}</h3>
                <h6>{categoria}</h6>
                <p>{desc}</p>
                <Botao 
                    titulo='Saiba Mais'
                    cor={'#0066FF'}
                    onclick={
                        () => alert('Saiba Mais')
                    }
                />
                {lerMais &&
                    <Botao 
                        titulo='Ler Depois'
                        cor={'#00DDFF'}
                        onclick={
                            () => alert('Ler Depois')
                        }
                    />
                }
            </div>
        </>
    )
}

export default Card;