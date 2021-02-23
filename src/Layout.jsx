import React, { useState } from 'react';

import Header from './components/Header'
import Panel from './components/Panel'
import Content from './components/Content'
import Footer from './components/Footer'

const Layout = () => {
  const [backgroundColor, setBackgroundColor] = useState();
  
  const handleClick = (color) => {
    setBackgroundColor(color)
  }

  return ( 
    <>
    <div className="wrapper">
      <Header/>
      <div className="wrapContent">
        <Panel colors={backgroundColor} change={handleClick}/>
        <Content colors={backgroundColor}/>
      </div>
      <Footer/>
    </div>
    </>
   );
}
 
export default Layout;