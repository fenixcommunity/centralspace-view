import React from 'react';
import { generateKey } from '../../../../utils/keyGenerator';

function TableColumn(props) {
    const rows = props.rows;
    return (
        <tr>
            {rows && rows.map(row =>
                (<td key={generateKey(row)}>{row}</td>)
            )}
        </tr>
    )
}

export default TableColumn;
