import React from 'react'
import Nav from './components/Nav'
import Home from './sections/Home'
import LocomotiveScroll from 'locomotive-scroll';
import Page2 from './sections/Page2';
import Page1 from './sections/Page1';


const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Nav/>
    <Home/>
    <Page1/>
    <Page2/>
    </>
  )
}

export default App