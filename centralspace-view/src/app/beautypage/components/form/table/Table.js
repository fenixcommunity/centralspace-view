import React from 'react'
import '../../../../../resources/beautypage/css/table.css';
import TableColumn from './TableColumn';
import TableHeader from './TableHeader';

function Table(props) {
    const headers = props.headers;
    const columns = props.columns;
    const stripedClass = props.striped ? "striped" : "";
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

export default Table

