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
    state = {
        order: 'decrescente'
    }

    orderedList = () => {
        return this.props.products.sort((a,b) => {
            if(this.state.order === 'crescente'){
                return a.price-b.price
            } else {
                return b.price-a.price
            }
            
        })
    }

    onChangeOrder = (event) => {
        return this.setState({order: event.target.value})
    }

    render() {
        const orderedList = this.orderedList()
        
        return (
            <ProductsContainer>
                <ProductsHeader>
                    <p>Quantidade de produtos: {this.props.products.length}</p>
                    <ProductsOrder>
                        <p>Ordenação: </p>
                        <select value={this.state.order} onChange={this.onChangeOrder}>
                            <option value={'crescente'}>Crescente</option>
                            <option value={'decrescente'}>Decrescente</option>
                        </select>
                    </ProductsOrder>
                </ProductsHeader>

                <ProductCards 
                    orderedList={orderedList}
                />
            </ProductsContainer>
        );
    }

}
export default Products;