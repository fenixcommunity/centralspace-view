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

const TableColumn = ({}) => {
    const rows = props.rows;
    return (
        <tr>
            {rows && rows.map(row =>
                (<td key={generateKey(row)}>{row}</td>)
            )}
        </tr>
    )
}

TableColumn.propTypes = propTypes;

export default TableColumn;
