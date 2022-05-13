import './App.css';
import Mineria from './components/Mineria/Mineria';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StyleNav from './components/navbar/StyleNav';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import WhitePaper from './components/white_paper/WhitePaper';
import RoadMap from './pages/roadMap/RoadMap';
import MarketPlace from './pages/marketplace/MarketPlace';
import {dameCurrentChain, prenderCambioCadena, prenderCambioCuenta } from './blockchain/Blockchain';
import { actulizarCuenta } from './blockchain/Pago';
import ShowCase from './components/showcase/ShowCase';
import Home from './pages/home/Home';
import ArtistCollection from './pages/artistCollection/ArtistCollection';
import Collection from './pages/collection/Collection';


const Div=styled.div`
  background: transparent;
  height: 120vh;
`

function App() {

  const [hashima, setHashima] = useState('')
  const [screen, setScreen] = useState(0)
  const [chainId, setChainId] = useState('')
  const [account, setAccount] = useState('')
  // const [contrato, setContrato] = useState({})
  const [visibleMenu, setVisibleMenu] = useState(true)

  useEffect(async() => {
    //Esta es la configuracion incial de Hashimas
    setAccount(await actulizarCuenta())
    await prenderCambioCuenta(setAccount)
    setChainId(await dameCurrentChain())
 

    //prender la funcion para que cambie toda la interaccion
    await prenderCambioCadena(setChainId)
  }, [])

  // useEffect(async() => {
  //   let objeto=new ObjetoHashima()
  //   var _contrato=await objeto.loadHashima()
  //   setContrato(_contrato)

  // }, [chainId])

  // const Video=()=>{
  //   return<video 
  //   className='video_fondo'
  //   autoPlay 
  //   loop muted>
  //       <source src={Planeta} 
  //       z></source>
          
  //   </video>
  // }
  

  return (
    <Div screen={screen}>
      {/* <Video/> */}
      <BrowserRouter>

      {visibleMenu&&
      <StyleNav 
      chainId={chainId}
      setScreen={setScreen}/>}

      <Routes>

      <Route exact path='/cards' element={<Mineria 
      setHashima={setHashima}/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/marketplace' element={<MarketPlace/>}/>

      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/whitepaper' element={<WhitePaper/>}></Route>

      <Route path='/roadmap' element={<RoadMap/>}></Route>
      <Route path='/showcase/:id' element={<ShowCase/>}></Route>
      <Route path='/room/:name' element={<ArtistCollection setVisibleMenu={setVisibleMenu}/>}></Route>

      <Route path='/collection/showcase/:id' element={<ShowCase/>}></Route>
      <Route path='/marketplace/showcase/:id' element={<ShowCase/>}></Route>

      <Route path='/collection' element={<Collection account={account} 
      chainId={chainId}></Collection>}></Route>



      </Routes>

      </BrowserRouter>
        
           
    </Div>
  
  );
}

export default App;
