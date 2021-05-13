import React from 'react';
import styled from 'styled-components';
import ProductCards from './ProductCard'


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
                    <p>Quantidade de produtos: {products.length}</p>
                    <ProductsOrder>
                        <p>Ordenação: </p>
                        <select>
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </ProductsOrder>
                </ProductsHeader>

                <ProductCards 
                    products={products}
                />
            </ProductsContainer>
        );
    }

}
export default Products;