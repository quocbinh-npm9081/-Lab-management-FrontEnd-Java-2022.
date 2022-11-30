import React, { ReactElement, FC, useState, useEffect } from 'react';
import { Box, Typography, Button, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LockOutlined } from '@mui/icons-material';
import Form from '../components/Form/Form';
import TextFieldControl from '../components/TextFieldControl';
import { getLogin } from '../api/index';
export interface IUserSubmit {
  tendangnhap: string;
  matkhau: string;
}

const defaultValues: IUserSubmit = {
  tendangnhap: '',
  matkhau: '',
};

const Login: FC<any> = (): ReactElement => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [idUser, setIdUser] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmitLogin = async (data: any) => {
    try {
      const response = await getLogin(data);
      if (response.status === 'OK') {
        setIsLogin(true);
        setIdUser(response.data.id);
      } else {
        setIsLogin(false);
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  useEffect(() => {
    if (isLogin) navigate(`/getTeacher/${idUser}`);
  }, [isLogin, idUser, navigate]);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Form onSubmit={handleSubmitLogin} defaultValues={defaultValues}>
        <TextFieldControl
          type="text"
          id="tendangnhap"
          label="Tên đăng nhập"
          name="tendangnhap"
        />
        <TextFieldControl
          name="matkhau"
          label="Mật khẩu"
          type="password"
          id="matkhau"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đăng nhập
        </Button>
      </Form>
    </Box>
  );
};

export default Login;
