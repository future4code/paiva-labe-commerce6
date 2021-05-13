import React from 'react';
import styled from 'styled-components';
import Products from './components/Products/Products';


const products = [
  {
      id: 1,
      name: 'Produto legal',
      price: 123,
      photo: 'https://picsum.photos/200/200?a=1'
  },
  {
      id: 2,
      name: 'Produto 2',
      price: 200,
      photo: 'https://picsum.photos/200/200?a=2'
  },
  {
      id: 3,
      name: 'Produto 3',
      price: 30,
      photo: 'https://picsum.photos/200/200?a=3'
  },
  {
      id: 4,
      name: 'Produto 4',
      price: 10,
      photo: 'https://picsum.photos/200/200?a=4'
  }
]

class App extends React.Component {
  render() {

  return (
    <div className="App">     
      <div>
        {/* <Filters></Filters> 
        <Cart></Cart>  */}
        <Products
          products={products}
        />
      </div>
    </div>
  );
}

}
export default App;
