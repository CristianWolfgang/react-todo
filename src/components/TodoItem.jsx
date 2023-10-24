import React from 'react'
import styled from 'styled-components'
import { Icon, Image } from './Icon';
import { ACTIONS } from '../reducer';
const TodoItemContainer = styled.li`
display:flex;
justify-content: space-between;
`;
const TodoItem = ({
    activity,
    dispatch
}) => {
    const handleDelete = ()=>dispatch({type:ACTIONS.delete,activity})
  return (
    <TodoItemContainer>
        <span>{activity}</span>
        <Icon onClick={handleDelete}>
            <Image src="/trash-icon.png"/>
        </Icon>
    </TodoItemContainer>
    )
}

export default TodoItem