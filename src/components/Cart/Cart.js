import React from 'react'
import styled from 'styled-components'

const BordaCard = styled.div `
border: 1px solid black;
margin: auto;
box-sizing: border-box;
width: 37.5rem;
`

const DivProds = styled.div `
display: grid;
grid-auto-flow: column;
gap: 50px;
/* -webkit-box-align: center; */
align-items: center;
padding-left: 10px;
/* justify-content:center; */
align-items: center;
background-color: paleturquoise;
`
const DivReturn = styled.div `
margin: 10px;
`
const Parag = styled.p `
display:flex;
align-items:center;
justify-content: center;
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
            <div>
                <DivProds>
                    <Parag>{prod.nome}</Parag>
                    <Parag>{prod.preco}</Parag>
                    <Parag>{prod.contador}</Parag>

                    <div>
                        <button>Remover</button>
                    </div>
                </DivProds>
            </div>
        )
    })
    return(
        <BordaCard>
            <DivReturn>
                <h2>Carrinho:</h2>
                {/* <div>
                    <DivProds>
                        <Parag>Item</Parag>
                        <Parag>Preço</Parag>
                        <Parag>Qtde</Parag>
                        <Parag></Parag>
                      
                    </DivProds>
                </div> */}
                {produtosCarrinho}
                <br />
                <div>SUBTOTAL R$:</div>
           </DivReturn>
        </BordaCard>
    )
}