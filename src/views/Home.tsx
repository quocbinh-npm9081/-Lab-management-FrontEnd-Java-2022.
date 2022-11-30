import React, { ReactElement, FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getTeacherDetail } from '../api';
import DataTable from '../components/DataTable';
const Home: FC<any> = (): ReactElement => {
  const [dataUser, setDataUser] = useState<any>();
  const [teachingDetails, setTeachingdetails] = useState<any[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async (id: any) => {
      try {
        const response = await getTeacherDetail(id);
        setDataUser(response.data);
        setTeachingdetails(response.data.chiTietDayHocs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData(id);
    return () => {
      fetchData(id);
    };
  }, [id]);

  console.log(dataUser);
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
      <DataTable data={teachingDetails} />
    </Box>
  );
};

export default Home;
