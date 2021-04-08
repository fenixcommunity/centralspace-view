import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../resources/beautypage/css/table.css';
import TableColumn from './TableColumn';
import TableHeader from './TableHeader';

const propTypes = {
    striped: PropTypes.bool,
    headers: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired
}

const Table = ({ headers, columns, striped }) => {
    const stripedClass = striped ? "striped" : "";
    return (
        <table className={`highlight centered responsive-table ${stripedClass}`}>
            <thead>
                <TableHeader headers={headers} />
            </thead>
            <tbody>
                {columns && columns.map(column =>
                    <TableColumn key={column.id} rows={column.elements} />
                )}
            </tbody>
        </table>
    )
}

Table.propTypes = propTypes;

export default Table

