import React, { forwardRef } from 'react';
import { List } from 'antd';
import TodoListItem from '../TodoListItem';
import { ListItem } from './styled';

const TodoList = forwardRef(({todos = [], ...rest}, ref) => {
    return (
        <div>
            <List
                bordered
                dataSource={todos}
                renderItem={todo => (
                    <ListItem>
                        <TodoListItem
                            todo={todo}
                            ref={ref}
                            {...rest}
                        />
                    </ListItem>
                )}
            />
        </div>
    );
});

export default TodoList;
