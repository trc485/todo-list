import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import { ListItem } from './styled';
import { todosPropType } from '../../shapes';
import { defaultProps } from '../../defaultProps';
import { noop } from 'ramda-extension';

/**API**/
// This component is just ANTD List with some configured styled for use as TodoList
// I tried to keep same API as regards dataSource and render prop
// https://ant.design/components/list/

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
