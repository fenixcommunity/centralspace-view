import React from 'react';

function TableHeader(props) {
    const headers = props.headers;
    return (
        <tr>
            {headers && headers.map(header =>
                (<th>{header}</th>)
            )}
        </tr>
    )
}

export default TableHeader;
