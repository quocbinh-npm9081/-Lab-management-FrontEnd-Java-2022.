import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
const generatorThu = (thu_id: number) => {
  switch (thu_id) {
    case 1:
      return 'Thứ 2';
    case 2:
      return 'Thứ 3';
    case 3:
      return 'Thứ 4';
    case 4:
      return 'Thứ 5';
    case 5:
      return 'Thứ 6';
    default:
      return '';
  }
};
const generatorHocKi = (hocki_id: number) => {
  switch (hocki_id) {
    case 1:
      return 'Học kì I 2022-2023';
    case 2:
      return 'Học kì II 2021-2022';
    default:
      return '';
  }
};
const generatorMonHoc = (mamon_id: number) => {
  switch (mamon_id) {
    case 1:
      return 'Thực hành JAVA';
    case 2:
      return 'Lập trình C#';
    case 3:
      return 'Cơ sở dữ liệu SQL Server';
    default:
      return '';
  }
};
const generatorLop = (lop_id: number) => {
  switch (lop_id) {
    case 1:
      return 'D19';
    case 2:
      return 'D21';
    case 3:
      return 'D18';
    default:
      return '';
  }
};

const DataTable: React.FC<{
  data: any;
}> = ({ data }) => {
  const navigation = useNavigate();
  const handleChangeLocation = (id: any) => {
    navigation(`/labDetail/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead
          sx={{
            backgroundColor: '#b4adcd',
            fontSize: '20px',
            fontWeight: '600!important',
          }}
        >
          <TableRow>
            <TableCell>Học kì</TableCell>
            <TableCell align="left">Thứ</TableCell>
            <TableCell align="left">Ca</TableCell>
            <TableCell align="left">Lớp</TableCell>
            <TableCell align="left">Môn</TableCell>
            <TableCell align="left">Phòng máy</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any, index: number) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {generatorHocKi(row.hocky_id)}
              </TableCell>
              <TableCell align="left">{generatorThu(row.thu_id)}</TableCell>
              <TableCell align="left">{row.ca_id}</TableCell>
              <TableCell align="left">{generatorLop(row.lop_id)}</TableCell>
              <TableCell align="left">
                {generatorMonHoc(row.mamon_id)}
              </TableCell>
              <TableCell align="left">{row.phongmay_id}</TableCell>
              <TableCell align="left">
                <Button
                  variant="outlined"
                  onClick={() => handleChangeLocation(row.phongmay_id)}
                >
                  Xem phòng máy
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
