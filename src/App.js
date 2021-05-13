import React from 'react';
import Filters from './components/Filters/Filter'
import styled from 'styled-components';
import Products from './components/Products/Products';
import {Cart} from './components/Cart/Cart';
import satelite1 from './imgs/satelite1.jpg'
import satelite2 from './imgs/satelite2.jpg'
import satelite3 from './imgs/satelite3.jpg'
import satelite4 from './imgs/satelite4.jpg'
import satelite5 from './imgs/satelite5.jpg'
import satelite6 from './imgs/satelite6.jpg'



class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: 'Produto legal',
        price: 123,
        photo: satelite1
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 200,
        photo: satelite2
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: satelite3
      },
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: satelite4
      },
      {
        id: 5,
        name: 'Produto 5',
        price: 110,
        photo: satelite5
      },
      {
        id: 6,
        name: 'Produto 6',
        price: 177,
        photo: satelite6
      }
    ]
  }

  render() {
    
  return (
    <div className="App">     
      <div>
        <Cart></Cart>          
        <Products
            products={this.state.products}
          />
        <Filters/>
      </div>
    </div>);
  }

}
export default App;
