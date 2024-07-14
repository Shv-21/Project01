import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Nav from './components/Nav';
import FontAG_Regular from '../public/Font/A2RecordGothic_Regular.woff2';
import FontAG_Bold from '../public/Font/A2RecordGothicCondensed_Bold.woff2';
import FontAg_Medium from '../public/Font/A2RecordGothicCondensed_Medium.woff2';
import FontAG_Extrabold from'../public/Font/A2RecordGothicXCond_Extrabold.woff2'; 
import FontNG_Hel from '../public/Font/NeubauGrotesk_Hal.woff2'
import FontNG_Nor from '../public/Font/NeubauGrotesk_Nor.woff2'
import Hero from './components/Hero';
import Products from './components/Products';
import BestSellers from './components/BestSellers';
import Experience from './components/Experience';
import Collection from './components/Collection';
import HighLight from './components/HighLight';
import Findyourbike from './components/Findyourbike';
import Service from './components/Service';
import Statistic from './components/Statistic';

function App() {

const Router = createBrowserRouter([{
  path: '/',
  element: <div>
             <Nav/>
             <Hero/>
             <Products/>
             <BestSellers/>
             <Experience/>
             <Collection/>
             <HighLight/>
             <Findyourbike/>
             <Service/>
             <Statistic/>
           </div>
}])


  return (
    <Div>
      <RouterProvider router={Router}/>
    </Div>
  )
}

const Div = styled.div`
  @font-face {
    font-family: FontAG_Regular;
    src: url(${FontAG_Regular});
  }

  @font-face {
    font-family: FontAG_Bold;
    src: url(${FontAG_Bold});
  }

  @font-face {
    font-family: FontAG_Medium;
    src: url(${FontAg_Medium});
  }

  @font-face {
    font-family: FontAG_Extrabold;
    src: url(${FontAG_Extrabold});
  }

  @font-face {
    font-family: FontNG_Hel;
    src: url(${FontNG_Hel});
  }

  @font-face {
    font-family: FontNG_Hel;
    src: url(${FontNG_Hel});
  }

  @font-face {
    font-family: FontNG_Nor;
    src: url(${FontNG_Nor});
  }

`

export default App
