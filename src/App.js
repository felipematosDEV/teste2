import React, { Component } from 'react';
import Styles from './styles';
import Card from './components/card'
import logo from './logo.svg';
import CardImage from './components/card/cardImage'
import imagem from './images';

class App extends Component {
  render() {
    return <div className="App">
        <div className="absolute w-100 h-100 desktopBG desktopBG-ns cover">
        <div className="flex flex-column items-center justify-center">
            <img className="mv4" src={imagem.logo}/>
            <Card />
          </div>
        </div>
      </div>;
  }
}

export default App;
