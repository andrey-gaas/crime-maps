import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  IconButton,
} from '@material-ui/core';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from '@material-ui/icons';

function ListNews(props) {
  const { list } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getDate = timestamp => {
    const date = new Date(timestamp);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return `${day}.${month}.${year}/${hours}:${minutes}`;
  };

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>ID Новости</TableCell>
          <TableCell>Заголовок</TableCell>
          <TableCell>Дата/Время</TableCell>
          <TableCell align="right">Действия</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0 ?
          list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : list
          ).map((news) => (
            <TableRow key={news.id}>
              <TableCell component="th" scope="row">
                {news.id}
              </TableCell>
              <TableCell>
                {news.title}
              </TableCell>
              <TableCell>
                {getDate(news.date)}
              </TableCell>
              <TableCell align="right">
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25, { label: 'Все', value: -1 }]}
            colSpan={3}
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'Количество новостей на странице' },
              native: true,
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}

ListNews.propTypes = {
  list: PropTypes.array.isRequired,
};

export default ListNews;
