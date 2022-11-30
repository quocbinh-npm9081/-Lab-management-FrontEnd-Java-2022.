import axios from 'axios';
import { IUserSubmit } from '../views/Login';
export const getLogin = (user: IUserSubmit) => {
  const promise = axios
    .post('http://localhost:8081/loginAccount', user, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};

export const getTeacherDetail = (id: string) => {
  const promise = axios
    .get(`http://localhost:8081/getTeacher/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};

export const getThu = (id: string) => {
  const promise = axios
    .post(`http://localhost:8081/postThu/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};

export const getLopHoc = (id: string) => {
  const promise = axios
    .post(`http://localhost:8081/postLop/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};

export const getMonHoc = (id: string) => {
  const promise = axios
    .post(`http://localhost:8081/postMonHoc/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};

export const getPhongMay = (id: string) => {
  const promise = axios
    .post(`http://localhost:8081/postPhongMay`, id, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.data)
    .catch(function (error) {
      console.log(error);
    });
  return promise;
};
