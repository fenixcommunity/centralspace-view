import React from 'react';
import { generateKey } from '../../../utils/keyGenerator';

function TableHeader(props) {
    const headers = props.headers;
    return (
        <tr>
            {headers && headers.map(header =>
                (<th key={generateKey(header)}>{header}</th>)
            )}
        </tr>
    )
}

export default TableHeader;
