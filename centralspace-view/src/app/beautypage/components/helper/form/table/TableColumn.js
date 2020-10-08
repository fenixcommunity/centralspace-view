import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../../../utils/keyGenerator';

const propTypes = {
    rows: PropTypes.array.isRequired
}

const TableColumn = ({ rows }) => {
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
