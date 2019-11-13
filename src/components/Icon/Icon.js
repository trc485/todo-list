import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle as faCircleRegular } from '@fortawesome/free-regular-svg-icons';
import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const typesMap = {
    'circle-filled': faCircleSolid,
    'circle-outlined': faCircleRegular,
    'edit': faPencilAlt,
    'delete': faTrashAlt,
};

const Icon = ({type, ...rest}) => {
    return (
        <FontAwesomeIcon
            icon={typesMap[type]}
            {...rest}
        />
    );
};

export default Icon;
