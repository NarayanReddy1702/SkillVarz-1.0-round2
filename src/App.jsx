import React from 'react'
import Nav from './components/Nav'
import LocomotiveScroll from 'locomotive-scroll';
import Page01 from './section2/Page01';
import Page02 from './section2/Page02';
import Page03 from './section2/Page03';
import Page04 from './section2/Page04';
import Page05 from './section2/Page05';
import Page06 from './section2/Page06';
import Page07 from './section2/Page07';



const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
   <Page01/>
   <Page02/>
  <Page03/>
  <Page04/>
  <Page05/>
  <Page07/>
  <Page06/>
    </>
  )
}

export default App