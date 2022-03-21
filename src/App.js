import './App.css';
import Mineria from './components/Mineria/Mineria';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StyleNav from './components/navbar/StyleNav';
import { useEffect, useState } from 'react';
import Home from './components/home/Home';
import styled from 'styled-components';
import WhitePaper from './components/white_paper/WhitePaper';
import RoadMap from './components/roadMap/RoadMap';
import Wallet from './components/wallet/Wallet';
import SingleView from './components/single_view/SingleView';
import Collection from './components/collection/Collection';
import BeMiner from './components/beMiner/BeMiner';
import MarketPlace from './components/marketplace/MarketPlace';
import {dameCurrentChain, prenderCambioCadena, prenderCambioCuenta } from './components/blockchain/Blockchain';
import Planeta from '../src/components/image/planet_1.mov'
import { actulizarCuenta, loadHashima } from './components/blockchain/Pago';
import ShowCase from './components/showcase/ShowCase';


const Div=styled.div`
  background: transparent;
  height: 120vh;
`

function App() {

  const [hashima, setHashima] = useState('')
  const [screen, setScreen] = useState(0)
  const [chainId, setChainId] = useState('')
  const [account, setAccount] = useState('')
  const [contrato, setContrato] = useState({})

  useEffect(async() => {
    //Esta es la configuracion incial de Hashimas
    setAccount(await actulizarCuenta())
    await prenderCambioCuenta(setAccount)
    setChainId(await dameCurrentChain())
 

    //prender la funcion para que cambie toda la interaccion
    await prenderCambioCadena(setChainId)
  }, [])

  useEffect(async() => {
    var _contrato=await loadHashima(chainId)
    setContrato(_contrato)

  }, [chainId])

  const Video=()=>{
    return<video 
    className='video_fondo'
    autoPlay 
    loop muted>
        <source src={Planeta} 
        z></source>
          
    </video>
  }
  

  return (
    <Div screen={screen}>
      {/* <Video/> */}
      <BrowserRouter>
      <StyleNav 
      chainId={chainId}
      setScreen={setScreen}></StyleNav>
      <Routes>

      <Route exact path='/cards' element={<Mineria setHashima={setHashima}/>}></Route>
      <Route exact path='/home' element={<Home/>}></Route>
      <Route exact path='/marketplace' element={<MarketPlace 
      account={account}
      contrato={contrato} chainId={chainId}/>}></Route>

      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/whitepaper' element={<WhitePaper/>}></Route>

      <Route path='/roadmap' element={<RoadMap/>}></Route>
      <Route path='/beminer' element={<BeMiner/>}></Route>

      
      <Route path='/wallet' element={<Wallet/>}></Route>
      {/* <Route path='/workshop/' element={<WorkShop/>}></Route> */}

      <Route path='/hashi/' element={<SingleView 
      account={account} contrato={contrato} 
      chainId={chainId} hashima={hashima}/>}></Route>

      <Route path='/showcase/:id' element={<ShowCase/>}></Route>
      <Route path='/collection/showcase/:id' element={<ShowCase/>}></Route>
      <Route path='/marketplace/showcase/:id' element={<ShowCase/>}></Route>

      <Route path='/collection' element={<Collection account={account} contrato={contrato} chainId={chainId}></Collection>}></Route>



      </Routes>

      </BrowserRouter>
        
           
    </Div>
  
  );
}

export default App;
