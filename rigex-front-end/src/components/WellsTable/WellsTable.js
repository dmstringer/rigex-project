import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import './wellsTable.scss';
import WellsTableHead from './WellsTableHead';
import MoveIcon from '../../assets/Inactive@1.5x.svg';
import Search from '../../assets/search.svg';
import WellDropdown from '../WellsDropdown/WellsDropdown';

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const WellsTable = ({
  listOfWells,
  isSoloRig,
  handleWellModalOpen,
  handleWellDelete,
  rigId,
}) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [searchWord, setSearchWord] = useState('');
  const [filteredWells, setFilteredWells] = useState(listOfWells);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSearch = (event) => {
    let oldList = listOfWells.map((well) => {
      return {
        name: well.name,
        latitude: well.latitude,
        longitude: well.longitude,
        status: well.status,
      };
    });
    if (event !== '') {
      let newList = [];
      setSearchWord(event);
      let regexConst = new RegExp('^' + searchWord, 'i');
      newList = oldList.filter(
        (well) =>
          regexConst.test(well.name) ||
          regexConst.test(well.latitude) ||
          regexConst.test(well.longitude) ||
          regexConst.test(well.status)
      );
      setFilteredWells(newList);
    } else {
      setFilteredWells(listOfWells);
    }
  };

  return (
    <div className="wellsTableContainer">
      <div className="searchFieldContainer">
        <img
          className="searchIcon"
          alt="Move Icon"
          src={Search}
          title="Move Icon"
        />
        <input
          className="searchField"
          onChange={(event) => handleSearch(event.target.value)}
          placeholder="Search well name, latitude or longitude"
        />
      </div>
      <Table
        className="wellsTable"
        aria-labelledby="tableTitle"
        size="medium"
        aria-label="enhanced table"
      >
        <WellsTableHead
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
          rowCount={filteredWells.length}
          className="table-header"
        />
        <Droppable isDropDisabled droppableId={rigId + ' table'}>
          {(droppableProvided) => (
            <TableBody
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {stableSort(filteredWells, getComparator(order, orderBy)).map(
                ({ id, latitude, longitude, name, status }, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  let statusText = capitalize(status);

                  return (
                    <Draggable draggableId={id} index={index} key={id}>
                      {(draggableProvided) => (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          {...draggableProvided.draggableProps}
                          ref={draggableProvided.innerRef}
                        >
                          <TableCell align="left" className="well-cell">
                            <img
                              {...draggableProvided.dragHandleProps}
                              className=""
                              alt="Move Icon"
                              src={MoveIcon}
                              title="Move Icon"
                            />
                          </TableCell>
                          <TableCell
                            className="well-cell"
                            component="th"
                            id={labelId}
                            scope="row"
                          >
                            {name}
                          </TableCell>
                          <TableCell align="left" className="well-cell">
                            {latitude}
                          </TableCell>
                          <TableCell align="left" className="well-cell">
                            {longitude}
                          </TableCell>
                          <TableCell align="center" className="well-cell">
                            <div
                              className={
                                'status-box status-' +
                                (status === 'active'
                                  ? 'green'
                                  : status === 'inactive'
                                  ? 'red'
                                  : 'yellow')
                              }
                            >
                              {statusText}
                            </div>
                          </TableCell>
                          <TableCell align="right" className="well-cell">
                            <WellDropdown
                              handleWellDelete={handleWellDelete}
                              wellId={id}
                              isSoloRig={isSoloRig}
                              handleWellModalOpen={handleWellModalOpen}
                              wellName={name}
                              latitude={latitude}
                              longitude={longitude}
                              status={status}
                            />
                          </TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  );
                }
              )}
              {droppableProvided.placeholder}
            </TableBody>
          )}
        </Droppable>
      </Table>
    </div>
  );
};

export default WellsTable;
