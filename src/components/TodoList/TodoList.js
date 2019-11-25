import React from 'react';
import PropTypes from 'prop-types';
import { ConfigProvider, Empty, List } from 'antd';
import { ListItem } from './styled';
import { todosPropType } from '../../shapes';
import { defaultProps } from '../../defaultProps';
import { noop } from 'ramda-extension';

/**API**/
// This component is just ANTD List with some configured styled for use as TodoList
// I tried to keep same API as regards dataSource and render prop
// https://ant.design/components/list/

const customizeRenderEmpty = () => (
    <Empty
        description={
            <span>
                There are currently no todos. <br />
                Click button "New Item" to add new todos.
            </span>
        }
    />
);


const TodoList = ({dataSource = [defaultProps.todos], renderItem = noop}) => {
    return (
        <ConfigProvider
            renderEmpty={customizeRenderEmpty}
        >
            <List
                bordered
                dataSource={dataSource}
                renderItem={(item) => (
                    <ListItem>
                        {renderItem(item)}
                    </ListItem>
                )}
            />
        </ConfigProvider>
    );
};

TodoList.propTypes = {
    dataSource: todosPropType,
    renderItem: PropTypes.func
};

export default TodoList;
