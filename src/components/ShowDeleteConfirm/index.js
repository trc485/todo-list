import { Modal, Button } from 'antd';

const {confirm} = Modal;

/*
This Modal component comes from ant library
The API requires to pass a function to the onClick attribute of a button
https://ant.design/components/modal/#header
Since this comes from a reusable library, and because of the way it was designed, as a function rather than a component,
I will not use reusable logic here,
I just prepare the function to be put into the todo delete button onClick attribute
*/

export default () => {
    confirm({
        title: 'Are you sure delete this task?',
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            onOk();
        },
        onCancel() {
            onCancel();
        },
    });
}
