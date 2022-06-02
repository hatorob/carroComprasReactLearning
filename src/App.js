import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    productos: [
      { name: 'Tomate', price: 1500, img: '/productos/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg' },
      { name: 'Lechuha', price: 500, img: '/productos/lechuga.jpg' },
    ]
  }

  render() {
    return (
      <div>
        <p>
          Hola Mundo!
        </p>
      </div>
    )
  }
}


export default App;
