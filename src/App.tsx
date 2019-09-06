import React from 'react';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';


export class App extends React.Component<AppProps, AppState>{
  render(){
    return(
      <div>
        <Header/>
        <Footer/>
      </div>
    )
  }
}

interface BooleanArray {
}

export interface AppProps {}

export interface AppState {
}


