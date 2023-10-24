import React from 'react'
import styled from 'styled-components'
import { Icon, Image } from './Icon';
import { ACTIONS } from '../reducer';
const TodoItemContainer = styled.div`
display:flex;
justify-content: space-between;
`,
    ListItem = styled.li`
    margin-top:1rem;
`;
const TodoItem = ({
    activity,
    dispatch
}) => {
    const handleDelete = () => dispatch({ type: ACTIONS.delete, activity })
    return (
        <ListItem><TodoItemContainer>
            <span>{activity}</span>
            <Icon onClick={handleDelete}>
                <Image src="/trash-icon.png" />
            </Icon>
        </TodoItemContainer></ListItem>
    )
}

export default TodoItem