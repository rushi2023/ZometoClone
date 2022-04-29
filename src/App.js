import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomePage from './pages/home';
import TabOption from './components/common/tabOption';
import { Fragment, useState } from 'react';
import Footer from './components/common/footer';
import Delivery from './components/delivery';
import DiningOut from './components/diningOut';
import NightLife from './components/nightLife';

function App() {
  const [activeTab,setActiveTab] = useState("Delivery")
  return (
    <Fragment>
  <HomePage/>
  <TabOption activeTab={activeTab} setActiveTab={setActiveTab}/>
  {getCorrectTab(activeTab)}
  <Footer/>
  </Fragment>
  );
}

const getCorrectTab=(tab)=>{
  switch(tab){
    case'Delivery':
    return<Delivery/>
    case'Dining Out':
    return<DiningOut/>
    case'Nightlife':
    return<NightLife/>
    default:return(<Delivery/>)
  }
}

export default App;
