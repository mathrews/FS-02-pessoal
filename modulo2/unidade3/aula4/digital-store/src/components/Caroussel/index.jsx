import styled from "styled-components";
import tenis1 from "./assets/Tenis1.png"
import tenis2 from "./assets/Tenis2.png"
import tenis3 from "./assets/Tenis3.png"
import { useEffect, useState } from "react";
// import { useProducts } from "../../hooks/useProducts";

const Caroussel = () => {
    const [itemAtivo, setItemAtivo] = useState(0);
    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const {data: productsData} = useProducts()

    async function buscarBanners() {
        try {
            const response = await fetch("http://localhost:3000/banners");
            const data = await response.json() 
            setBanners(data);
            setIsLoading(false)
        } catch (error) {
            switch(error.message){
                case 'Failed to fetch':
                    return alert(`Não conectou no servidor`);
                default:
                    return alert('Falha em carregar banners, avise o suporte.')
            }
        }
        
    }

    useEffect(() => {
        buscarBanners()
    }, [])

    const changeImage = (img) => {
        switch(img){
            case "tenis1":
                return tenis1
            case "tenis2":
                return tenis2
            case "tenis3":
                return tenis3
            default:
                return tenis1
        }
    }

    return (
        <>
            <CarousselContainer>
                {isLoading ? (
                    <div>carregando...</div>
                ) : (
                    <>
                        <CarousselItems
                            $ativo={itemAtivo}
                            $items={banners.length}>
                            {banners.map((banner, index) => (
                                <CarousselItem key={index}>
                                    <CarousselContent>
                                        <CarousselSupTitle>{banner.suptitle}</CarousselSupTitle>
                                        <CarousselTitle>{banner.title}</CarousselTitle>
                                        <CarousselDescription>{banner.description}</CarousselDescription>
                                        <CarousselButton>{banner.buttonText}</CarousselButton>
                                    </CarousselContent>
                                    <CarousselImage src={changeImage(banner.image)}/>
                                </CarousselItem>
                            ))}
                        </CarousselItems>
                        <CarousselPagination>
                            {banners.map((banner, index) => (
                                <CarousselPaginationPill
                                    className={itemAtivo === index ? "active" : ""}
                                    onClick={() => setItemAtivo(index)}
                                    key={index}
                                />
                            ))}
                        </CarousselPagination>
                    </>
                )}
            </CarousselContainer>
        </>
    );
};

const CarousselContainer = styled.div`
    --dark-gray: #1f1f1f;
    --dark-gray2: #474747;
    --yellow: #f6aa1c;
    --pink: #c92071;
    --light-gray: #f5f5f5;
    --light-gray2: #cccccc;
    --pink-hover: #991956;
    --letter-spacing: 0.75px;

    position: relative;
    background-color: var(--light-gray);
    padding: 80px 0;
    overflow: hidden;
`;

const CarousselItems = styled.div`
    display: flex;
    width: calc(100vw * ${(props) => props.$items || 1});
    position: relative;
    left: calc(-100vw * ${(props) => props.$ativo || 0});
    transition-duration: 300ms;
`;

const CarousselItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0 100px;
    width: 100vw;
`;

const CarousselContent = styled.div`
    width: 45%;
`;

const CarousselSupTitle = styled.h6`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: var(--letter-spacing);
    color: var(--yellow);
`;

const CarousselTitle = styled.h2`
    font-weight: 800;
    font-size: 64px;
    line-height: 66px;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-gray);
    margin: 20px 0;
`;

const CarousselDescription = styled.p`
    font-size: 18px;
    line-height: 34px;
    letter-spacing: var(--letter-spacing);
    color: var(--dark-gray2);
    margin-bottom: 40px;
`;

const CarousselButton = styled.button`
    width: 220px;
    height: 48px;
    background-color: var(--pink);
    border-radius: 5px;
    color: var(--light-gray);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: var(--letter-spacing);
    transition-duration: 200ms;
    cursor: pointer;

    &:hover {
        background-color: var(--pink-hover);
    }
`;

const CarousselImage = styled.img`
    transform: rotate(-10deg);
    flex: 1;
    object-fit: none;
`;

const CarousselPagination = styled.div`
    display: flex;
    gap: 16px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
`;

const CarousselPaginationPill = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--light-gray2);
    transition-duration: 200ms;
    cursor: pointer;

    &.active {
        background-color: var(--pink);
    }
`;

export default Caroussel;
