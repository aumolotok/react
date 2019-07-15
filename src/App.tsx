import React from 'react';
import { Header } from './Components/Header/Header';
import { MainElement } from './Components/Main/MainElement';
import { Footer } from './Components/Footer/Footer';


export class App extends React.Component<AppProps, AppState>{

  constructor(props : AppProps){
    super(props);
    this.state = {
        cardsVisibility : [true, false, false]
    }
}

  render(){
    return(
      <div>
        <Header className = ""/>
        <MainElement cardsVisibility = {this.state.cardsVisibility}/>
        <Footer className = ""/>
      </div>
    )
  }

  changeCardsState(index : number) {
    this.state = {
      cardsVisibility : this.state.cardsVisibility.map( () =>  false)
    }
  }
}

interface BooleanArray {
  [index: number]: boolean;
}

export interface AppProps {}

export interface AppState {
  cardsVisibility: Array<boolean>;
}


