import styled from "styled-components";

const TodoContainer = styled.ul`
    width: 90%;
    margin:1rem auto 0;
    border: 2px solid black;
    padding:2rem;

    list-style-type: disclosure-closed;    
`;
import React from 'react'
import TodoItem from "./TodoItem";

export const TodoList = ({items,dispatch}) => {
    const Items = [];
    for(const key in items){
        Items.push(<TodoItem activity={key} key={items[key].key} dispatch={dispatch}/>);
    }
    return (
        <TodoContainer>
            {Object.keys(items).length===0 ?"No hay pendientes": Items}
        </TodoContainer>
    )
}
