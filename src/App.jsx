import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Nav from './components/Nav';
import FontAG_Regular from '../public/Font/A2RecordGothic_Regular.woff2';
import FontAG_Bold from '../public/Font/A2RecordGothicCondensed_Bold.woff2';
import FontAg_Medium from '../public/Font/A2RecordGothicCondensed_Medium.woff2';
import FontAG_Extrabold from'../public/Font/A2RecordGothicXCond_Extrabold.woff2'; 
import Hero from './components/Hero';

function App() {

const Router = createBrowserRouter([{
  path: '/',
  element: <div>
            <Nav/>
            <Hero/>
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

`

export default App
