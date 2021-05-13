import React from 'react';
import styled from 'styled-components'

const Borda = styled.div`
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border: 1px solid black;
    width: 15vw;
    height: 90vh;
`

const Input = styled.input`
    display: flex;
    border: 1px solid black;
    width: 10vw;
`
export default class Filters extends React.Component {
    render() {
        return (
            <Borda>
                <h1>Filtros</h1>
                <p>Valor Mínimo:</p>
                <Input type="number"></Input>
                <p>Valor Máximo:</p>
                <Input type="number"></Input>
                <p>Busca por nome:</p>
                <Input type="text"></Input>
            </Borda>
        )
    }
}