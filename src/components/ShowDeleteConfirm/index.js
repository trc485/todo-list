import { Modal } from 'antd';
import { noop } from 'ramda-extension';

const {confirm} = Modal;

/*
This Modal component comes from antd library
The API requires to pass this function to the onClick attribute of a button
I modified it a bit to make it reusable
https://ant.design/components/modal/#header
*/

const showDeleteConfirm = ({
                               title = '',
                               content = '',
                               onConfirmDelete = noop
                           }) => {
    confirm({
        title: title,
        content: content,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            onConfirmDelete();
        }
    });
};

export default showDeleteConfirm;
