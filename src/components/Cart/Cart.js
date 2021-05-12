import React from 'react'
import styled from 'styled-components'

const BordaCard = styled.div `
border: 1px solid black;
margin: auto;
height: 100vh;
box-sizing: border-box;
width: 37.5rem;
`

const ContainerProds = styled.div `
display: flex;
margin: 5px;
padding:0 10px;
justify-content: space-between;
background-color: lightgrey;
`
const ContainerCab = styled.td `
/* display: flex; */
/* margin: 10px; */
padding:0 180px 0 35px;

justify-content: space-between;
/* background-color: lightgrey; */
`



const produtos = [
    {
        id: 1,
        nome: 'produto 1',
        preco: 10,
        imagem: ''
    },
    {
        id: 2,
        nome: 'produto 2',
        preco: 40,
        imagem: ''
    },
    {
        id: 2,
        nome: 'produto 4',
        preco: 40,
        imagem: ''
    },
    {
        id: 2,
        nome: 'produto 3',
        preco: 40,
        imagem: ''
    }
];


export function Cart(){
    const produtosCarrinho = produtos.map ((prod) => {
        return  (
            <ContainerProds>
                <p>{prod.nome}</p>
                <p>{prod.preco}</p>
                <button>Remover</button>
            </ContainerProds>
        )
    })
    return(
        <BordaCard>
            <h2>Carrinho:</h2>
            <tr>
                <ContainerCab>Item</ContainerCab>
                <ContainerCab>Preço</ContainerCab>
                <ContainerCab>Qtde</ContainerCab>
            </tr>
            
           {produtosCarrinho}
           <div>SUBTOTAL R$:</div>
        </BordaCard>
    )
}