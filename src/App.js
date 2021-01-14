import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos.js';
import Header from './components/layout/Header';

class App extends Component {
  state = {
    myArr: [
      {
        task: 'Cold Pressed Coconut Oil',
        id: '1',
        complete: false,
        img1:
          'https://ik.imagekit.io/l3zzzksiuty/gullack_products/product_1609423721_50044471712.webp',
      },
      {
        task: 'Gentle Baby Wipes',
        id: '2',
        complete: false,
        img1:
          'https://ik.imagekit.io/l3zzzksiuty/gullack_products/product_1609416966_383452114.webp',
      },
      {
        task: 'Baby Bedding Set with Mosquito Net',
        id: '3',
        complete: false,
        img1:
          'https://ik.imagekit.io/l3zzzksiuty/gullack_products/product_1575977347_1061135139.webp',
      },
    ],
    urlEndpoint: 'https://ik.imagekit.io/l3zzzksiuty',
  };

  toggleComplete = (e) => {
    this.setState({
      myArr: this.state.myArr.map((obj) => {
        if (obj.id === e) {
          obj.complete = !obj.complete;
        }
        return obj;
      }),
    });
  };
  deletetask = (e) => {
    this.setState({
      myArr: [...this.state.myArr.filter((obj) => obj.id !== e)],
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          myArr2={this.state.myArr}
          toggleComplete={this.toggleComplete}
          deletetask={this.deletetask}
          urlEndpoint={this.state.urlEndpoint}
        />
      </div>
    );
  }
}

export default App;
