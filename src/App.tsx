import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routers';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#63b8ff',
        main: '#0989e3',
        dark: '#005db0',
        contrastText: '#000',
      },
      secondary: {
        main: '#4db6ac',
        light: '#82e9de',
        dark: '#00867d',
        contrastText: '#000',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* <Paper
          elevation={3}
          sx={{ padding: '1rem', backgroundColor: 'secondary.light' }}
        >
         
        </Paper> */}
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
