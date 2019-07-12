import React from 'react';
import { Header } from './Components/Header/Header';
import { MainElement } from './Components/Main/MainElement';
import { Footer } from './Components/Footer/Footer';


export class App extends React.Component<AppProps>{
  render(){
    return(
      <div>
        <Header className = ""/>
        <MainElement/>
        <Footer className = ""/>
      </div>
    )
  }
}

export interface AppProps {}


