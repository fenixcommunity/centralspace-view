import React from 'react';

function TableColumn(props) {
    const rows = props.rows;
    return (
        <tr>
            {rows && rows.map(row =>
                (<td>{row}</td>)
            )}
        </tr>
    )
}

export default TableColumn;
