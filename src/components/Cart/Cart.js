import React from 'react'
import styled from 'styled-components'

const BordaCart = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction:column;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    padding:8px;
    width: 20vw;
`

const DivItens = styled.ul`
    padding: 0;
    list-style-type: none;
`
const Imagens = styled.img`
    width:5rem;
`
const Li = styled.li`
    display: flex;
`
const DivLi = styled.div`
    padding: 0.5rem;
`
const DivLi2 = styled.div`
    flex: 1;
`

const ContainerItens = styled.div`
    padding: 0;
    list-style-type: none;
`
const DivBotao = styled.div`
    text-align: right;
`





class Cart extends React.Component {
    render() {
        const { itensCart } = this.props;
        return (
            <BordaCart>
                <h2>Carrinho:</h2>
                {this.props.itensCart.length === 0 ? (<div>Carrinho Vazio</div>) : (<div>Carrinho com {itensCart.length}</div>)}
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
                                            <button onClick={() => this.props.excluirItem(item)}>Excluir</button>
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