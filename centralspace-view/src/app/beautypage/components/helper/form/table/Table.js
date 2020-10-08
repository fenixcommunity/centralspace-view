import React from 'react'
import '../../../../../../resources/beautypage/css/table.css';
import TableColumn from './TableColumn';
import TableHeader from './TableHeader';

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

const Table = ({ }) => {
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

Table.propTypes = propTypes;

export default Table

