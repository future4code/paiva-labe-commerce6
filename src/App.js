import React from 'react';
import Filters from './components/Filters/Filter'
import styled from 'styled-components';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import satelite1 from './imgs/satelite1.jpg'
import satelite2 from './imgs/satelite2.jpg'
import satelite3 from './imgs/satelite3.jpg'
import satelite4 from './imgs/satelite4.jpg'
import satelite5 from './imgs/satelite5.jpg'
import satelite6 from './imgs/satelite6.jpg'

const MainContainer = styled.div`
  display:flex;
  margin:16px;
  box-sizing: border-box;
`

export default class App extends React.Component {

  state = {
    products: [
      {
        id: 1,
        name: 'Produto legal',
        price: 123,
        photo: satelite1,
        contador: 0
      },
      {
        id: 2,
        name: 'Produto 2',
        price: 200,
        photo: satelite2,
        contador: 0
      },
      {
        id: 3,
        name: 'Produto 3',
        price: 30,
        photo: satelite3,
        contador: 0
      },
      {
        id: 4,
        name: 'Produto 4',
        price: 10,
        photo: satelite4,
        contador: 0
      },
      {
        id: 5,
        name: 'Produto 5',
        price: 110,
        photo: satelite5,
        contador: 0
      },
      {
        id: 6,
        name: 'Produto 6',
        price: 177,
        photo: satelite6,
        contador: 0
      }
    ],
    itensCart: [


    ],

    minFilter: 0,
    maxFilter: 10000,
    nameFilter: "",
  }

  handleChangeMin = (event) => {
    this.setState({ minFilter: event.target.value })
  }
  handleChangeMax = (event) => {
    this.setState({ maxFilter: event.target.value })
  }
  handleChangeName = (event) => {
    this.setState({ nameFilter: event.target.value })
  }

  excluirItem = (product) => {
    console.log("clicou")
    const itensCart = this.state.itensCart.slice();
    this.setState({ itensCart: itensCart.filter((item) => item.id !== product.id) });

  }

  // addOnCart = (novoProd) => {
  //   const productsInCart = [...this.state.cart, novoProd]
  //   this.setState({ cart: productsInCart })
  // }

  
    addCart = (id) => {
      console.log(id);
    const copiaProdutos = [...this.state.products];
    console.log(copiaProdutos);
    let idProduto = copiaProdutos.filter((product) => {
      
      if(id === product.id){
        console.log("entrou no 1 if")
        return true;
      }
      return false;
    });
    let produtosCart = [...this.state.itensCart];
    let itemNoCart= false;
    produtosCart.map((prod) => {
      if (id === prod.id){
        console.log("entrou no 2 if")
        itemNoCart = true;
        prod.contador++;
      }
      return false;
    });
    if(!itemNoCart){
      console.log("entrou no contador de indefinido")
      idProduto[0].contador = 1;
      produtosCart.push(idProduto[0]);
    }
    this.setState({itensCart:[... produtosCart]});
    // const itensCart = this.state.itensCart.slice();
    // let itemNoCart = false;
    // this.state.products.forEach(item => {
    //   if (item.id === this.state.products.id) {
    //     item.contador++;
    //     itemNoCart = true;
    //   }
    // });
    // if (!itemNoCart) {
    //   itensCart.push({ ...this.item, contador: 1 });
    // }
    // const productsInCart = [...this.state.itensCart, item]
    // this.setState({ itensCart: productsInCart })
  };

  render() {

    return (
      <MainContainer>
        <Filters
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          handleChangeMin={this.handleChangeMin}
          handleChangeMax={this.handleChangeMax}
          handleChangeName={this.handleChangeName}
        />

        <Products
          products={this.state.products}
          minFilter={this.state.minFilter}
          maxFilter={this.state.maxFilter}
          nameFilter={this.state.nameFilter}
          addCart={this.addCart}
        />

        <Cart itensCart={this.state.itensCart} excluirItem={this.excluirItem} />
      </MainContainer>
    );
  }
}