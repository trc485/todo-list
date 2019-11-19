import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { ListItem } from './styled';
import { todosPropType } from '../../shapes';
import { defaultProps } from '../../defaultProps';
import { noop } from 'ramda-extension';

const TodoList = ({dataSource = defaultProps.todos, renderItem = noop}) => {
    return (
        <List
            bordered
            dataSource={dataSource}
            renderItem={(item) => (
                <ListItem>
                    {renderItem(item)}
                </ListItem>
            )}
        />
    );
};

TodoList.propTypes = {
    dataSource: todosPropType,
    renderItem: PropTypes.func
};

export default TodoList;
