import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import './wellsTable.scss';
import WellsTableHead from './WellsTableHead';
import EllipsesIcon from '../../assets/dots-horizontal.svg';
import MoveIcon from '../../assets/Inactive@1.5x.svg';
import Search from '../../assets/search.svg';

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

const WellsTable = ({ listOfWells }) => {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [searchWord, setSearchWord] = useState('');
  const [filteredWells, setFilteredWells] = useState(listOfWells);

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
      };
    });
    if (event !== '') {
      let newList = [];
      setSearchWord(event);
      let regexConst = new RegExp('^' + searchWord, 'i');
      newList = oldList.filter(
        (well) => regexConst.test(well.name) || regexConst.test(well.latitude) || regexConst.test(well.longitude)
      );
      setFilteredWells(newList);
    } else {
      setFilteredWells(listOfWells);
    }
  };

  return (
    <div className='wellsTableContainer'>
      <div className='searchFieldContainer'>
        <img className='searchIcon' alt='Move Icon' src={Search} title='Move Icon' />
        <input
          className='searchField'
          onChange={(event) => handleSearch(event.target.value)}
          placeholder='Search well name, latitude or longitude'
        />
      </div>
      <TableContainer>
        <Table className='wellsTable' aria-labelledby='tableTitle' size='medium' aria-label='enhanced table'>
          <WellsTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={filteredWells.length}
          />
          <TableBody>
            {stableSort(filteredWells, getComparator(order, orderBy)).map((well, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={well.id}>
                  <TableCell align='left'>
                    <img className='' alt='Move Icon' src={MoveIcon} title='Move Icon' />
                  </TableCell>
                  <TableCell component='th' id={labelId} scope='row' padding='none'>
                    {well.name}
                  </TableCell>
                  <TableCell align='left'>{well.latitude}</TableCell>
                  <TableCell align='left'>{well.longitude}</TableCell>
                  <TableCell align='right'>
                    <img className='' alt='Ellipses Icon' src={EllipsesIcon} title='Ellipses Icon' />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default WellsTable;
