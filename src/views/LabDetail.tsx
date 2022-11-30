import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhongMay } from '../api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';

const LabDetail: React.FC<any> = (): React.ReactElement => {
  const [mays, setMays] = useState<any[]>([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async (id: any) => {
      try {
        const response = await getPhongMay(id);
        setMays(response.data.mays);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(id);
    return () => {
      fetchData(id);
    };
  }, [id]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >

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
              <TableCell align="left">Số thứ tự</TableCell>
              <TableCell align="left">Tình trạng</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mays.map((row: any, index: number) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sothutumay}
                </TableCell>
                <TableCell align="left">{row.tinhtrang}</TableCell>

                <TableCell align="left">
                  <Button
                    variant="outlined"
                    //   onClick={() => handleChangeLocation(row.phongmay_id)}
                  >
                    Xem chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LabDetail;
