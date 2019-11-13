import React, { forwardRef } from 'react';
import TodoListItem from '../TodoListItem';
import { ListContainer } from './styled';

const TodoList = forwardRef(({
                                 todos = [],
                                 ...rest
                             }, ref) => {
    return todos.length === 0 ? null : (
        <ListContainer>
            {
                todos.map(todo => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        ref={ref}
                        {...rest}
                    />
                ))
            }
        </ListContainer>
    );
});

export default TodoList;
