import React from 'react';
import styled from 'styled-components';
import ProductCards from './ProductCard';

const ProductsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 60vw;
    margin: auto;
    box-sizing:border-box;
`
const ProductsHeader = styled.div`
    display:flex;
    justify-content:space-between;
    width: 100%;
    padding: 0 8px;
    box-sizing:border-box;
    margin-bottom:24px;
`

const ProductsOrder = styled.div`
    display:flex;
    align-items:center;
`



class Products extends React.Component {
    render() {

        return (
            <ProductsContainer>
                <ProductsHeader>
                    <p>Quantidade de produtos: {this.props.products.length}</p>
                    <ProductsOrder>
                        <p>Ordenação: </p>
                        <select>
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </ProductsOrder>
                </ProductsHeader>

                <ProductCards 
                    products={this.props.products} addCart = {this.props.addCart}
                />
            </ProductsContainer>
        );
    }

}
export default Products;