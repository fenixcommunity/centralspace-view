import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../../../utils/keyGenerator';

const propTypes = {
    XXX: PropTypes.string.isRequired,
    XXX: PropTypes.bool.isRequired,
    XXX: PropTypes.node.isRequired,
    XXX: PropTypes.func.isRequired,
    cardAction: PropTypes.arrayOf(
        PropTypes.shape({
            XXX: PropTypes.string.isRequired,
        })
    ).isRequired,
}

const TableHeader = ({}) => {
    const headers = props.headers;
    return (
        <tr>
            {headers && headers.map(header =>
                (<th key={generateKey(header)}>{header}</th>)
            )}
        </tr>
    )
}

TableHeader.propTypes = propTypes;

export default TableHeader;
