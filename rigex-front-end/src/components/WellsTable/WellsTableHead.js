import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import './wellsTable.scss';

const headCells = [
  { id: 'name', disablePadding: true, label: 'Well Name' },
  { id: 'latitude', disablePadding: false, label: 'Latitude' },
  { id: 'longitude', disablePadding: false, label: 'Longitude' },
  { id: 'status', disablePadding: false, label: 'Status' },
];

const WellsTableHead = (props) => {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="right"></TableCell>
        {headCells.map(({ id, disablePadding, label }) => (
          <TableCell
            key={id}
            align={id === 'status' ? 'center' : 'left'}
            padding={disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === id ? order : false}
          >
            <TableSortLabel
              className={'header ' + (id === 'status' ? 'status-header' : '')}
              active={orderBy === id}
              direction={orderBy === id ? order : 'asc'}
              onClick={createSortHandler(id)}
            >
              {label}
              {orderBy === id ? (
                <span className="visuallyHidden">
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="right"></TableCell>
      </TableRow>
    </TableHead>
  );
};

WellsTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default WellsTableHead;
