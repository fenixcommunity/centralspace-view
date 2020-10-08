import React from 'react';
import PropTypes from 'prop-types';
import { generateKey } from '../../../../utils/keyGenerator';

const propTypes = {
    headers: PropTypes.array.isRequired
}

const TableHeader = ({ headers }) => {
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
