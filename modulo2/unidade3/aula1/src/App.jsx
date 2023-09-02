import Card from "./components/Card"
import Lista from "./components/Lista"

//COMPONENTE
const App = () => {

  //LOGICA DO COMPONENTE

  return (
    //CORPO DO COMPONENTE
    <>
      <Lista titulo="Lista 1">
        <Card 
                    titulo={'Queda de avião na Rússia deixa 10 mortos; Yevgeny Prigozhin, do Grupo Wagner, estava no voo'}
                    imagem={'https://s2-g1.glbimg.com/xx7IVxnEupSA7SsVCW8f7yhVRmk=/0x0:650x971/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/a/hJYHdVSvCmJTO2RgpBQw/arte-3.png'}
                    categoria={'Novidades'}
                    desc={'A bordo, estavam sete passageiros e três membros da tripulação. A Rosaviatsia publicou os nomes e disse que todos estavam no voo "de acordo com a companhia aérea".'}
                    lerMais
        />
        <Card 
                    titulo={'Queda de avião na Rússia deixa 10 mortos; Yevgeny Prigozhin, do Grupo Wagner, estava no voo'}
                    imagem={'https://s2-g1.glbimg.com/xx7IVxnEupSA7SsVCW8f7yhVRmk=/0x0:650x971/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/a/hJYHdVSvCmJTO2RgpBQw/arte-3.png'}
                    categoria={'Novidades'}
                    desc={'A bordo, estavam sete passageiros e três membros da tripulação. A Rosaviatsia publicou os nomes e disse que todos estavam no voo "de acordo com a companhia aérea".'}
                    lerMais
        />
        <Card 
                    titulo={'Queda de avião na Rússia deixa 10 mortos; Yevgeny Prigozhin, do Grupo Wagner, estava no voo'}
                    imagem={'https://s2-g1.glbimg.com/xx7IVxnEupSA7SsVCW8f7yhVRmk=/0x0:650x971/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/a/hJYHdVSvCmJTO2RgpBQw/arte-3.png'}
                    categoria={'Novidades'}
                    desc={'A bordo, estavam sete passageiros e três membros da tripulação. A Rosaviatsia publicou os nomes e disse que todos estavam no voo "de acordo com a companhia aérea".'}
        />
      </Lista>

      <Lista titulo='Lista 2'>
      <Card 
                    titulo={'Queda de avião na Rússia deixa 10 mortos; Yevgeny Prigozhin, do Grupo Wagner, estava no voo'}
                    imagem={'https://s2-g1.glbimg.com/xx7IVxnEupSA7SsVCW8f7yhVRmk=/0x0:650x971/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/F/a/hJYHdVSvCmJTO2RgpBQw/arte-3.png'}
                    categoria={'Novidades'}
                    desc={'A bordo, estavam sete passageiros e três membros da tripulação. A Rosaviatsia publicou os nomes e disse que todos estavam no voo "de acordo com a companhia aérea".'}
                    lerMais
        />
      </Lista>
    </>
  )
}

export default App // Quando há a palavra default, significa que tudo daquela pasta está sendo exportado
