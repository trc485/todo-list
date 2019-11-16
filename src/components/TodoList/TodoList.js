import React from 'react';
import { List } from 'antd';
import TodoListItem from '../TodoListItem';
import { ListItem } from './styled';

const TodoList = ({todos = [], ...rest}) => {
    return (
        <div>
            <List
                bordered
                dataSource={todos}
                renderItem={todo => (
                    <ListItem>
                        <TodoListItem
                            todo={todo}
                            {...rest}
                        />
                    </ListItem>
                )}
            />
        </div>
    );
};

export default TodoList;
