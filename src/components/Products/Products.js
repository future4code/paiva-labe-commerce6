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
        return this.props.products.filter(product => product.price >= this.props.minFilter)
            .filter(product => product.price <= this.props.maxFilter)
            .filter(product => product.name.includes(this.props.nameFilter))
            .sort((a, b) => this.state.order === 'crescente' ? a.price - b.price : b.price - a.price)
    }

    onChangeOrder = (event) => {
        return this.setState({ order: event.target.value })
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
                    addOnCart={this.props.addOnCart}
                    orderedList={orderedList}
                    addCart = {this.props.addCart}
                />
            </ProductsContainer>
        );
    }

}
export default Products;