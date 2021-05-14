import React from 'react'

import styled from 'styled-components'
// import satelite1 from 'Cart/imgs/satelite1.jpg'
// import satelite2 from '../../imgs/satelite2.jpg'
// import satelite3 from '../../imgs/satelite3.jpg'
// import satelite4 from '../../imgs/satelite4.jpg'
// import satelite5 from '../../imgs/satelite5.jpg'
// import satelite6 from '../../imgs/satelite6.jpg'

const BordaCart = styled.div `
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
const DivItens = styled.ul `
padding: 0;
width:100%;
list-style-type: none;
`
const Imagens = styled.img `
width:5rem;
`
const Li = styled.li `
display: flex;
`
const DivLi = styled.div `
padding: 0.5rem;
`
const DivLi2 = styled.div `
flex: 1;
`

const ContainerItens = styled.div `
padding: 0;
width:100%;
list-style-type: none;
`
const DivBotao= styled.div `
text-align: right;
`





class Cart extends React.Component {
    render() {
        const {itensCart} = this.props;
        return  (
            <BordaCart>
                <h2>Carrinho:</h2>
                {this.props.itensCart.length === 0? (<div>Carrinho Vazio</div>):(<div>Carrinho com {itensCart.length}</div>)}
                <div>
                    <ContainerItens>
                        <DivItens>
                           {itensCart.map(item =>
                            <Li key={item.id}>
                                <DivLi>
                                    <Imagens src={item.photo}></Imagens>
                                </DivLi>
                                <DivLi2>
                                    <DivLi>{item.name}</DivLi>
                                    <DivBotao>
                                        Valor R$: {item.price} x {item.contador}{" "}
                                        <button onClick={() =>this.props.excluirItem(item)}>Excluir</button>
                                    </DivBotao>
                                    
                                </DivLi2>
                            </Li>
                            )} 
                        </DivItens>
                    </ContainerItens>
                </div>
            </BordaCart>
           
        );    
    }
}

export default Cart;