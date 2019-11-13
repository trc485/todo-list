import { Modal } from 'antd';

const {confirm} = Modal;

/*
This Modal component comes from antd library
The API requires to pass a function to the onClick attribute of a button
https://ant.design/components/modal/#header
Since this comes from a reusable library, and because of the way it was designed, as a function rather than a component,
I will not use reusable logic here,
I just prepare the function to be put into the todo delete button onClick attribute
*/

const showDeleteConfirm = deleteTodoFunc => todoId => () => {
    confirm({
        title: 'Are you sure you want to delete this todo?',
        content: 'Press yes to confirm deletion',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            deleteTodoFunc(todoId);
        },
    });
};

export default showDeleteConfirm
