import React from 'react';
import styled from 'styled-components';


const ProductsView = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);  

`
const ProductBox = styled.div`
    border:solid 1px black;
    display:flex;
    flex-direction:column;
    box-sizing:border-box;
    flex-wrap: wrap;
    align-items:center;
    margin: 8px;
    padding-bottom:16px;
    img {
        width: 208px;
    }
`


class ProductCards extends React.Component {
    render() {

        return (
            <ProductsView>
                
            {this.props.products.map((product) => {
                return <ProductBox>
                    <img src={product.photo} />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick = {() => this.props.addCart(product)}>Adicionar ao carrinho</button>
                </ProductBox>
            })
            }
        </ProductsView>
        );
    }

}
export default ProductCards;